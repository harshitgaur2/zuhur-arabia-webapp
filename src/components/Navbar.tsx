import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useAuthStore } from '../store/authStore';

export const Navbar = () => {
  const cartItems = useCartStore((state) => state.items);
  const { isAuthenticated } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-primary-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-primary-gold font-bold text-xl tracking-wider"
          >
            ZUHUR ARABIA
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="hover:text-primary-gold transition-colors">
              Products
            </Link>
            <Link to="/about" className="hover:text-primary-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary-gold transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-primary-gold" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-gold text-primary-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to={isAuthenticated ? "/profile" : "/login"}>
              <User className="h-6 w-6 text-primary-gold" />
            </Link>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-primary-gold" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/products" 
              className="block px-3 py-2 text-white hover:text-primary-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-white hover:text-primary-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-white hover:text-primary-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};