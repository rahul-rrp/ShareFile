"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gray-50">
          <h2 className="text-4xl font-extrabold text-[#4A6741] mb-4">
            Critical System Error
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            A fatal error occurred. Please try refreshing the page.
          </p>
          <button
            onClick={() => reset()}
            className="bg-[#4A6741] text-white px-6 py-3 rounded-full font-bold hover:bg-[#3f5a36] transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
