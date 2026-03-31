// import React, { useState } from 'react';
// import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav className="flex justify-between items-center text-white px-10 pt-6 md:px-20 relative z-50">
//       <span className="text-xl font-bold tracking-wide">Portfolio</span>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-6 font-semibold">
//         <li><a href="#About">About</a></li>
//         <li><a href="#Experience">Experience</a></li>
//         <li><a href="#Projects">Projects</a></li>
//         <li><a href="#Footer">Contact</a></li>
//       </ul>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden z-50">
//         <RiMenu2Line size={30} onClick={toggleMenu} className="cursor-pointer" />
//       </div>

//       {/* Backdrop */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
//           onClick={closeMenu}
//         />
//       )}

//       {/* Drawer Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-gray-950 text-white transform ${
//           menuOpen ? 'translate-x-0' : 'translate-x-full'
//         } transition-transform duration-300 ease-in-out md:hidden z-50`}
//       >
//         {/* Close Icon inside drawer */}
//         <div className="flex justify-end p-4">
//           <RiCloseLine size={30} onClick={closeMenu} className="cursor-pointer" />
//         </div>
//         <ul className="flex flex-col gap-6 p-6 font-semibold">
//           <li><a href="#About" onClick={closeMenu}>About</a></li>
//           <li><a href="#Experience" onClick={closeMenu}>Experience</a></li>
//           <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>
//           <li><a href="#Footer" onClick={closeMenu}>Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = theme === "light";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#Footer" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-2">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl border backdrop-blur-md shadow-sm transition-all duration-300 ${
          isLight
            ? "bg-white/80 border-slate-200"
            : "bg-slate-900/80 border-slate-800"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <a
            href="#"
            className={`text-lg md:text-xl font-bold tracking-wide ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Afia Ahmed
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition duration-200 ${
                  isLight
                    ? "text-slate-600 hover:text-sky-600"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-3 rounded-full border transition duration-300 ${
                isLight
                  ? "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  : "bg-slate-800 border-slate-700 text-yellow-300 hover:bg-slate-700"
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? <FaMoon size={15} /> : <FaSun size={15} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition duration-300 ${
                isLight
                  ? "bg-slate-100 border-slate-200 text-slate-700"
                  : "bg-slate-800 border-slate-700 text-yellow-300"
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? <FaMoon size={14} /> : <FaSun size={14} />}
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`p-2 rounded-lg ${
                isLight ? "text-slate-800" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className={`md:hidden px-5 pb-4 border-t ${
              isLight ? "border-slate-200" : "border-slate-800"
            }`}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition duration-200 ${
                    isLight
                      ? "text-slate-600 hover:text-sky-600"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
