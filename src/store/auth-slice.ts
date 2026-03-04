import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const/const';
import { UserData } from '../types/user-data';
import { checkAuth, login } from './api-actions';
import { State } from '../types/main-state';

type AuthState = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  isAuthChecked: boolean;
  error: string | null;
};

const initialState: AuthState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  isAuthChecked: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.isAuthChecked = true;
      })

      .addCase(login.pending, (state) => {
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload ?? 'Login failed';
      });
  },
});

export const selectUser = (state: State) => state.auth.user;
export const selectAuthStatus = (state: State) =>
  state.auth.authorizationStatus;

export const { logout } = authSlice.actions;
export default authSlice.reducer;

