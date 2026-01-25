import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { Offer } from '../../types/offer.ts';
import MainLayout from '../layout/main-layout/main-layout.tsx';
import LoginLayout from '../layout/login-layout/login-layout.tsx';
import FavoritesLayout from '../layout/favorites-layout/favorites-layout.tsx';
import MainPage from '../../pages/main-page/main-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import PublicRoute from '../public-route/public-route.tsx';

type AppProps = {
  offers: Offer[];
}

export default function App({ offers }: AppProps) {
  const authorizationStatus = AuthorizationStatus.NoAuth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={
            <MainLayout
              authorizationStatus={authorizationStatus}
              offers={offers}
            />
          }
          >
            <Route
              path={AppRoute.Main}
              element={<MainPage offers={offers} />}
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage offers={offers} authorizationStatus={authorizationStatus} />}
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

          <Route element={
            <FavoritesLayout
              authorizationStatus={authorizationStatus}
              offers={offers}
            />
          }
          >
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage offers={offers} />
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
