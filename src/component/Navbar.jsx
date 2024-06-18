import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownItemClick = (event) => {
    // Add logic here for handling dropdown item click
    console.log('Clicked:', event.target.innerText);
    // Optionally, close dropdown after click
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <img
                className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-120"
                src="/image/narmada text logo.png"
                alt="Workflow"
              />
            </div>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden sm:flex sm:items-center sm:justify-end sm:ml-10">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-xl font-medium"
              >
                Home
              </a>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={closeDropdown}
                  className="text-gray-300 hover:bg-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-xl font-medium"
                >
                  About
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-orange ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        onClick={handleDropdownItemClick}
                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-gray-100 hover:text-black"
                        role="menuitem"
                      >
                        Milk
                      </a>
                      <a
                        href="#"
                        onClick={handleDropdownItemClick}
                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-gray-100 hover:text-black"
                        role="menuitem"
                      >
                        Ghee
                      </a>
                      <a
                        href="#"
                        onClick={handleDropdownItemClick}
                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-gray-100 hover:text-black"
                        role="menuitem"
                      >
                        Mawa
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-xl font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-xl font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
              className="text-gray-300 hover:bg-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-1 w-48 rounded-md shadow-lg bg-orange ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    onClick={handleDropdownItemClick}
                    className="block px-4 py-2 text-sm text-orange-500 hover:bg-gray-100 hover:text-black"
                    role="menuitem"
                  >
                    Milk
                  </a>
                  <a
                    href="#"
                    onClick={handleDropdownItemClick}
                    className="block px-4 py-2 text-sm text-orange-500 hover:bg-gray-100 hover:text-black"
                    role="menuitem"
                  >
                    Ghee
                  </a>
                  <a
                    href="#"
                    onClick={handleDropdownItemClick}
                    className="block px-4 py-2 text-sm text-orange-500 hover:bg-gray-100 hover:text-black"
                    role="menuitem"
                  >
                    Mawa
                  </a>
                </div>
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







