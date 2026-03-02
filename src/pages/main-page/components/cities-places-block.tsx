import OffersList from '../../../components/offers-list/offers-list';
import PlacesSorting from './places-sorting';
import Spinner from '../../../components/spinner/spinner';
import { pluralize } from '../../../utils/util';
import type { Offer } from '../../../types/offer';

type Props = {
  isLoading: boolean;
  isEmpty: boolean;
  cityName: string;
  offers: Offer[];
  onActiveOfferChange: (id: string | null) => void;
};

export default function CitiesPlacesBlock({
  isLoading,
  isEmpty,
  cityName,
  offers,
  onActiveOfferChange,
}: Props) {
  let content: JSX.Element;

  if (isLoading) {
    content = (
      <div className="cities__spinner-wrapper">
        <Spinner />
      </div>
    );
  } else if (isEmpty) {
    content = (
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {cityName}
          </p>
        </div>
      </section>
    );
  } else {
    content = (
      <OffersList
        offers={offers}
        onActiveOfferChange={onActiveOfferChange}
        className="cities__places-list places__list tabs__content"
      />
    );
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>

      {!isLoading && !isEmpty && (
        <b className="places__found">
          {offers.length} {pluralize(offers.length, 'place', 'places')} to stay in {cityName}
        </b>
      )}

      <PlacesSorting />

      {content}
    </section>
  );
}
