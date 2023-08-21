import AsyncStorage from '@react-native-async-storage/async-storage';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { PERSIST, PURGE, REGISTER, persistReducer, persistStore } from 'redux-persist';
import authReducer from 'redux/authSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: [], // redux-toolkit api reducer paths
  whitelist: ['authReducer'],
};

const rootReducer = combineReducers({
  authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },

  // FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER, PURGE, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
