import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { cityChanged } from '../../../store/main-slice';
import { City } from '../../../types/city';

type TabItemProps = {
  city: City;
  isActive: boolean;
};

const TabsItem = function({ city, isActive }: TabItemProps) {
  const dispatch = useAppDispatch();

  const handleActiveCityChange = useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement>) => {
      evt.preventDefault();
      dispatch(cityChanged(city));
    },
    [dispatch, city]
  );

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${
          isActive ? 'tabs__item--active' : ''
        }`}
        to="#"
        onClick={handleActiveCityChange}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
};

export default TabsItem;
