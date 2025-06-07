'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  const handleNavClick = (sectionId) => {
    closeNav();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Our Story' },
    { id: 'hours', label: 'Hours' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-white p-4 lg:px-10 lg:py-5 fixed top-0 w-full z-50 shadow-md flex justify-between items-center">
        {/* Hamburger - only mobile */}
        <button
          className="text-2xl p-2 lg:hidden"
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="text-center flex-1 lg:flex-none lg:text-left">
          <div className="text-xs lg:text-sm text-gray-500 mb-1 tracking-wider">
            - EST. 2022 -
          </div>
          <h1 className="text-xl lg:text-2xl font-bold tracking-widest mb-0">
            ROOTS & CO.
          </h1>
          <div className="text-xs lg:text-sm text-gray-600 tracking-wide">
            LOCAL GOURMET
          </div>
        </div>

        {/* Nav links - only desktop */}
        <nav className="hidden lg:flex gap-8 ml-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-800 hover:text-gray-600 transition-colors text-lg"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Phone button */}
        <button
          className="text-2xl p-2"
          onClick={() => (window.location.href = 'tel:+15555555555')}
          aria-label="Call us"
        >
          📞
        </button>
      </header>

      {/* Mobile slide-out nav */}
      <nav
        className={`fixed top-20 w-4/5 max-w-sm h-[calc(100vh-5rem)] bg-white shadow-lg transition-all duration-300 ease-in-out z-40 p-5 pt-12 lg:hidden ${
          isNavOpen ? 'left-0' : '-left-full'
        }`}
      >
        <ul className="list-none">
          {navItems.map((item) => (
            <li className="mb-5" key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="text-gray-800 text-lg block py-2 border-b border-gray-200 w-full text-left hover:text-gray-600"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for mobile menu */}
      {isNavOpen && (
        <div
          className="fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeNav}
        />
      )}
    </>
  );
}
