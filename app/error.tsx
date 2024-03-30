"use client";

import { useRouter } from "next/navigation";

const ErrorPage = ({ reset }: { reset: () => void }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center text-white">
        <h1 className="mb-4 text-6xl font-semibold text-gray-800">Oops!</h1>
        <p className="mb-8 text-lg text-gray-600">Something went wrong.</p>
        <div className="flex gap-6">
          <button
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className="rounded-md bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 font-bold text-white shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={goBack}
          >
            Go Back
          </button>

          <button
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className="rounded-md bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 font-bold text-white shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
