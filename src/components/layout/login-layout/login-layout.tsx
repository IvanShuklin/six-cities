import { Outlet } from 'react-router-dom';
import Header from '../components/header';

export default function LoginLayout() {
  return (
    <div className="page page--gray page--login">
      <Header />
      <Outlet />
    </div>
  );
}
