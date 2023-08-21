import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'client';
import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Text>안녕!!</Text>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
