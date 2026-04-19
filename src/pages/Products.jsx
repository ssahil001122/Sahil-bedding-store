import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaFilter } from 'react-icons/fa'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('all')

  const products = [
    { id: 1, name: 'Premium Cotton Bed Sheet', price: 5000, oldPrice: 7000, discount: 29, category: 'Bed Sheets', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500', rating: 4.5, reviews: 128, badge: 'Best Seller' },
    { id: 2, name: 'Luxury Comforter Set', price: 12000, oldPrice: 15000, discount: 20, category: 'Comforters', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500', rating: 4.8, reviews: 95, badge: 'Hot Deal' },
    { id: 3, name: 'Memory Foam Pillow', price: 3000, oldPrice: 4000, discount: 25, category: 'Pillows', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500', rating: 4.6, reviews: 210, badge: 'Top Rated' },
    { id: 4, name: 'King Size Bed Set', price: 18000, oldPrice: 22000, discount: 18, category: 'Complete Sets', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500', rating: 4.7, reviews: 67, badge: 'Premium' },
    { id: 5, name: 'Silk Bed Sheet', price: 8000, oldPrice: 10000, discount: 20, category: 'Bed Sheets', image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=500', rating: 4.4, reviews: 89, badge: 'New' },
    { id: 6, name: 'Winter Comforter', price: 15000, oldPrice: 18000, discount: 17, category: 'Comforters', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500', rating: 4.9, reviews: 156, badge: 'Best Seller' },
    { id: 7, name: 'Orthopedic Pillow', price: 4500, oldPrice: 6000, discount: 25, category: 'Pillows', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500', rating: 4.3, reviews: 78, badge: 'Sale' },
    { id: 8, name: 'Double Bed Set', price: 14000, oldPrice: 17000, discount: 18, category: 'Complete Sets', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500', rating: 4.6, reviews: 92, badge: 'Popular' },
    { id: 9, name: 'Egyptian Cotton Sheet', price: 9000, oldPrice: 12000, discount: 25, category: 'Bed Sheets', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500', rating: 4.7, reviews: 134, badge: 'Premium' },
    { id: 10, name: 'Microfiber Comforter', price: 10000, oldPrice: 13000, discount: 23, category: 'Comforters', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500', rating: 4.5, reviews: 102, badge: 'Hot Deal' },
    { id: 11, name: 'Cooling Pillow', price: 3500, oldPrice: 5000, discount: 30, category: 'Pillows', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500', rating: 4.4, reviews: 87, badge: 'Sale' },
    { id: 12, name: 'Queen Size Set', price: 16000, oldPrice: 20000, discount: 20, category: 'Complete Sets', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500', rating: 4.8, reviews: 76, badge: 'Best Seller' },
    { id: 13, name: 'Fleece Blanket', price: 4000, oldPrice: 5500, discount: 27, category: 'Blankets', image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=500', rating: 4.6, reviews: 145, badge: 'Popular' },
    { id: 14, name: 'Bath Towel Set', price: 2500, oldPrice: 3500, discount: 29, category: 'Towels', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500', rating: 4.5, reviews: 198, badge: 'Top Rated' },
    { id: 15, name: 'Mattress Protector', price: 3000, oldPrice: 4000, discount: 25, category: 'Mattress Protectors', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500', rating: 4.7, reviews: 112, badge: 'New' },
    { id: 16, name: 'Cushion Cover Set', price: 2000, oldPrice: 2800, discount: 29, category: 'Cushion Covers', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500', rating: 4.3, reviews: 89, badge: 'Sale' },
  ]

  const categories = ['All', 'Bed Sheets', 'Pillows', 'Comforters', 'Complete Sets', 'Blankets', 'Towels', 'Mattress Protectors', 'Cushion Covers']

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesPrice = 
      priceRange === 'all' ||
      (priceRange === 'low' && product.price < 5000) ||
      (priceRange === 'mid' && product.price >= 5000 && product.price < 10000) ||
      (priceRange === 'high' && product.price >= 10000)
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Our Products</h1>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Price Filter */}
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Under Rs. 5,000</option>
            <option value="mid">Rs. 5,000 - 10,000</option>
            <option value="high">Above Rs. 10,000</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link 
            key={product.id}
            to={`/product/${product.id}`}
            className="card group relative"
          >
            {/* Badge */}
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
                {product.badge}
              </span>
            )}
            {product.discount && (
              <span className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                -{product.discount}%
              </span>
            )}
            
            <div className="overflow-hidden rounded-lg mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xs text-gray-500">{product.category}</span>
            <h3 className="text-sm md:text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
            
            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 text-xs md:text-sm mr-2">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
            
            {/* Price */}
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-4">
              <p className="text-lg md:text-2xl font-bold text-primary">Rs. {product.price.toLocaleString()}</p>
              {product.oldPrice && (
                <p className="text-xs md:text-sm text-gray-400 line-through">Rs. {product.oldPrice.toLocaleString()}</p>
              )}
            </div>
            
            <button className="btn-primary w-full text-sm md:text-base">Add to Cart</button>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl text-gray-500">No products found</p>
        </div>
      )}
    </div>
  )
}

export default Products
