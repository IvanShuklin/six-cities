import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import MainLayout from '../layout/main-layout/main-layout.tsx';
import LoginLayout from '../layout/login-layout/login-layout.tsx';
import FavoritesLayout from '../layout/favorites-layout/favorites-layout.tsx';
import MainPage from '../../pages/main-page/main-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

type AppProps = {
  offersAmount: number;
}

export default function App({offersAmount}: AppProps) {
  const authorizationStatus = AuthorizationStatus.NoAuth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout authorizationStatus={authorizationStatus} />}>
            <Route path={'/'} element={<MainPage offersAmount={offersAmount} />}/>
            <Route path={AppRoute.Offer} element={<OfferPage />}/>
          </Route>
          <Route element={<LoginLayout authorizationStatus={authorizationStatus} />}>
            <Route path={AppRoute.Login} element={<LoginPage />}/>
          </Route>
          <Route element={<FavoritesLayout authorizationStatus={authorizationStatus} />}>
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path={'*'} element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
