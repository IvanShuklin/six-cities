import Header from '../../components/layout/header/header';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="page page--gray">
      <Header />

      <main className="page__main">
        <h1>404 - Page not found</h1>
        <p>
  The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/">Back to main page</Link>
      </main>
    </div>
  );
}
