import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { Offer } from '../../types/offer';
import MainLayout from '../layout/main-layout/main-layout';
import LoginLayout from '../layout/login-layout/login-layout';
import FavoritesLayout from '../layout/favorites-layout/favorites-layout';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import PublicRoute from '../public-route/public-route';
import { offersLoaded } from '../../store/main-slice';

type AppProps = {
  offers: Offer[];
};

export default function App({ offers }: AppProps) {
  const authorizationStatus = AuthorizationStatus.Auth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(offersLoaded(offers));
  }, [dispatch, offers]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <MainLayout authorizationStatus={authorizationStatus} />
            }
          >
            <Route path={AppRoute.Main} element={<MainPage />} />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage authorizationStatus={authorizationStatus} />}
            />
          </Route>

          <Route element={<LoginLayout />}>
            <Route
              path={AppRoute.Login}
              element={
                <PublicRoute authorizationStatus={authorizationStatus}>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>

          <Route
            element={
              <FavoritesLayout authorizationStatus={authorizationStatus} />
            }
          >
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
