import { AuthorizationStatus } from '../const/const';

export const createMockUser = () => ({
  name: 'Test User',
  avatarUrl: 'img/avatar.jpg',
  isPro: false,
  email: 'test@test.com',
  token: 'test-token',
});

export const createMockAuth = () => ({
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: null,
});
