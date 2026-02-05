import { AuthorizationStatus } from '../../const';
import { Comment } from '../../types/comment';
import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';

type ReviewProps = {
  authorizationStatus: AuthorizationStatus;
  comments: Comment[];
};

export default function Review({ authorizationStatus, comments }: ReviewProps) {
  return (
    <>
      <ReviewList comments={comments} />
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm />
      )}
    </>
  );
}
