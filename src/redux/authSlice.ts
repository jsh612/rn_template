import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  expiredTime: '',
};

export const authSlice = createSlice({
  name: 'Auth',
  initialState: initialState,
  reducers: {
    changeAccessToken: (state, inputValue: PayloadAction<string>) => {
      state.accessToken = inputValue.payload;
    },

    changeExpiredTime: (state, inputValue: PayloadAction<string>) => {
      state.expiredTime = inputValue.payload;
    },
  },
});

export const { changeAccessToken, changeExpiredTime } = authSlice.actions;

export default authSlice.reducer;
