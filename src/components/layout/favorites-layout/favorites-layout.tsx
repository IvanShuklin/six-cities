import { Outlet } from 'react-router-dom';
import Header from '../components/header';

export default function FavoritesLayout() {
  return (
    <div className="page page--favorites-empty">
      <Header />
      <Outlet />
    </div>
  );
}

