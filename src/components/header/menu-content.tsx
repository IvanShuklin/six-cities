import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type ProfileMenuContentProps = {
  userEmail: string;
  favoritesCount: number;
};

export function ProfileMenuContent({ userEmail, favoritesCount }: ProfileMenuContentProps) {
  return (
    <Link
      to={AppRoute.Favorites}
      className="header__nav-link header__nav-link--profile"
    >
      <div className="header__avatar-wrapper user__avatar-wrapper" />
      <span className="header__user-name user__name">{userEmail}</span>
      <span className="header__favorite-count">{favoritesCount}</span>
    </Link>
  );
}

export function SignOutMenuContent() {
  return (
    <Link to={AppRoute.Login} className="header__nav-link">
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export function SignInMenuContent() {
  return (
    <Link to={AppRoute.Login} className="header__nav-link">
      <span className="header__sign-in">Sign in</span>
    </Link>
  );
}
