import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { selectAuthorizationStatus } from '../../store/main-slice';

type PublicRouteProps = {
  children: JSX.Element;
};

export default function PublicRoute({ children }: PublicRouteProps) {
  const authorizationStatus = useSelector(selectAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} replace />;
  }

  return children;
}
