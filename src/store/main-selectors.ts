import { createSelector } from '@reduxjs/toolkit';
import { sortOffers } from '../utils/sort-offers';
import {
  selectActiveCity,
  selectOffers,
  selectSortOption,
  selectIsOffersLoading
} from './main-slice';

export const selectFilteredOffers = createSelector(
  [selectOffers, selectActiveCity],
  (offers, city) =>
    offers.filter((offer) => offer.city.name === city.name)
);

export const selectSortedOffers = createSelector(
  [selectFilteredOffers, selectSortOption],
  (filteredOffers, sortOption) =>
    sortOffers(filteredOffers, sortOption)
);

export const selectIsEmpty = createSelector(
  [selectFilteredOffers, selectIsOffersLoading],
  (filteredOffers, isLoading) => !isLoading && filteredOffers.length === 0
);
