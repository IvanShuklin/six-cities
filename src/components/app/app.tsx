import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import AppLayout from '../layout/layout.tsx';
import MainPage from '../../pages/main-page/main-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

type AppScreenProps = {
  offersAmount: number;
}

export default function App({offersAmount}: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={AppRoute.Main} element={<MainPage offersAmount={offersAmount} />}/>
          <Route path={AppRoute.Login} element={<LoginPage />}/>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />}/>
          <Route path={'*'} element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
