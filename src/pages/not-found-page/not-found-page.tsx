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
          style={{
            color: '#0000ee',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textDecoration = 'none';
          }}
        >
          Back to main page
        </Link>
      </main>
    </>
  );
}
