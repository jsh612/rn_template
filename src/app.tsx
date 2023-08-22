import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'client';
import RootStackNavigation from 'navigation/RootStack.navigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <SafeAreaProvider>
          <RootStackNavigation />
        </SafeAreaProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
