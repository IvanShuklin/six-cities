import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { cityChanged } from '../../../../store/action';
import { City } from '../../../../types/city';
import { State } from '../../../../types/state';

type TabItemProps = {
  city: City;
};

export default function TabsItem({ city }: TabItemProps) {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state: State) => state.main.city);

  const isActive = activeCity.name === city.name;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          isActive ? 'tabs__item--active' : ''
        }`}
        href="#"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(cityChanged(city));
        }}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
