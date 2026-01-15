import { AuthorizationStatus } from '../../const';
import Logo from '../logo/logo';
import AuthorizedMenu from './components/authorized-menu';
import UnauthorizedMenu from './components/unauthorized-menu';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function Header({ authorizationStatus }: HeaderProps) {
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo
              classNameLink="header__logo-link"
              classNameImage="header__logo"
              width={81}
              height={41}
            />
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth ? (
                <AuthorizedMenu
                  userEmail="oliver.conner@gmail.com"
                  favoritesCount={3}
                />
              ) : (
                <UnauthorizedMenu />
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
