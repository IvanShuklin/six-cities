import { Outlet } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const';
import Header from '../header/header';

type MainLayoutProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function MainLayout({ authorizationStatus }: MainLayoutProps) {
  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus} />
      <Outlet />
    </div>
  );
}
