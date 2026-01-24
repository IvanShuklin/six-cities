import { Offer } from './types/offer';

export function getFavoritesCount(offers: Offer[]): number {
  return offers.filter((offer) => offer.isFavorite).length;
}
