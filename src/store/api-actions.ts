import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const/const';
import { saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const checkAuth = createAsyncThunk<
  AuthorizationStatus,
  void,
  { extra: AxiosInstance }
>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      return AuthorizationStatus.Auth;
    } catch {
      return AuthorizationStatus.NoAuth;
    }
  }
);

export const login = createAsyncThunk<
  AuthorizationStatus,
  AuthData,
  { extra: AxiosInstance; rejectValue: string }
>(
  'user/login',
  async ({ email, password }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<UserData>(
        APIRoute.Login,
        { email, password }
      );

      saveToken(data.token);

      return AuthorizationStatus.Auth;
    } catch (error) {
      return rejectWithValue('Login failed');
    }
  }
);
