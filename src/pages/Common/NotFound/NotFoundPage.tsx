import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <p className="text-2xl font-semibold text-gray-700 md:text-3xl">Página no encontrada!</p>
          <p className="mt-4 text-gray-600">La página que estás buscando no existe.</p>
          <Link
            to="/"
            className="inline-block mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md shadow-md transition duration-200">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
