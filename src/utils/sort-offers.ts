import { Offer } from '../types/offer';
import { SortOption, SORTING_OPTIONS } from '../const/const';

export function sortOffers(offers: Offer[], sortOption: SortOption): Offer[] {
  const copy = offers.slice();

  switch (sortOption) {
    case SORTING_OPTIONS.PRICE_LOW_TO_HIGH:
      return copy.sort((a, b) => a.price - b.price);
    case SORTING_OPTIONS.PRICE_HIGH_TO_LOW:
      return copy.sort((a, b) => b.price - a.price);
    case SORTING_OPTIONS.TOP_RATED_FIRST:
      return copy.sort((a, b) => b.rating - a.rating);
    case SORTING_OPTIONS.POPULAR:
    default:
      return copy;
  }
}
