import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { selectAuthorizationStatus } from '../../store/main-slice';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Login} replace />;
  }

  return children;
}
