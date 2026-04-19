import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Cotton Bed Sheet',
      price: 5000,
      quantity: 2,
      size: 'King',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200'
    },
    {
      id: 2,
      name: 'Memory Foam Pillow',
      price: 3000,
      quantity: 1,
      size: 'Standard',
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=200'
    }
  ])

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 5000 ? 0 : 200
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-2xl text-gray-500 mb-8">Your cart is empty</p>
          <Link to="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map(item => (
              <div key={item.id} className="card mb-4 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-600">Size: {item.size}</p>
                  <p className="text-primary font-bold">Rs. {item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-2 border rounded hover:bg-gray-100"
                  >
                    <FaMinus />
                  </button>
                  <span className="w-12 text-center font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-2 border rounded hover:bg-gray-100"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="font-bold">
                    {shipping === 0 ? 'FREE' : `Rs. ${shipping}`}
                  </span>
                </div>
                {subtotal < 5000 && (
                  <p className="text-sm text-gray-600">
                    Add Rs. {(5000 - subtotal).toLocaleString()} more for free shipping!
                  </p>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">Rs. {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <Link to="/checkout" className="btn-primary w-full block text-center">
                Proceed to Checkout
              </Link>
              <Link to="/products" className="btn-secondary w-full block text-center mt-4">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
