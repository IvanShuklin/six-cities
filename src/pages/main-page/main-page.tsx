import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { PageTitle } from '../../const/const';
import OffersList from '../../components/offers-list/offers-list';
import NavTabs from './components/nav-tabs';
import PlacesSorting from './components/places-sorting';
import Map from '../../components/map/map';
import {
  selectActiveCity,
  selectOffers,
  selectSortOption,
  selectOffersLoading,
  selectOffersError,
  fetchOffers
} from '../../store/main-slice';
import { sortOffers } from '../../utils/sort-offers';

export default function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const city = useSelector(selectActiveCity);
  const offers = useSelector(selectOffers);
  const sortOption = useSelector(selectSortOption);
  const isLoading = useSelector(selectOffersLoading);
  const error = useSelector(selectOffersError);

  const filteredOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === city.name),
    [offers, city.name]
  );

  const sortedOffers = useMemo(
    () => sortOffers(filteredOffers, sortOption),
    [filteredOffers, sortOption]
  );

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>{PageTitle.Main}</title>
        </Helmet>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="container">
            <p>Loading offers...</p>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>{PageTitle.Main}</title>
        </Helmet>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="container">
            <div className="server-error">
              <p>{error}</p>
              <button
                type="button"
                onClick={() => {
                  dispatch(fetchOffers());
                }}
              >
                Repeat
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{PageTitle.Main}</title>
      </Helmet>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <NavTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {city.name}
              </b>

              <PlacesSorting />

              <OffersList
                offers={sortedOffers}
                onActiveOfferChange={setActiveOfferId}
                className="cities__places-list places__list tabs__content"
              />
            </section>

            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={sortedOffers} activeOfferId={activeOfferId} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
