import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../types/state';
import { PageTitle } from '../../const/const';
import OffersList from '../../components/offers-list/offers-list';
import NavTabs from './components/nav-tabs';
import PlacesSorting from './components/places-sorting';
import Map from '../../components/map/map';

export default function MainPage() {
  const city = useSelector((state: State) => state.main.city);
  const offers = useSelector((state: State) => state.main.offers);

  const filteredOffers = offers.filter(
    (offer) => offer.city.name === city.name
  );

  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

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
                offers={filteredOffers}
                onActiveOfferChange={setActiveOfferId}
                className="cities__places-list places__list tabs__content"
              />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map
                  city={city}
                  offers={filteredOffers}
                  activeOfferId={activeOfferId}
                />

              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
