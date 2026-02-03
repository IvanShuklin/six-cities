import { Outlet } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const';
import { Offer } from '../../../types/offer';
import { getFavoritesCount } from '../../../utils/util';
import Header from '../../header/header';

type FavoritesLayoutProps = {
  authorizationStatus: AuthorizationStatus;
  offers: Offer[];
};

export default function FavoritesLayout({ authorizationStatus, offers }: FavoritesLayoutProps) {
  const favoritesCount = getFavoritesCount(offers);

  return (
    <div className="page page--favorites-empty">
      <Header
        authorizationStatus={authorizationStatus}
        favoritesCount={favoritesCount}
      />
      <Outlet />
    </div>
  );
}
