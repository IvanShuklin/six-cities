import OffersList from '../../../components/offers-list/offers-list';
import PlacesSorting from './places-sorting';
import Spinner from '../../../components/spinner/spinner';
import { pluralize } from '../../../utils/util';
import { RequestStatus } from '../../../const/const';
import type { Offer } from '../../../types/offer';

type Props = {
  status: RequestStatus;
  cityName: string;
  offers: Offer[];
  onActiveOfferChange: (id: string | null) => void;
};

export default function CitiesPlacesBlock({
  status,
  cityName,
  offers,
  onActiveOfferChange,
}: Props) {
  const isLoading = status === RequestStatus.Loading;

  let content: JSX.Element;

  if (isLoading) {
    content = (
      <div className="cities__spinner-wrapper">
        <Spinner />
      </div>
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

      {!isLoading && (
        <b className="places__found">
          {offers.length} {pluralize(offers.length, 'place', 'places')} to stay in {cityName}
        </b>
      )}

      <PlacesSorting />

      {content}
    </section>
  );
}
