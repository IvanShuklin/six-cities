import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageTitle, AppRoute } from '../../const';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>{PageTitle.NotFound}</title>
      </Helmet>
      <main className="page__main" style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: '52px',
        alignItems: 'center',
      }}
      >
        <h1>404 - Page not found</h1>
        <p>
  The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to={AppRoute.Main}
          className="not-found__link"
        >
          Back to main page
        </Link>
      </main>
    </>
  );
}
