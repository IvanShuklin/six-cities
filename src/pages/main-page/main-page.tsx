import { Helmet } from 'react-helmet-async';
import { useState, useCallback } from 'react';
import { PageTitle, RequestStatus } from '../../const/const';
import NavTabs from './components/nav-tabs';
import Map from '../../components/map/map';
import CitiesPlacesBlock from './components/cities-places-block';
import NoPlaces from './components/no-places';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  fetchOffers,
  selectActiveCity,
  selectOffersLoadingStatus,
  selectOffersError,
} from '../../store/main-slice';
import {
  selectSortedOffers,
  selectIsEmpty
} from '../../store/main-selectors';

export default function MainPage() {
  const dispatch = useAppDispatch();

  const city = useAppSelector(selectActiveCity);
  const sortedOffers = useAppSelector(selectSortedOffers);
  const status = useAppSelector(selectOffersLoadingStatus);
  const error = useAppSelector(selectOffersError);

  const isEmpty = useAppSelector(selectIsEmpty);

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleRetryClick = useCallback(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const handleActiveOfferChange = useCallback((id: string | null) => {
    setActiveOfferId(id);
  }, []);

  if (status === RequestStatus.Failed && error) {
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
          <div className={`cities__places-container ${
            isEmpty ? 'cities__places-container--empty' : ''
          } container`}
          >
            {isEmpty ? (
              <NoPlaces cityName={city.name} />
            ) : (
              <CitiesPlacesBlock
                status={status}
                cityName={city.name}
                offers={sortedOffers}
                onActiveOfferChange={handleActiveOfferChange}
              />
            )}

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
