import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';

type AppScreenProps = {
  offersAmount: number;
}

export default function App({offersAmount}: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage offersAmount={offersAmount} />}>
        </Route>
        <Route path={AppRoute.Login} element={<LoginPage />}>
        </Route>
        <Route path={AppRoute.Favorites} element={<FavoritesPage />}>
        </Route>
        <Route path={AppRoute.Offer} element={<OfferPage />}>
        </Route>
        <Route path={'*'} element={<NotFoundPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
