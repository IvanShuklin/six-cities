import { createSelector } from '@reduxjs/toolkit';
import { sortOffers } from '../utils/sort-offers';
import { RequestStatus } from '../const/const';
import {
  selectActiveCity,
  selectOffers,
  selectSortOption,
  selectOffersLoadingStatus
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
  [selectFilteredOffers, selectOffersLoadingStatus],
  (filteredOffers, status) =>
    status === RequestStatus.Success && filteredOffers.length === 0
);
