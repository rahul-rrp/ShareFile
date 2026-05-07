import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h2 className="text-6xl font-extrabold text-[#4A6741] mb-4">404</h2>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h3>
      <p className="text-gray-600 mb-8 max-w-md">
        Could not find the requested resource. The page might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-[#4A6741] text-white px-8 py-3 rounded-full font-bold hover:bg-[#3f5a36] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
