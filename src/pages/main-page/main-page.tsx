import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { PageTitle } from '../../const';
import { Offer } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import NavTabs from './components/nav-tabs/nav-tabs';
import PlacesSorting from './components/places-sorting/places-sorting';
import Map from '../../components/map/map';

type MainPageProps = {
  offers: Offer[];
}

export default function MainPage({offers}: MainPageProps) {
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
                {offers.length} places to stay in Amsterdam
              </b>
              <PlacesSorting />

              <OffersList
                offers={offers}
                onActiveOfferChange={setActiveOfferId}
                className="cities__places-list places__list tabs__content"
              />

            </section>
            <div className="cities__right-section">
              <section className="cities__map map">

                <Map
                  city={offers[0].city}
                  offers={offers}
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
