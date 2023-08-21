import { ApolloClient, InMemoryCache, createHttpLink, from, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import axios from 'axios';
import { createClient } from 'graphql-ws';
import { store } from 'redux/store';

const BASE_API_URL = 'BASE_API_URL';
const WS_URL = 'WS_URL';

export const axiosClient = axios.create({
  baseURL: BASE_API_URL,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: WS_URL,
    connectionParams: {
      authToken: store.getState().persistedReducer.authReducer.accessToken, //'ACCESS_TOKEN'
    },
  }),
);

const httpLink = createHttpLink({
  uri: BASE_API_URL,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const authLink = setContext(async (_, context) => {
  const accessToken = store.getState().persistedReducer.authReducer.accessToken;

  if (accessToken != null) {
    return {
      ...context,
      headers: {
        ...context.headers,
        authorization: accessToken ? `Bearer ${accessToken}` : undefined,
      },
    };
  }

  return context;
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError != null) {
    if (networkError.message === 'Network request failed') {
      if (__DEV__ === true) {
        return;
      }
      /**
       * 오류 처리 내용
       */
    }
  }
  if (graphQLErrors != null && graphQLErrors.length > 0) {
    if (graphQLErrors.some((graphQLError) => graphQLError.extensions.code === 'UNAUTHENTICATED')) {
      /**
       * 오류 처리 내용
       */
    }
  }
});

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink.concat(splitLink)]),
  cache: new InMemoryCache({}),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'network-only',
    },
    mutate: {
      fetchPolicy: 'network-only',
    },
  },
});
