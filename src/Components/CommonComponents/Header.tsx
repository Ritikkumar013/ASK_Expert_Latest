
"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); // New state for accordion

  const closeDropdown = () => setIsMenuOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  // Define menu links
  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/privacypolicy", label: "Privacy Policy" },
    { href: "/termsofservice", label: "Terms Of Service" },
    { href: "/contactus", label: "Contact Us" },
  ];

  // Define service links for dropdown/accordion
  const serviceLinks = [
    {
      href: "/services/printertroubleshooting",
      label: "Printer Troubleshooting",
    },
    { href: "/services/windowsissues", label: "Windows Issues" },
    {
      href: "/services/outlookpstfilesupport",
      label: "Outlook PST File Support",
    },
    { href: "/services/televisionsetup", label: "Television Setup" },
    { href: "/services/emailsupport", label: "Email Support" },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="text-center text-white bg-[#DC143C] p-2 text-xs">
        <p>Get the best expert services anywhere in the world</p>
      </div>
      <div className="bg-white w-full">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center md:px-6  justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeDropdown}>
            <img src="/Logo.png" className="w-[100px]" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-grow justify-center space-x-8 md:space-x-6 relative">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#DC143C]"
              >
                {link.label}
              </Link>
            ))}

            {/* Desktop Dropdown Menu for Services */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#DC143C] focus:outline-none flex items-center">
                Services
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 hidden bg-white shadow-md rounded-md w-48 mt-2 group-hover:block">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#DC143C]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/"
              className="bg-[#FFD600] text-black px-5 py-3 rounded text-sm"
            >
              Get Support
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black opacity-70 z-10"
              onClick={closeDropdown}
            ></div>
          )}

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 w-4/5 h-full z-20 bg-[#f7f7f7] transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              onClick={closeDropdown}
              className="text-gray-700 text-2xl absolute top-4 right-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="border-b border-red-700">
              <Link href="/" onClick={closeDropdown}>
                <img src="/Logo.png" className="w-[100px] m-4" />
              </Link>
            </div>

            <nav className="flex flex-col items-start text-left text-lg">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-red-500 w-full py-4 px-5 border-b"
                  onClick={closeDropdown}
                >
                  {link.label}
                </Link>
              ))}

              {/* Accordion for Services in Mobile Menu */}
              <div className="w-full">
                <button
                  onClick={toggleAccordion}
                  className="text-gray-700 hover:text-[#DC143C] flex items-center justify-between w-full focus:outline-none py-4 px-5 border-b"
                >
                  Services
                  <svg
                    className={`ml-2 w-4 h-4 transform transition-transform ${
                      isAccordionOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isAccordionOpen && (
                  <div className="flex flex-col text-lg">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-gray-700 hover:text-red-500 w-full px-5 py-3 border-b"
                        onClick={closeDropdown}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/"
                className="bg-[#ffd600] text-black px-4 py-2 rounded ml-5 mt-5"
                onClick={closeDropdown}
              >
                Get Support!
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;