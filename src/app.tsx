import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'client';
import RootStackNavigation from 'navigation/RootStack.navigation';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <RootStackNavigation />
      </ApolloProvider>
    </Provider>
  );
}

export default App;
