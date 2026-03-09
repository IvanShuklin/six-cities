import { Offer } from './types/offer';
import { Comment } from './types/comment';
import { HousingType } from './types/housing-type';

export const mockOffer: Offer = {
  id: '1',
  title: 'Beautiful apartment',
  type: HousingType.Apartment,
  price: 120,
  previewImage: 'img/test.jpg',
  rating: 4.5,
  isFavorite: false,
  isPremium: false,

  city: {
    name: 'Amsterdam',
    location: { latitude: 0, longitude: 0, zoom: 10 }
  },
  location: { latitude: 0, longitude: 0, zoom: 10 },
  images: [],
  bedrooms: 1,
  maxAdults: 2,
  goods: [],
  host: {
    name: 'John',
    avatarUrl: 'img/avatar.jpg',
    isPro: false
  },
  description: 'test'
};

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
};
