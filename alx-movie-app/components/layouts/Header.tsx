import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-blue-400 transition-colors"
        >
          ALX MovieApp
        </Link>
        <nav className="flex space-x-6">
          <Link
            href="/movies"
            className="hover:text-blue-400 transition-colors"
          >
            Movies
          </Link>
          <Link
            href="/favorites"
            className="hover:text-blue-400 transition-colors"
          >
            Favorites
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
