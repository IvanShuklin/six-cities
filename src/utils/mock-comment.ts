import { Comment } from '../types/comment';

export const createMockComment = (): Comment => ({
  id: 1,
  date: '2024-01-01',
  comment: 'Very nice place',
  rating: 4,
  user: {
    name: 'John',
    avatarUrl: 'img/avatar.jpg',
    isPro: false,
  },
});
