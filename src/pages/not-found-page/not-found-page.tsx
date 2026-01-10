import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>6 Cities. Page not found</title>
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
