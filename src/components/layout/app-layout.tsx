import { Outlet } from 'react-router-dom';
import Header from './header';

export default function AppLayout() {
  return (
    <div className="page page--gray">
      <Header />
      <Outlet />
    </div>
  );
}
