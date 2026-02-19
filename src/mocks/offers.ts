import { HousingType } from '../types/housing-type';
import { Offer } from '../types/offer';
import { CITIES } from '../const/cities';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: HousingType.Apartment,
    price: 120,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,

    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
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

    city: CITIES[3],
  },
  {
    id: '2',
    title: 'Light and modern apartment near the centre',
    type: HousingType.Apartment,
    price: 132,
    rating: 4.5,
    isPremium: false,
    isFavorite: true,

    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
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

    city: CITIES[3],
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

    city: CITIES[3],
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

    city: CITIES[3],
  },
  {
    id: '5',
    title: 'Romantic flat near the Seine',
    type: HousingType.Apartment,
    price: 150,
    rating: 4.7,
    isPremium: true,
    isFavorite: false,

    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
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

    city: CITIES[0],
  },
  {
    id: '6',
    title: 'Cozy studio in Montmartre',
    type: HousingType.Room,
    price: 90,
    rating: 4.2,
    isPremium: false,
    isFavorite: true,

    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    images: [
      'markup/img/room.jpg',
      'markup/img/apartment-01.jpg',
    ],

    bedrooms: 1,
    maxAdults: 2,

    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Towels'],

    host: {
      name: 'Julien Martin',
      avatarUrl: 'markup/img/avatar-max.jpg',
      isPro: false,
    },

    description: [
      'Small but charming studio in the heart of Montmartre.',
      'Walking distance to Sacré-Cœur.',
    ],

    location: {
      latitude: 48.8867,
      longitude: 2.3431,
      zoom: 8,
    },

    city: CITIES[0],
  },
  {
    id: '7',
    title: 'Spacious loft with Eiffel Tower view',
    type: HousingType.Apartment,
    price: 320,
    rating: 4.9,
    isPremium: true,
    isFavorite: false,

    previewImage: 'markup/img/apartment-03.jpg',
    images: [
      'markup/img/apartment-03.jpg',
      'markup/img/apartment-02.jpg',
    ],

    bedrooms: 2,
    maxAdults: 4,

    goods: ['Wi-Fi', 'Air conditioning', 'Dishwasher', 'Washing machine', 'Coffee machine'],

    host: {
      name: 'Sophie Laurent',
      avatarUrl: 'markup/img/avatar-angelina.jpg',
      isPro: true,
    },

    description: [
      'Luxury loft with breathtaking Eiffel Tower view.',
      'Perfect for families or couples.',
    ],

    location: {
      latitude: 48.8584,
      longitude: 2.2945,
      zoom: 8,
    },

    city: CITIES[0],
  },
  {
    id: '9',
    title: 'Modern flat near Cologne Cathedral',
    type: HousingType.Apartment,
    price: 140,
    rating: 4.5,
    isPremium: false,
    isFavorite: false,

    previewImage: 'markup/img/apartment-02.jpg',
    images: [
      'markup/img/apartment-02.jpg',
    ],

    bedrooms: 1,
    maxAdults: 2,

    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Coffee machine'],

    host: {
      name: 'Lukas Schneider',
      avatarUrl: 'markup/img/avatar-max.jpg',
      isPro: true,
    },

    description: [
      'Modern flat just a few minutes from Cologne Cathedral.',
      'Ideal for business trips.',
    ],

    location: {
      latitude: 50.9413,
      longitude: 6.9583,
      zoom: 8,
    },

    city: CITIES[1],
  },
  {
    id: '10',
    title: 'Family house with Rhine view',
    type: HousingType.House,
    price: 210,
    rating: 4.6,
    isPremium: true,
    isFavorite: true,

    previewImage: 'markup/img/apartment-01.jpg',
    images: [
      'markup/img/studio-01.jpg',
      'markup/img/apartment-03.jpg',
    ],

    bedrooms: 3,
    maxAdults: 6,

    goods: ['Wi-Fi', 'Parking', 'Washing machine', 'Dishwasher', 'Garden'],

    host: {
      name: 'Anna Müller',
      avatarUrl: 'markup/img/avatar-angelina.jpg',
      isPro: true,
    },

    description: [
      'Spacious family house with beautiful Rhine river view.',
      'Quiet neighborhood and private garden.',
    ],

    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 8,
    },

    city: CITIES[1],
  },
];
