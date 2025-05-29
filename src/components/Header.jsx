import React, { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("beranda");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "beranda" },
    { name: "About", id: "tentang" },
    { name: "Projects", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/90 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Ayu Wulandari</div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="ri-menu-line text-2xl"></i>
        </button>

        {/* Menu (Desktop) */}
        <nav className="bg-zinc-800 rounded-full px-2 py-1 gap-2 hidden md:flex">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveLink(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeLink === item.id
                    ? "bg-violet-600 text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button (Desktop Only) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white px-4 py-2 rounded-md border border-violet-600 bg-violet-600 hover:bg-transparent transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Menu (Mobile) */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 px-4 py-4 flex flex-col gap-2 shadow-md">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActiveLink(item.id);
                setIsMenuOpen(false); // Menutup menu setelah klik
              }}
              className={`block px-4 py-2 rounded-md text-sm font-medium transition-all
                ${
                  activeLink === item.id
                    ? "bg-white text-black"
                    : "text-zinc-300 hover:text-white"
                }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-white mt-2 px-4 py-2 rounded-md border border-violet-600 bg-violet-600 hover:bg-transparent hover:text-white transition-all text-center"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
