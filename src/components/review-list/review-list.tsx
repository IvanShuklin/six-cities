import { Comment } from '../../types/comment';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  comments: Comment[];
};

export default function ReviewList({ comments }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
