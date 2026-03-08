import reducer, {
  clearOffer,
  fetchOfferById
} from './offer-slice';

import { RequestStatus } from '../const/const';
import { Offer } from '../types/offer';

describe('offerSlice reducer', () => {
  const initialState = {
    offer: null,
    nearbyOffers: [],
    comments: [],
    offerLoadingStatus: RequestStatus.Idle,
    sendingCommentStatus: RequestStatus.Idle,
    offerError: null,
  };

  it('should return initial state with empty action', () => {
    const result = reducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should clear offer with "clearOffer"', () => {
    const modifiedState = {
      ...initialState,
      offer: { id: '1' } as Offer,
      nearbyOffers: [{ id: '2' }] as Offer[],
    };

    const result = reducer(modifiedState, clearOffer());

    expect(result).toEqual(initialState);
  });

  it('should set loading status when fetchOfferById.pending', () => {
    const action = { type: fetchOfferById.pending.type };

    const result = reducer(initialState, action);

    expect(result.offerLoadingStatus).toBe(RequestStatus.Loading);
  });

  it('should set offer when fetchOfferById.fulfilled', () => {
    const mockOffer = { id: '1' } as Offer;

    const action = {
      type: fetchOfferById.fulfilled.type,
      payload: mockOffer,
    };

    const result = reducer(initialState, action);

    expect(result.offer).toEqual(mockOffer);
    expect(result.offerLoadingStatus).toBe(RequestStatus.Success);
  });

  it('should set error when fetchOfferById.rejected', () => {
    const action = {
      type: fetchOfferById.rejected.type,
      payload: 'Error',
    };

    const result = reducer(initialState, action);

    expect(result.offerLoadingStatus).toBe(RequestStatus.Failed);
    expect(result.offerError).toBe('Error');
  });
});
