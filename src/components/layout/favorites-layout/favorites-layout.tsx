import { Outlet } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const';
import Header from '../header/header';

type FavoritesLayoutProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function FavoritesLayout({ authorizationStatus }: FavoritesLayoutProps) {
  return (
    <div className="page page--favorites-empty">
      <Header authorizationStatus={authorizationStatus} />
      <Outlet />
    </div>
  );
}
