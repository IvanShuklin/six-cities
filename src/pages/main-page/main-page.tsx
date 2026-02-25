import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { PageTitle } from '../../const/const';
import NavTabs from './components/nav-tabs';
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
import { CitiesPlacesBlock } from './components/cities-places-block';

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

  const isEmpty = !isLoading && filteredOffers.length === 0;

  const handleRetryClick = () => {
    dispatch(fetchOffers());
  };

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
              <button type="button" onClick={handleRetryClick}>
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

      <main
        className={`page__main page__main--index ${
          isEmpty ? 'page__main--index-empty' : ''
        }`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <NavTabs />

        <div className="cities">
          <div
            className={`cities__places-container ${
              isEmpty ? 'cities__places-container--empty' : ''
            } container`}
          >
            <CitiesPlacesBlock
              isLoading={isLoading}
              isEmpty={isEmpty}
              cityName={city.name}
              offers={sortedOffers}
              onActiveOfferChange={setActiveOfferId}
            />

            <div className="cities__right-section">
              {isEmpty ? (
                <div className="cities__map map" />
              ) : (
                <section className="cities__map map">
                  <Map
                    city={city}
                    offers={sortedOffers}
                    activeOfferId={activeOfferId}
                  />
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
