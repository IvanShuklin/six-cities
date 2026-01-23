import { AuthorizationStatus } from '../../const';
import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';

type ReviewProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function Review({ authorizationStatus }: ReviewProps) {
  return (
    <>
      <ReviewList/>
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm />
      )}
    </>
  );
}
