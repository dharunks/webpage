import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getItemCount } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemCount = getItemCount();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-orange-600 flex items-center">
          <span className="mr-2">TastyBites</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`hover:text-orange-600 transition-colors ${location.pathname === '/' ? 'text-orange-600 font-medium' : ''}`}>
            Home
          </Link>
          <Link to="/restaurants" className={`hover:text-orange-600 transition-colors ${location.pathname === '/restaurants' ? 'text-orange-600 font-medium' : ''}`}>
            Restaurants
          </Link>
          <Link to="/search" className="flex items-center hover:text-orange-600 transition-colors">
            <Search size={18} className="mr-1" />
            <span>Search</span>
          </Link>
          <Link to="/cart" className="relative flex items-center hover:text-orange-600 transition-colors">
            <ShoppingBag size={18} className="mr-1" />
            <span>Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <Link to="/" className={`py-2 hover:text-orange-600 transition-colors ${location.pathname === '/' ? 'text-orange-600 font-medium' : ''}`}>
              Home
            </Link>
            <Link to="/restaurants" className={`py-2 hover:text-orange-600 transition-colors ${location.pathname === '/restaurants' ? 'text-orange-600 font-medium' : ''}`}>
              Restaurants
            </Link>
            <Link to="/search" className="py-2 flex items-center hover:text-orange-600 transition-colors">
              <Search size={18} className="mr-2" />
              <span>Search</span>
            </Link>
            <Link to="/cart" className="py-2 relative flex items-center hover:text-orange-600 transition-colors">
              <ShoppingBag size={18} className="mr-2" />
              <span>Cart</span>
              {cartItemCount > 0 && (
                <span className="ml-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;