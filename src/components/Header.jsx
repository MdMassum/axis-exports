import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.jpg";

export const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#aboutUs" },
  { label: "CONTACT US", href: "#contactUs" },
  { label: "LOGIN", href: "#" },
  { label: "REGISTER", href: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[80%] mx-auto flex items-center justify-between py-2">
        <div>
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((navItem) => (
            <a
              key={navItem.label}
              href={navItem.href}
              className="text-black uppercase tracking-wide hover:text-green-700 transition"
            >
              {navItem.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white bg-opacity-50 p-4 flex flex-col items-center space-y-4 shadow-md">
          {navItems.map((navItem) => (
            <a
              key={navItem.label}
              href={navItem.href}
              className="text-green-900 uppercase tracking-wide hover:text-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              {navItem.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;