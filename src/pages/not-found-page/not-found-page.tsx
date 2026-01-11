import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageTitle } from '../../const';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>{PageTitle.NotFound}</title>
      </Helmet>
      <main className="page__main">
        <h1>404 - Page not found</h1>
        <p>
  The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link to="/">Back to main page</Link>
      </main>
    </>
  );
}
