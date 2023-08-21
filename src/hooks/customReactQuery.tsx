import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IQueryRequestParams, IResponse } from 'interfaces/react-query.interface';

import { useCallback } from 'react';

interface IUseCustomQuery<TRequestParams, TData> {
  params: Omit<IQueryRequestParams<TRequestParams, TData>, 'variables'>;
  queryOptions: UseQueryOptions<IResponse<TData>, AxiosError<IResponse<TData>>>;
}

interface ILazyQueryParams<TRequestParams, TData>
  extends Omit<IQueryRequestParams<TRequestParams, TData>, 'variables'> {
  onChangeVariableRef?: (variables: TRequestParams) => void;
}

interface IUseLazyQuery<TRequestParams, TData> {
  params: ILazyQueryParams<TRequestParams, TData>;
  queryOptions: Omit<UseQueryOptions<IResponse<TData>, AxiosError<IResponse<TData>>>, 'enabled'>;
}

function useBasicQuery<TRequestParams, TData>({
  params,
  queryOptions,
}: IUseCustomQuery<TRequestParams, TData>) {
  const { onSuccess, onError } = params;

  const { data, error, isSuccess, isError, ...others } = useQuery<
    IResponse<TData>,
    AxiosError<IResponse<TData>>
  >({
    ...queryOptions,
  });

  if (isSuccess && onSuccess) {
    onSuccess(data);
  }
  if (isError && onError) {
    onError(error);
  }

  return { data, isSuccess, isError, ...others };
}

function useLazyQuery<TRequestParams, TData>({
  params,
  queryOptions,
}: IUseLazyQuery<TRequestParams, TData>) {
  const { onSuccess, onError, onChangeVariableRef } = params;

  const fetchResult = useQuery<IResponse<TData>, AxiosError<IResponse<TData>>>({
    ...queryOptions,
    enabled: false,
  });

  const lazyQuery = useCallback(
    async (variables?: TRequestParams) => {
      if (variables && onChangeVariableRef) {
        onChangeVariableRef(variables);
      }
      const { data, isSuccess, isError, error, ...others } = await fetchResult.refetch();

      if (isSuccess && onSuccess) {
        onSuccess(data);
      }
      if (isError && onError) {
        onError(error);
      }

      return { data, isSuccess, isError, error, ...others };
    },
    [fetchResult, onChangeVariableRef, onError, onSuccess],
  );

  return [lazyQuery, fetchResult] as const;
}

export { useBasicQuery, useLazyQuery };
