import { Offer } from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferChange: (id: number | null) => void;
}

export default function OffersList({ offers, onActiveOfferChange }: OffersListProps) {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onActiveOfferChange(offer.id)}
          onMouseLeave={() => onActiveOfferChange(null)}
        />
      ))}
    </div>
  );
}
