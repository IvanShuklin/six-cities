import { Outlet } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const';
import { Offer } from '../../../types/offer';
import { getFavoritesCount } from '../../../utils/util';
import Header from '../../header/header';

type MainLayoutProps = {
  authorizationStatus: AuthorizationStatus;
  offers: Offer[];
};

export default function MainLayout({ authorizationStatus, offers }: MainLayoutProps) {
  const favoritesCount = getFavoritesCount(offers);

  return (
    <div className="page page--gray page--main">
      <Header
        authorizationStatus={authorizationStatus} favoritesCount={favoritesCount}
      />
      <Outlet />
    </div>
  );
}
