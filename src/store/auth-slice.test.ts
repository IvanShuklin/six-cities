import reducer, { logout } from './auth-slice';
import { AuthorizationStatus } from '../const/const';
import { UserData } from '../types/user-data';

describe('authSlice reducer', () => {
  const initialState = {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null,
    isAuthChecked: false,
    error: null,
  };

  it('should return initial state with empty action', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should set authorizationStatus to NoAuth and clear user with "logout"', () => {
    const modifiedState = {
      ...initialState,
      authorizationStatus: AuthorizationStatus.Auth,
      user: { email: 'test@test.com' } as unknown as UserData
    };

    const result = reducer(modifiedState, logout());

    expect(result.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    expect(result.user).toBeNull();
  });
});
