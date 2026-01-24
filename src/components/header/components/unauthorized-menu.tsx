import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

export default function UnauthorizedMenu() {
  return (
    <li className="header__nav-item">
      <Link
        to={AppRoute.Login}
        className="header__nav-link"
      >
        <span className="header__sign-in">Sign in</span>
      </Link>
    </li>
  );
}
