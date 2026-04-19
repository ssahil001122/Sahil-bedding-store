import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <Link 
      to={`/product/${product.id}`}
      className="card group relative overflow-hidden"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.badge && (
          <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {product.badge}
          </span>
        )}
        {product.discount && (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Quick Actions */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsWishlisted(!isWishlisted)
          }}
          className={`p-2 rounded-full shadow-lg ${
            isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
          } hover:scale-110 transition-transform`}
        >
          <FaHeart />
        </button>
        <button
          onClick={(e) => e.preventDefault()}
          className="p-2 bg-white text-gray-700 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaEye />
        </button>
      </div>
      
      {/* Image */}
      <div className="overflow-hidden rounded-lg mb-4 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Quick Add to Cart - Shows on Hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-full group-hover:translate-y-0 duration-300">
          <FaShoppingCart className="inline mr-2" />
          Quick Add
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <span className="text-xs text-gray-500 uppercase">{product.category}</span>
        <h3 className="text-sm md:text-base font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 text-sm">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-lg md:text-xl font-bold text-primary">
            Rs. {product.price.toLocaleString()}
          </p>
          {product.oldPrice && (
            <p className="text-xs md:text-sm text-gray-400 line-through">
              Rs. {product.oldPrice.toLocaleString()}
            </p>
          )}
        </div>

        {/* Free Shipping Badge */}
        {product.price >= 5000 && (
          <div className="text-xs text-green-600 font-semibold">
            ✓ Free Shipping
          </div>
        )}
      </div>
    </Link>
  )
}

export default ProductCard
