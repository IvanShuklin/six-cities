import { Offer } from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type OffersListProps = {
  offers: Offer[];
  className: string;
  onActiveOfferChange?: (offerId: string | null) => void;
}

export default function OffersList({
  offers,
  onActiveOfferChange,
  className
}: OffersListProps) {
  return(
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onActiveOfferChange={onActiveOfferChange}
        />
      ))}
    </div>
  );
}
