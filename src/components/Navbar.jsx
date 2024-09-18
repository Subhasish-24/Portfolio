import React, { useState } from "react";
import { close, menu } from "../assets/images";
import { NavItems } from "./index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50
    bg-black/90"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex justify-between items-center
            py-5 mx-auto c-space"
        >
          <a
            href="/"
            className="text-neutral-400
                font-bold text-xl hover:text-white transition-colors"
          >
            Subhasish
          </a>
          <button
            onClick={toggleMenu}
            className="sm:hidden text-neutral-400 hover:text-white
           focus:outline-none flex"
            aria-label="Toggle Menu"
          >
            <img src={isOpen ? close : menu} alt="toggle" className="h-6 w-6" />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-2">
            <NavItems/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
