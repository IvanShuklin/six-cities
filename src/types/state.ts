import { City } from './city';
import { Offer } from './offer';

export type MainState = {
  city: City;
  offers: Offer[];
};
