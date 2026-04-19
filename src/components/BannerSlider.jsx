import React from 'react'
import { Link } from 'react-router-dom'

const BannerSlider = () => {
  const banners = [
    {
      title: 'Summer Sale',
      subtitle: 'Up to 50% OFF on Bed Sheets',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200',
      cta: 'Shop Now',
      link: '/products?category=Bed Sheets'
    },
    {
      title: 'New Arrivals',
      subtitle: 'Premium Comforter Collection',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200',
      cta: 'Explore',
      link: '/products?category=Comforters'
    },
    {
      title: 'Bundle Deals',
      subtitle: 'Complete Bedroom Sets',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
      cta: 'View Deals',
      link: '/products?category=Complete Sets'
    }
  ]

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Using first banner as static for now - can add carousel later */}
      <div className="relative w-full h-full">
        <img
          src={banners[0].image}
          alt={banners[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif animate-fade-in">
                {banners[0].title}
              </h1>
              <p className="text-2xl md:text-3xl mb-8">
                {banners[0].subtitle}
              </p>
              <Link
                to={banners[0].link}
                className="inline-block bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
              >
                {banners[0].cta} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSlider
