import { Outlet } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const';
import { Offer } from '../../../types/offer';
import { getFavoritesCount } from '../../../util';
import Header from '../../header/header';

type LoginLayoutProps = {
  authorizationStatus: AuthorizationStatus;
  offers: Offer[];
};

export default function LoginLayout({ authorizationStatus, offers }: LoginLayoutProps) {
  const favoritesCount = getFavoritesCount(offers);

  return (
    <div className="page page--gray page--login">
      <Header
        authorizationStatus={authorizationStatus}
        favoritesCount={favoritesCount}
      />
      <Outlet />
    </div>
  );
}
