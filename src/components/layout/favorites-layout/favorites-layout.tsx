import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../../const/const';
import { getFavoritesCount } from '../../../utils/util';
import Header from '../../header/header';
import { selectOffers } from '../../../store/main-slice';

type FavoritesLayoutProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function FavoritesLayout({ authorizationStatus }: FavoritesLayoutProps) {
  const offers = useSelector(selectOffers);
  const favoritesCount = getFavoritesCount(offers);

  return (
    <div className="page page--favorites-empty">
      <Header authorizationStatus={authorizationStatus} favoritesCount={favoritesCount} />
      <Outlet />
    </div>
  );
}
