import { HousingType } from './housing-type';
import { Location } from './location';
import { City } from './city';

export type Offer = {
  id: string;
  title: string;
  type: HousingType;
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

  description: string;

  location: Location;

  city: City;
};
