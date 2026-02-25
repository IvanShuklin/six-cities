import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { sendComment, selectIsSendingComment } from '../../store/offer-slice';

const REVIEW_MIN_LENGTH = 50;

const ratings = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
] as const;

export default function ReviewForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const isSendingComment = useSelector(selectIsSendingComment);

  const isSubmitDisabled =
  rating === null ||
  comment.length < REVIEW_MIN_LENGTH ||
  isSendingComment;

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!id || rating === null) {
      return;
    }

    dispatch(
      sendComment({
        offerId: id,
        rating,
        comment,
      })
    );

    setRating(null);
    setComment('');
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
                Your review
      </label>
      <div className="reviews__rating-form form__rating">

        {ratings.map(({value, label}) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={rating === value}
              onChange={() => setRating(value)}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(evt) => setComment(evt.target.value)}
        disabled={isSendingComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                  To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
                  your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
                  Submit
        </button>
      </div>
    </form>
  );
}
