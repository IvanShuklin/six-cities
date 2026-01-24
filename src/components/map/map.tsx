type MapProps = {
  activeOfferId: number | null;
};

export default function Map({ activeOfferId }: MapProps) {
  const hasActiveOffer = activeOfferId !== null;

  return (
    <section
      className="cities__map map"
      data-has-active-offer={hasActiveOffer}
    />
  );
}
