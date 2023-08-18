import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmbedding: Scalars['String']['output'];
  postMessage: Scalars['String']['output'];
};

export type MutationCreateEmbeddingArgs = {
  embeddingOutputPath: Scalars['String']['input'];
  originDataPath: Scalars['String']['input'];
};

export type MutationPostMessageArgs = {
  message: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  queryChatCompletion: Scalars['String']['output'];
  sayHello: Scalars['String']['output'];
  searchEmbedding: Array<Scalars['String']['output']>;
};

export type QueryQueryChatCompletionArgs = {
  name: Scalars['String']['input'];
  prompt: Scalars['String']['input'];
};

export type QuerySearchEmbeddingArgs = {
  embeddingDataPath: Scalars['String']['input'];
  searchText: Scalars['String']['input'];
};

export type TestQueryVariables = Exact<{ [key: string]: never }>;

export type TestQuery = { __typename?: 'Query'; sayHello: string };

export const TestDocument = gql`
  query test {
    sayHello
  }
`;

/**
 * __useTestQuery__
 *
 * To run a query within a React component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestQuery(baseOptions?: Apollo.QueryHookOptions<TestQuery, TestQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TestQuery, TestQueryVariables>(TestDocument, options);
}
export function useTestLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TestQuery, TestQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TestQuery, TestQueryVariables>(TestDocument, options);
}
export type TestQueryHookResult = ReturnType<typeof useTestQuery>;
export type TestLazyQueryHookResult = ReturnType<typeof useTestLazyQuery>;
export type TestQueryResult = Apollo.QueryResult<TestQuery, TestQueryVariables>;
