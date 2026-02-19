import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../../const/const';
import { getFavoritesCount } from '../../../utils/util';
import Header from '../../header/header';
import { selectOffers } from '../../../store/main-slice';

type MainLayoutProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function MainLayout({ authorizationStatus }: MainLayoutProps) {
  const offers = useSelector(selectOffers);
  const favoritesCount = getFavoritesCount(offers);

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus} favoritesCount={favoritesCount} />
      <Outlet />
    </div>
  );
}
