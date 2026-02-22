import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const/const';
import { saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';

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
  { extra: AxiosInstance }
>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<{ token: string }>(
      APIRoute.Login,
      { email, password }
    );

    saveToken(data.token);

    return AuthorizationStatus.Auth;
  }
);
