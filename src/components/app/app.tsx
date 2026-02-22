import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const/const';
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
import { fetchOffers } from '../../store/main-slice';
import { AppDispatch } from '../../store';

export default function App() {
  const authorizationStatus = AuthorizationStatus.Auth;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

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
                <PrivateRoute>
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
