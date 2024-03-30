/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Link from "next/link";
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="mb-8 text-6xl font-bold text-gray-900">404</div>
      <div className="mb-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </div>
      <p className="mb-8 text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="rounded-md bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 font-bold text-white shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
