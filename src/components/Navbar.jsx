import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isDark, setIsDark }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Start', path: '/' },
    { name: 'Produkter', path: '/products' },
    { name: 'Om oss', path: '/about' },
    { name: 'Karriär', path: '/careers' },
    { name: 'Kundservice', path: '/support' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
            <span className="material-symbols-outlined">account_balance</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-primary dark:text-white uppercase">Entercard</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary dark:hover:text-accent ${
                isActive(link.path) ? 'text-primary dark:text-accent border-b-2 border-primary dark:border-accent py-2' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-secondary transition-all shadow-md hover:shadow-lg"
          >
            <span className="material-symbols-outlined text-lg">lock</span>
            Logga in
          </a>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            id="theme-toggle"
          >
            <span className={`material-symbols-outlined ${isDark ? 'hidden' : 'block'}`}>dark_mode</span>
            <span className={`material-symbols-outlined ${isDark ? 'block' : 'hidden'}`}>light_mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
