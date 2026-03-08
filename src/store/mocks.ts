import { Offer } from '../types/offer';
import { HousingType } from '../types/housing-type';

export const mockOffer: Offer = {
  id: '1',
  title: 'Test offer',
  type: HousingType.Apartment,
  price: 100,
  city: {
    name: 'Paris',
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 10,
    },
  },
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 10,
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  previewImage: '',
  bedrooms: 1,
  goods: [],
  host: {
    name: 'Host',
    avatarUrl: '',
    isPro: false,
  },
  images: [],
  maxAdults: 2,
  description: '',
};
