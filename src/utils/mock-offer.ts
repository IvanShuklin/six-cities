import { Offer } from '../types/offer';
import { HousingType } from '../types/housing-type';

export const createMockOffer = (): Offer => ({
  id: '1',
  title: 'Beautiful apartment',
  type: HousingType.Apartment,
  price: 120,
  rating: 4.5,
  isPremium: false,
  isFavorite: false,

  previewImage: 'img/1.png',
  images: [],

  bedrooms: 1,
  maxAdults: 2,

  goods: [],

  host: {
    name: 'John',
    avatarUrl: 'img/avatar.jpg',
    isPro: false,
  },

  description: 'Test description',

  location: {
    latitude: 48.8566,
    longitude: 2.3522,
    zoom: 13,
  },

  city: {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 13,
    },
  },
});
