import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-4">
              <span>📞 0300-1234567</span>
              <span>📧 info@sahilbedding.com</span>
            </div>
            <div className="hidden md:flex gap-4">
              <Link to="/track" className="hover:text-accent">Track Order</Link>
              <Link to="/help" className="hover:text-accent">Help</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-serif">
            Sahil Bedding
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <div className="relative group">
              <button className="hover:text-accent transition-colors">Categories ▾</button>
              <div className="absolute top-full left-0 bg-white text-dark shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link to="/products?category=Bed Sheets" className="block px-4 py-2 hover:bg-light">Bed Sheets</Link>
                <Link to="/products?category=Pillows" className="block px-4 py-2 hover:bg-light">Pillows</Link>
                <Link to="/products?category=Comforters" className="block px-4 py-2 hover:bg-light">Comforters</Link>
                <Link to="/products?category=Complete Sets" className="block px-4 py-2 hover:bg-light">Complete Sets</Link>
                <Link to="/products?category=Blankets" className="block px-4 py-2 hover:bg-light">Blankets</Link>
                <Link to="/products?category=Towels" className="block px-4 py-2 hover:bg-light">Towels</Link>
              </div>
            </div>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-accent transition-colors"
            >
              <FaSearch size={20} />
            </button>
            <Link to="/cart" className="relative hover:text-accent transition-colors">
              <FaShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/login" className="hover:text-accent transition-colors">
              <FaUser size={24} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 hover:text-accent">Home</Link>
            <Link to="/products" className="block py-2 hover:text-accent">Products</Link>
            <Link to="/about" className="block py-2 hover:text-accent">About</Link>
            <Link to="/contact" className="block py-2 hover:text-accent">Contact</Link>
            <Link to="/cart" className="block py-2 hover:text-accent">Cart</Link>
            <Link to="/login" className="block py-2 hover:text-accent">Login</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
