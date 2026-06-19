// components/Header.jsx
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

export const Header = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-4 md:px-12 md:py-6 flex items-center justify-between ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className={`flex flex-col items-center text-center absolute left-1/2 -translate-x-1/2 w-full px-4 transition-all duration-500 pointer-events-none ${
        isScrolled ? 'top-1/2 -translate-y-1/2 scale-90 md:scale-100' : 'top-12 md:top-16 scale-100'
      }`}>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.15em] uppercase drop-shadow-lg pointer-events-auto">Полина Полищук</h1>
        <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-300 uppercase mt-2 drop-shadow-md pointer-events-auto">Режиссёр документального кино</span>
      </div>
      
      {/* Десктопное меню */}
      <nav className="hidden md:flex space-x-8 text-sm tracking-widest uppercase ml-auto relative z-10">
        <a href="#work" className="hover:text-white text-gray-400 transition-colors">Работы</a>
        <a href="#about" className="hover:text-white text-gray-400 transition-colors">Обо мне</a>
      </nav>

      {/* Кнопка мобильного меню (Бургер) */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden relative z-50 ml-auto p-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
      </button>
    </header>
  );
};
