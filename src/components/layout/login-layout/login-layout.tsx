import { Outlet } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const';
import Header from '../header/header';

type LoginLayoutProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function LoginLayout({ authorizationStatus }: LoginLayoutProps) {
  return (
    <div className="page page--gray page--login">
      <Header authorizationStatus={authorizationStatus} />
      <Outlet />
    </div>
  );
}
