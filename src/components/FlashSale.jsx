import React from 'react'
import { Link } from 'react-router-dom'

const FlashSale = () => {
  const flashProducts = [
    { id: 1, name: 'Cotton Bed Sheet', price: 3500, oldPrice: 5000, discount: 30, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300', stock: 15 },
    { id: 2, name: 'Pillow Set', price: 2000, oldPrice: 3000, discount: 33, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300', stock: 8 },
    { id: 3, name: 'Comforter', price: 8000, oldPrice: 12000, discount: 33, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300', stock: 12 },
    { id: 4, name: 'Blanket', price: 3000, oldPrice: 4500, discount: 33, image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=300', stock: 20 },
    { id: 5, name: 'Towel Set', price: 1500, oldPrice: 2500, discount: 40, image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=300', stock: 25 },
  ]

  return (
    <section className="py-8 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white font-serif">⚡ Flash Sale</h2>
            <div className="bg-white text-red-500 px-4 py-2 rounded-lg font-bold">
              Ends in: 02:45:30
            </div>
          </div>
          <Link to="/flash-sale" className="text-white hover:underline font-bold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {flashProducts.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-white rounded-lg p-4 hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="relative mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 md:h-40 object-cover rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  -{product.discount}%
                </span>
              </div>
              <h3 className="text-sm font-bold mb-2 line-clamp-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-lg font-bold text-red-500">Rs. {product.price.toLocaleString()}</p>
                <p className="text-xs text-gray-400 line-through">Rs. {product.oldPrice.toLocaleString()}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${(product.stock / 30) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600">Only {product.stock} left!</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlashSale
