import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="flex justify-between items-center text-white px-10 pt-6 md:px-20 relative z-50">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-semibold">
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Footer">Contact</a></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50">
        <RiMenu2Line size={30} onClick={toggleMenu} className="cursor-pointer" />
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={closeMenu}
        />
      )}

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-gray-950 text-white transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        {/* Close Icon inside drawer */}
        <div className="flex justify-end p-4">
          <RiCloseLine size={30} onClick={closeMenu} className="cursor-pointer" />
        </div>
        <ul className="flex flex-col gap-6 p-6 font-semibold">
          <li><a href="#About" onClick={closeMenu}>About</a></li>
          <li><a href="#Experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#Footer" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
