import { AuthorizationStatus } from '../../const';
import Logo from '../logo/logo';
import {
  ProfileMenuContent,
  SignOutMenuContent,
  SignInMenuContent
} from './menu-content';

type HeaderProps = {
  authorizationStatus?: AuthorizationStatus;
  favoritesCount?: number;
};

export default function Header({ authorizationStatus, favoritesCount = 0 }: HeaderProps) {
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const userEmail = 'oliver.conner@gmail.com';

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

          <nav className="header__nav" aria-label="Main">
            <ul className="header__nav-list">
              {isAuth ? (
                <>
                  <li className="header__nav-item user">
                    <ProfileMenuContent
                      userEmail={userEmail}
                      favoritesCount={favoritesCount}
                    />
                  </li>

                  <li className="header__nav-item">
                    <SignOutMenuContent />
                  </li>
                </>
              ) : (
                <li className="header__nav-item">
                  <SignInMenuContent />
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
