import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFavoritesCount } from '../../../utils/util';
import Header from '../../header/header';
import { selectOffers, selectAuthorizationStatus } from '../../../store/main-slice';

export default function MainLayout() {
  const offers = useSelector(selectOffers);
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const favoritesCount = getFavoritesCount(offers);

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus} favoritesCount={favoritesCount} />
      <Outlet />
    </div>
  );
}
