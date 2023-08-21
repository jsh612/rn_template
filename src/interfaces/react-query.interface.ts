import { AxiosError } from 'axios';

export interface IResponse<TData = unknown> {
  code: 'SUCCESS' | 'ERROR';
  message: string;
  data: TData;
}

export interface IBaseRequestParams<TError = unknown> {
  onError?: (err: TError) => void;
}

export interface IQueryRequestParams<
  TVariables,
  TData = unknown,
  TError = AxiosError<IResponse<TData>>,
> extends IBaseRequestParams<TError> {
  variables?: TVariables;
  onSuccess?: (data: IResponse<TData>) => void;
}

export interface IPostRequestParams<
  TVariables,
  TData = unknown,
  TError = AxiosError<IResponse<TData>>,
> extends IBaseRequestParams<TError> {
  onSuccess?: (data: IResponse<TData>, variables: TVariables, context: unknown) => void;
}
