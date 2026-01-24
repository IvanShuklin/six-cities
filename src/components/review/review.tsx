import { AuthorizationStatus } from '../../const';
import { comments } from '../../mocks/comments';
import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';

type ReviewProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function Review({ authorizationStatus }: ReviewProps) {
  return (
    <>
      <ReviewList comments={comments} />
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm />
      )}
    </>
  );
}
