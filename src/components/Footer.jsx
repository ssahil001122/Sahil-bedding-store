import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Sahil Bedding</h3>
            <p className="text-gray-300 mb-4">
              Premium quality bedding products for your comfort. 
              Transform your bedroom into a luxury retreat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-accent transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-accent transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-accent transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-accent">All Products</Link></li>
              <li><Link to="/products?category=Bed Sheets" className="text-gray-300 hover:text-accent">Bed Sheets</Link></li>
              <li><Link to="/products?category=Pillows" className="text-gray-300 hover:text-accent">Pillows</Link></li>
              <li><Link to="/products?category=Comforters" className="text-gray-300 hover:text-accent">Comforters</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-accent">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-accent">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-accent">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-accent">Returns</Link></li>
              <li><Link to="/track" className="text-gray-300 hover:text-accent">Track Order</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>0300-1234567</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2" />
                <span>0300-1234567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@sahilbedding.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">&copy; 2026 Sahil Bedding. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-gray-300 hover:text-accent text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-accent text-sm">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
