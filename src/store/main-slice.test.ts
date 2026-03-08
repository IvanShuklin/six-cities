import reducer, {
  cityChanged,
  sortOptionChanged,
  fetchOffers
} from './main-slice';

import { RequestStatus, SORTING_OPTIONS } from '../const/const';
import { CITIES } from '../const/cities';
import { Offer } from '../types/offer';

describe('mainSlice reducer', () => {
  const initialState = {
    city: CITIES[0],
    offers: [],
    sortOption: SORTING_OPTIONS.POPULAR,
    offersLoadingStatus: RequestStatus.Idle,
    offersError: null,
  };

  it('should return initial state with empty action', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should change city with "cityChanged"', () => {
    const newCity = CITIES[1];

    const result = reducer(initialState, cityChanged(newCity));

    expect(result.city).toEqual(newCity);
  });

  it('should change sort option with "sortOptionChanged"', () => {
    const result = reducer(
      initialState,
      sortOptionChanged(SORTING_OPTIONS.PRICE_LOW_TO_HIGH)
    );

    expect(result.sortOption).toBe(SORTING_OPTIONS.PRICE_LOW_TO_HIGH);
  });

  it('should set loading status when fetchOffers.pending', () => {
    const action = { type: fetchOffers.pending.type };

    const result = reducer(initialState, action);

    expect(result.offersLoadingStatus).toBe(RequestStatus.Loading);
    expect(result.offersError).toBeNull();
  });

  it('should load offers when fetchOffers.fulfilled', () => {
    const mockOffers = [{ id: '1' }] as Offer[];

    const action = {
      type: fetchOffers.fulfilled.type,
      payload: mockOffers,
    };

    const result = reducer(initialState, action);

    expect(result.offers).toEqual(mockOffers);
    expect(result.offersLoadingStatus).toBe(RequestStatus.Success);
  });

  it('should set error when fetchOffers.rejected', () => {
    const action = {
      type: fetchOffers.rejected.type,
      payload: 'Error',
    };

    const result = reducer(initialState, action);

    expect(result.offersLoadingStatus).toBe(RequestStatus.Failed);
    expect(result.offersError).toBe('Error');
  });
});
