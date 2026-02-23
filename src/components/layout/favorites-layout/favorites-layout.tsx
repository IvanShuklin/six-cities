import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFavoritesCount } from '../../../utils/util';
import Header from '../../header/header';
import { selectOffers } from '../../../store/main-slice';

export default function FavoritesLayout() {
  const offers = useSelector(selectOffers);
  const favoritesCount = getFavoritesCount(offers);

  return (
    <div className="page page--favorites-empty">
      <Header favoritesCount={favoritesCount} />
      <Outlet />
    </div>
  );
}
