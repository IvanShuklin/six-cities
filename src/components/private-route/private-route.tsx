import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { selectAuthorizationStatus } from '../../store/main-slice';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useSelector(selectAuthorizationStatus);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} replace />;
  }

  return children;
}
