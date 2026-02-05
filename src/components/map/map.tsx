import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';
import useMap from '../hooks/use-map';

type MapProps = {
  city: City;
  offers: Offer[];
  activeOfferId: string | null;
};

const URL_MARKER_DEFAULT = 'markup/img/pin.svg';
const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const activeIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

export default function Map({ city, offers, activeOfferId }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (!map) {
      return;
    }

    const markerLayer = layerGroup().addTo(map);

    offers.forEach((offer) => {
      const marker = new Marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      });

      const icon =
      offer.id === activeOfferId
        ? activeIcon
        : defaultIcon;

      marker.setIcon(icon).addTo(markerLayer);
    });

    return () => {
      map.removeLayer(markerLayer);
    };
  }, [map, offers, activeOfferId]);

  return (
    <div
      ref={mapRef}
      style={{ height: '100%' }}
    />
  );
}
