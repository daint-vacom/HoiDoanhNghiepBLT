import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Hoạt động Hội', hasDropdown: true },
    { name: 'Hội viên', hasDropdown: true },
    { name: 'Tin giao thương', hasDropdown: false },
    { name: 'Tin tức', hasDropdown: true },
    { name: 'Thư viện', hasDropdown: true },
    { name: 'Về chúng tôi', hasDropdown: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="BLTBA Logo" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-red-700 tracking-tighter">BLTBA</span>
                <span className="text-[8px] uppercase font-semibold text-amber-600 leading-none">Bình Lợi Trung Business Association</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-700 hover:text-red-700 transition-colors py-2">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </button>
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-0 w-48 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-red-600">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700">Tiểu mục 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700">Tiểu mục 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700">Tiểu mục 3</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-4 ml-4">
              <button className="text-gray-500 hover:text-red-700">
                <Search className="w-5 h-5" />
              </button>
              <button className="bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-800 transition-colors shadow-sm">
                Đăng ký Hội viên
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-100">
              <button className="w-full bg-red-700 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-800">
                Đăng ký Hội viên
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
