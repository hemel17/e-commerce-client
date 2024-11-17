import { TriangleAlert, House } from "lucide-react";

const NoAccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-900 to-black">
      <TriangleAlert className="w-24 h-24 text-red-500" />
      <h1 className="mt-4 text-6xl font-bold">403</h1>
      <h2 className="mt-2 text-2xl font-semibold">
        Forbidden! You don't have permission to access this page.
      </h2>
      <a
        href="/"
        className="flex items-center px-6 py-3 mt-8 text-white transition-colors bg-red-500 rounded-full hover:bg-red-600"
      >
        <House className="w-5 h-5 mr-2" />
        Back to Home
      </a>
    </div>
  );
};

export default NoAccess;
