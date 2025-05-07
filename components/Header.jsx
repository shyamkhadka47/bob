"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative px-[5%] md:px-[10%] border-b font-serif border-gray-200 h-[100px] flex justify-between items-center">
      <a href="/" className="font-bold text-2xl sm:text-4xl">Bob Haozous!</a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        <a href="#" className="text-2xl">Inspiration</a>
        <a href="#" className="text-2xl">Photographers</a>
        <a href="#" className="text-2xl">Quests</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <a href="#" className="text-xl">Inspiration</a>
          <a href="#" className="text-xl">Photographers</a>
          <a href="#" className="text-xl">Quests</a>
        </div>
      )}
    </header>
  );
};

export default Header;
