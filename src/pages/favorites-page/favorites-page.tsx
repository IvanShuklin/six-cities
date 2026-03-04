import { Helmet } from 'react-helmet-async';
import { Link, generatePath, useNavigate } from 'react-router-dom';
import { PageTitle, AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectOffers,
  changeFavoriteStatus,
  selectAuthorizationStatus
} from '../../store/main-slice';
import { Offer } from '../../types/offer';
import Footer from './components/footer';

export default function FavoritesPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const offers = useAppSelector(selectOffers);

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const isFavoriteOffersEmpty = favoriteOffers.length === 0;

  const handleBookmarkClick = (offerId: string) => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(changeFavoriteStatus({
      offerId,
      status: 0
    }));
  };

  return (
    <>
      <Helmet>
        <title>{PageTitle.Favorites}</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className={`favorites ${isFavoriteOffersEmpty ? 'favorites--empty' : ''}`}>
            <h1 className="favorites__title">Saved listing</h1>

            {!isFavoriteOffersEmpty ? (
              <ul className="favorites__list">
                {favoriteOffers.map((offer: Offer) => (
                  <li key={offer.id} className="favorites__locations-items">
                    <div className="favorites__places">
                      <article className="favorites__card place-card">
                        {offer.isPremium && (
                          <div className="place-card__mark">
                            <span>Premium</span>
                          </div>
                        )}

                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>
                            <img
                              className="place-card__image"
                              src={offer.previewImage}
                              width={150}
                              height={110}
                              alt={offer.title}
                            />
                          </Link>
                        </div>

                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">€{offer.price}</b>
                              <span className="place-card__price-text">/&nbsp;night</span>
                            </div>

                            <button
                              className="place-card__bookmark-button place-card__bookmark-button--active button"
                              type="button"
                              onClick={() => handleBookmarkClick(offer.id)}
                            >
                              <svg className="place-card__bookmark-icon" width={18} height={19}>
                                <use xlinkHref="#icon-bookmark" />
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>

                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{ width: `${Math.round(offer.rating) * 20}%` }} />
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>

                          <h2 className="place-card__name">
                            <Link to={generatePath(AppRoute.Offer, { id: offer.id })}>{offer.title}</Link>
                          </h2>

                          <p className="place-card__type">{offer.type}</p>
                        </div>
                      </article>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="favorites__status">Save properties to narrow down search or plan your future trips.</p>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
