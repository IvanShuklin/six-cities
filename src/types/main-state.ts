import { store } from '../store/index';
import { City } from './city';
import { Offer } from './offer';
import { AuthorizationStatus, SortOption, RequestStatus } from '../const/const';

export type State = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;

export type MainState = {
  city: City;
  offers: Offer[];
  sortOption: SortOption;
  offersLoadingStatus: RequestStatus;
  offersError: string | null;
  authorizationStatus: AuthorizationStatus;
};
