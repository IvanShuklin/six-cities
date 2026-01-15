import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type AuthorizedMenuProps = {
  userEmail: string;
  favoritesCount: number;
};

export default function AuthorizedMenu({
  userEmail,
  favoritesCount,
}: AuthorizedMenuProps) {
  return (
    <>
      <li className="header__nav-item user">
        <Link
          to={AppRoute.Favorites}
          className="header__nav-link header__nav-link--profile"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__user-name user__name">
            {userEmail}
          </span>
          <span className="header__favorite-count">
            {favoritesCount}
          </span>
        </Link>
      </li>

      <li className="header__nav-item">
        <Link
          to={AppRoute.Login}
          className="header__nav-link"
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}
