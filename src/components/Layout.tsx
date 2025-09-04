import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Heart } from 'lucide-react';
import FloatingElements from './FloatingElements';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/history', label: 'History' },
    { path: '/quiz', label: 'Quiz' },
    { path: '/teachers', label: 'Teachers' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-x-hidden">
      <FloatingElements />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Teachers' Day
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm lg:text-base font-medium transition-colors duration-200 hover:text-blue-600 relative group ${
                    location.pathname === item.path ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`} />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-14 sm:pt-16">
        {children}
      </main>

      {/* Builder Credit Badge (Prominent) */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full shadow-xl ring-1 ring-white/40 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm sm:text-base font-bold transform transition-transform duration-200 hover:scale-105 animate-pulse">
          <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          <span>Built by Aru Sharma</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-12 sm:mt-16 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-3 sm:mb-4">
                <div className="p-1.5 sm:p-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg sm:rounded-xl">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold">Teachers' Day</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Celebrating the educators who shape our future, one student at a time.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
              <div className="space-y-1 sm:space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Made with Love</h3>
              <div className="flex items-center justify-center md:justify-end space-x-2 text-gray-400">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
                <span className="text-xs sm:text-sm">For all the amazing teachers</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Teachers' Day Website. Created with appreciation for educators worldwide • Built by <span className="text-white font-semibold">Aru Sharma</span>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;