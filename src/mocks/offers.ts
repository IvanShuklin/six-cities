import { HousingType } from '../types/housing-type';
import { Offer } from '../types/offer';
import { AMSTERDAM, PARIS } from './cities';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: HousingType.Apartment,
    price: 120,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,

    previewImage: 'markup/img/apartment-01.jpg',
    images: [
      'markup/img/studio-01.jpg',
      'markup/img/apartment-01.jpg',
      'markup/img/apartment-02.jpg',
      'markup/img/apartment-03.jpg',
    ],

    bedrooms: 3,
    maxAdults: 4,

    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cable TV',
      'Fridge',
    ],

    host: {
      name: 'Oliver Conner',
      avatarUrl: 'markup/img/avatar-max.jpg',
      isPro: false
    },

    description: [
      ' A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
    ],

    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },

    city: AMSTERDAM,
  },
  {
    id: '2',
    title: 'Light and modern apartment near the centre',
    type: HousingType.Apartment,
    price: 132,
    rating: 4.5,
    isPremium: false,
    isFavorite: true,

    previewImage: 'markup/img/apartment-02.jpg',
    images: [
      'markup/img/apartment-02.jpg',
      'markup/img/apartment-03.jpg',
      'markup/img/studio-01.jpg'
    ],

    bedrooms: 2,
    maxAdults: 3,

    goods: [
      'Wi-Fi',
      'Kitchen',
      'Coffee machine',
      'Washer'
    ],

    host: {
      name: 'Sofia Mills',
      avatarUrl: 'markup/img/avatar-angelina.jpg',
      isPro: true
    },

    description: [
      'Bright and modern flat with large windows and quiet street view. Ideal for couples and business travelers.',
      'Located within walking distance to museums and public transport; small supermarket on the corner.'
    ],

    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },

    city: AMSTERDAM,
  },
  {
    id: '3',
    title: 'Cozy room in historical building',
    type: HousingType.Room,
    price: 80,
    rating: 4.2,
    isPremium: false,
    isFavorite: false,

    previewImage: 'markup/img/room.jpg',
    images: [
      'markup/img/room.jpg',
      'markup/img/apartment-01.jpg'
    ],

    bedrooms: 1,
    maxAdults: 2,

    goods: [
      'Heating',
      'Wi-Fi',
      'Towels'
    ],

    host: {
      name: 'Markus L.',
      avatarUrl: 'markup/img/avatar-max.jpg',
      isPro: false
    },

    description: [
      'Small and comfortable room in a historical building. Perfect for solo travelers who prefer a quiet district.',
      'Close to tram stops and local cafes. Shared kitchen available.'
    ],

    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },

    city: AMSTERDAM,
  },
  {
    id: '4',
    title: 'Spacious house with canal view',
    type: HousingType.House,
    price: 180,
    rating: 5.0,
    isPremium: true,
    isFavorite: true,

    previewImage: 'markup/img/apartment-03.jpg',
    images: [
      'markup/img/apartment-03.jpg',
      'markup/img/apartment-02.jpg',
      'markup/img/studio-01.jpg'
    ],

    bedrooms: 4,
    maxAdults: 6,

    goods: [
      'Heating',
      'Wi-Fi',
      'Kitchen',
      'Parking',
      'Dishwasher'
    ],

    host: {
      name: 'Elena V.',
      avatarUrl: 'markup/img/avatar-angelina.jpg',
      isPro: true
    },

    description: [
      'A large warm house with direct canal view and a small private garden. Great for family stays and groups.',
      'Includes modern kitchen, two bathrooms and fast internet. Quiet neighborhood but within 15 minutes of the city centre.'
    ],

    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },

    city: AMSTERDAM
  },
  {
    id: '5',
    title: 'Romantic flat near the Seine',
    type: HousingType.Apartment,
    price: 150,
    rating: 4.7,
    isPremium: true,
    isFavorite: false,

    previewImage: 'markup/img/apartment-02.jpg',
    images: ['markup/img/apartment-02.jpg'],

    bedrooms: 1,
    maxAdults: 2,

    goods: ['Wi-Fi', 'Coffee machine'],

    host: {
      name: 'Claire Dubois',
      avatarUrl: 'markup/img/avatar-angelina.jpg',
      isPro: true,
    },

    description: [
      'Perfect place for a romantic stay in Paris.',
    ],

    location: {
      latitude: 48.857,
      longitude: 2.351,
      zoom: 8,
    },

    city: PARIS,
  },
];
