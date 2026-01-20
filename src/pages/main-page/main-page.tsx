import { Helmet } from 'react-helmet-async';
import { PageTitle } from '../../const';
import { Offer } from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';
import NavTabs from './components/nav-tabs/nav-tabs';
import PlacesSorting from './components/places-sorting/places-sorting';

type MainPageProps = {
  offers: Offer[];
}

export default function MainPage({offers}: MainPageProps) {
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
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <PlacesSorting />
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <OfferCard
                    key={offer.id}
                    offer={offer}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
