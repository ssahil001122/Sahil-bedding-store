import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart, FaShare } from 'react-icons/fa'

const ProductDetail = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('King')

  // Mock product data
  const product = {
    id: id,
    name: 'Premium Cotton Bed Sheet',
    price: 5000,
    category: 'Bed Sheets',
    description: 'Experience ultimate comfort with our premium cotton bed sheets. Made from 100% Egyptian cotton with 400 thread count for exceptional softness and durability.',
    features: [
      '100% Egyptian Cotton',
      '400 Thread Count',
      'Breathable & Soft',
      'Machine Washable',
      'Fade Resistant',
      'Hypoallergenic'
    ],
    sizes: ['Single', 'Double', 'Queen', 'King'],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      'https://images.unsplash.com/photo-1631049035182-249067d7618e?w=800',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 128
  }

  const [mainImage, setMainImage] = useState(product.images[0])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-gray-600">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-primary">Products</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="mb-4 rounded-lg overflow-hidden">
            <img src={mainImage} alt={product.name} className="w-full h-96 object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className={`w-full h-24 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImage === img ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4 font-serif">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>

          <p className="text-4xl font-bold text-primary mb-6">
            Rs. {product.price.toLocaleString()}
          </p>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block font-bold mb-2">Size:</label>
            <div className="flex gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`px-6 py-2 border-2 rounded-lg ${
                    selectedSize === size
                      ? 'border-primary bg-primary text-white'
                      : 'border-gray-300 hover:border-primary'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block font-bold mb-2">Quantity:</label>
            <div className="flex items-center gap-4">
              <button
                className="px-4 py-2 border-2 rounded-lg hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                className="px-4 py-2 border-2 rounded-lg hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <button className="btn-primary flex-1 flex items-center justify-center gap-2">
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="btn-secondary px-6">
              <FaHeart />
            </button>
            <button className="btn-secondary px-6">
              <FaShare />
            </button>
          </div>

          {/* Features */}
          <div className="bg-light rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4">Product Features:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 font-serif">Related Products</h2>
        {/* Add related products grid here */}
      </div>
    </div>
  )
}

export default ProductDetail
