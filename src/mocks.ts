import { Offer } from './types/offer';
import { Comment } from './types/comment';

export const mockOffer: Offer = {
  id: '1',
  title: 'Beautiful apartment',
  type: 'apartment',
  price: 120,
  previewImage: 'img/test.jpg',
  rating: 4.5,
  isFavorite: false,
  isPremium: false,
} as Offer;

export const mockComment: Comment = {
  id: 1,
  date: '2024-01-01',
  comment: 'Very nice place',
  rating: 4,
  user: {
    name: 'John',
    avatarUrl: 'img/avatar.jpg',
    isPro: false
  }
} as Comment;
