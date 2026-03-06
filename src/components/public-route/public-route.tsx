import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { selectAuthStatus } from '../../store/auth-slice';

type PublicRouteProps = {
  children: JSX.Element;
};

export default function PublicRoute({ children }: PublicRouteProps) {
  const authorizationStatus = useSelector(selectAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return children;
}
