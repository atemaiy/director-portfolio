export const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center space-y-10 md:hidden ${
      isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      <a 
        href="#work" 
        onClick={() => setIsMobileMenuOpen(false)} 
        className="text-3xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
      >
        Работы
      </a>
      <a 
        href="#about" 
        onClick={() => setIsMobileMenuOpen(false)} 
        className="text-3xl tracking-widest uppercase text-white hover:text-gray-400 transition-colors"
      >
        Обо мне
      </a>
    </div>
  );
};
