import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { cityChanged, selectActiveCity } from '../../../store/main-slice';
import { City } from '../../../types/city';

type TabItemProps = {
  city: City;
};

export default function TabsItem({ city }: TabItemProps) {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(selectActiveCity);

  const isActive = activeCity.name === city.name;

  const handleActiveCityChange = useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement>) => {
      evt.preventDefault();
      dispatch(cityChanged(city));
    },
    [dispatch, city]
  );

  const activeLinkClass = isActive ? 'tabs__item--active' : '';

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${activeLinkClass}`}
        to="#"
        onClick={handleActiveCityChange}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}
