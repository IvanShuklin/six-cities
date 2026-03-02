import TabsItem from './tabs-item';
import { CITIES } from '../../../const/cities';
import { useAppSelector } from '../../../store/hooks';
import { selectActiveCity } from '../../../store/main-slice';

export default function NavTabs() {
  const activeCity = useAppSelector(selectActiveCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <TabsItem
              key={city.name}
              city={city}
              isActive={city.name === activeCity.name}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
