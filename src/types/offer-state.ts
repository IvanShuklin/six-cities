import { RequestStatus } from '../const/const';
import { Offer } from './offer';
import { Comment } from './comment';

export type OfferState = {
  offer: Offer | null;
  nearbyOffers: Offer[];
  comments: Comment[];
  offerLoadingStatus: RequestStatus;
  sendingCommentStatus: RequestStatus;
  offerError: string | null;
};
