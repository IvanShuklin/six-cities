import { Comment } from '../../types/comment';
import { formatReviewDate } from '../../util';

type ReviewListProps = {
  comments: Comment[];
};

export default function ReviewList({ comments }: ReviewListProps) {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => {
        const ratingWidth = `${(comment.rating / 5) * 100}%`;
        const formattedDate = formatReviewDate(comment.date);

        return (
          <li key={comment.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={comment.user.avatarUrl}
                  width={54}
                  height={54}
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{comment.user.name}</span>
            </div>

            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: ratingWidth }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>

              <p className="reviews__text">{comment.comment}</p>

              <time
                className="reviews__time"
                dateTime={comment.date}
              >
                {formattedDate}
              </time>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
