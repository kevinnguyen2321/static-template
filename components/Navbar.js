'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  const handleNavClick = (item) => {
    closeNav();

    if (item.type === 'scroll') {
      // Check if we're on the home page
      if (pathname === '/') {
        // We're on home page, scroll directly
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're on a different page, navigate to home first
        router.push('/');
        // Use setTimeout to allow navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(item.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (item.type === 'navigate') {
      // Navigate to different page
      router.push(item.path);
    }
  };

  const navItems = [
    { type: 'navigate', path: '/', label: 'Home' },
    { type: 'navigate', path: '/menu/breakfast', label: 'Menu' },
    { type: 'navigate', path: '/about', label: 'Our Story' },
    { type: 'scroll', sectionId: 'hours', label: 'Hours' },
    { type: 'scroll', sectionId: 'contact', label: 'Contact' },
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
          <div className="text-xs lg:text-sm text-gray-500 mb-1 tracking-wider font-serif">
            - EST. 2022 -
          </div>
          <button
            onClick={() => handleNavClick({ type: 'navigate', path: '/' })}
            className="text-xl lg:text-2xl font-bold tracking-widest mb-0 hover:text-gray-600 transition-colors font-serif"
          >
            ROOTS & CO.
          </button>
          <div className="text-xs lg:text-sm text-gray-600 tracking-wide font-serif">
            LOCAL GOURMET
          </div>
        </div>

        {/* Nav links - only desktop */}
        <nav className="hidden lg:flex gap-8 ml-auto">
          {navItems.map((item) => (
            <button
              key={item.sectionId || item.path}
              onClick={() => handleNavClick(item)}
              className="text-gray-800 hover:text-gray-600 transition-colors text-lg font-serif"
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
            <li className="mb-5" key={item.sectionId || item.path}>
              <button
                onClick={() => handleNavClick(item)}
                className="text-gray-800 text-lg block py-2 border-b font-serif border-gray-200 w-full text-left hover:text-gray-600 "
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
