import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { dropToken } from '../../services/token';
import { AuthorizationStatus } from '../../const/const';
import { requireAuthorization } from '../../store/main-slice';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

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
  const dispatch = useDispatch<AppDispatch>();

  const handleSignOut = () => {
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  };

  return (
    <button
      type="button"
      className="header__nav-link"
      onClick={handleSignOut}
    >
      <span className="header__signout">Sign out</span>
    </button>
  );
}

export function SignInMenuContent() {
  return (
    <Link to={AppRoute.Login} className="header__nav-link">
      <span className="header__sign-in">Sign in</span>
    </Link>
  );
}
