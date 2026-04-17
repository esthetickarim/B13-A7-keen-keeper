import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-6xl font-bold text-[var(--primary)]">404</h1>

      <p className="text-gray-500 mt-4 text-lg">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-[var(--primary)] text-white px-6 py-3 rounded-lg shadow hover:bg-[var(--primary-dark)] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}