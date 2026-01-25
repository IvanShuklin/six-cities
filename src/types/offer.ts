export type Offer = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;

  previewImage: string;
  images: string[];

  bedrooms: number;
  maxAdults: number;

  goods: string[];

  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };

  description: string[];

  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };

  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
};
