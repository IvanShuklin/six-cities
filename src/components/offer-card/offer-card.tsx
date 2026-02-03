import { Link, generatePath } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { OFFER_TYPE_LABEL, AppRoute } from '../../const';

type OfferCardProps = {
  offer: Offer;
  onActiveOfferChange: (offerId: string | null) => void;
}

export default function OfferCard({offer, onActiveOfferChange}: OfferCardProps) {
  const ratingWidth = `${(offer.rating / 5) * 100}%`;

  const bookmarkButtonClassName = `place-card__bookmark-button button ${
    offer.isFavorite ? 'place-card__bookmark-button--active' : ''
  }`;

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => onActiveOfferChange(offer.id)}
      onMouseLeave={() => onActiveOfferChange(null)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt={offer.title}
          />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">
                            /&nbsp;night
            </span>
          </div>
          <button
            className={bookmarkButtonClassName}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidth }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">
          {OFFER_TYPE_LABEL[offer.type]}
        </p>
      </div>
    </article>
  );
}
