import React from 'react'
import { Link } from 'react-router-dom'
import BannerSlider from '../components/BannerSlider'
import FlashSale from '../components/FlashSale'
import TrustBadges from '../components/TrustBadges'
import ProductCard from '../components/ProductCard'
import Newsletter from '../components/Newsletter'

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Cotton Bed Sheet',
      price: 5000,
      oldPrice: 7000,
      discount: 29,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500',
      category: 'Bed Sheets',
      rating: 4.5,
      reviews: 128,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Luxury Comforter Set',
      price: 12000,
      oldPrice: 15000,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500',
      category: 'Comforters',
      rating: 4.8,
      reviews: 95,
      badge: 'Hot Deal'
    },
    {
      id: 3,
      name: 'Memory Foam Pillow',
      price: 3000,
      oldPrice: 4000,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500',
      category: 'Pillows',
      rating: 4.6,
      reviews: 210,
      badge: 'Top Rated'
    },
    {
      id: 4,
      name: 'King Size Bed Set',
      price: 18000,
      oldPrice: 22000,
      discount: 18,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500',
      category: 'Complete Sets',
      rating: 4.7,
      reviews: 67,
      badge: 'Premium'
    },
    {
      id: 5,
      name: 'Silk Bed Sheet Set',
      price: 8000,
      oldPrice: 10000,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=500',
      category: 'Bed Sheets',
      rating: 4.4,
      reviews: 89,
      badge: 'New'
    },
    {
      id: 6,
      name: 'Winter Comforter',
      price: 15000,
      oldPrice: 18000,
      discount: 17,
      image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500',
      category: 'Comforters',
      rating: 4.9,
      reviews: 156,
      badge: 'Best Seller'
    },
    {
      id: 7,
      name: 'Orthopedic Pillow',
      price: 4500,
      oldPrice: 6000,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500',
      category: 'Pillows',
      rating: 4.3,
      reviews: 78,
      badge: 'Sale'
    },
    {
      id: 8,
      name: 'Double Bed Set',
      price: 14000,
      oldPrice: 17000,
      discount: 18,
      image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500',
      category: 'Complete Sets',
      rating: 4.6,
      reviews: 92,
      badge: 'Popular'
    }
  ]

  const categories = [
    { name: 'Bed Sheets', icon: '🛏️', count: 45, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300' },
    { name: 'Pillows', icon: '🛌', count: 28, image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300' },
    { name: 'Comforters', icon: '🧺', count: 22, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300' },
    { name: 'Complete Sets', icon: '✨', count: 18, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300' },
    { name: 'Mattress Protectors', icon: '🛡️', count: 15, image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=300' },
    { name: 'Cushion Covers', icon: '💺', count: 32, image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=300' },
    { name: 'Blankets', icon: '🧣', count: 20, image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=300' },
    { name: 'Towels', icon: '🧴', count: 25, image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=300' }
  ]

  return (
    <div>
      {/* Banner Slider */}
      <BannerSlider />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Flash Sale */}
      <FlashSale />

      {/* Categories */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold font-serif">Shop by Category</h2>
            <Link to="/products" className="text-primary hover:underline font-bold">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={`/products?category=${category.name}`}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="text-lg font-bold">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.count} Products</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">Ready to Transform Your Sleep?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Join thousands of satisfied customers who have upgraded their bedrooms with Sahil Bedding.
          </p>
          <Link to="/products" className="btn-primary inline-block">
            Start Shopping
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

export default Home
