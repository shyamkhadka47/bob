"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';


const navLinks= [
  {name:"Storyteller", url:"/storyteller"},
  {name:"Visual History", url:"/visual-history"},
  {name:"Videos", url:"/videos"},
  {name:"Biography", url:"/biography"},
  {name:"Contact", url:"/contact"}
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" fixed top-0 z-40 w-full bg-white px-[5%] md:px-[10%] border-b font-serif border-gray-200 h-[100px] flex justify-between items-center">
      <Link href="/" className="font-bold text-2xl sm:text-4xl">Bob Haozous!</Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((el, i)=>(
          <Link href={el.url} className='text-2xl md:text-[16px] font-bold text-green-800' key={i}>{el.name}</Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32}  onClick={()=>setIsOpen(false)}/> : <Menu size={32} onClick={() => setIsOpen(true)}/>}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center gap-6 py-6 md:hidden z-50">
         {navLinks.map((el, i)=>(
          <Link key={i} href={el.url} className='text-2xl md:text-[16px] font-bold text-green-800' onClick={()=>setIsOpen(false)}>{el.name}</Link>
         ))}
        </div>
      )}
    </header>
  );
};

export default Header;
