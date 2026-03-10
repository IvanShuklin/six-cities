import { State } from '../types/main-state';
import { SORTING_OPTIONS, AuthorizationStatus, RequestStatus } from '../const/const';
import { createMockComment } from './mock-comment';

const mockCity = {
  name: 'Paris',
  location: {
    latitude: 48.8566,
    longitude: 2.3522,
    zoom: 13,
  },
};

export const createMockState = (): State => ({
  main: {
    city: mockCity,
    offers: [],
    sortOption: SORTING_OPTIONS.POPULAR,
    offersLoadingStatus: RequestStatus.Idle,
    offersError: null,
  },

  auth: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: null,
    isAuthChecked: true,
    error: null,
  },

  offer: {
    offer: null,
    nearbyOffers: [],
    comments: [createMockComment()],
    offerLoadingStatus: RequestStatus.Idle,
    sendingCommentStatus: RequestStatus.Idle,
    offerError: null,
  },

  favorites: {
    favorites: [],
    favoritesLoadingStatus: RequestStatus.Idle,
    favoritesError: null,
  },
});
