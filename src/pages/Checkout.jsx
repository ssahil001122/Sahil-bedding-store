import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'cod'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order placed:', formData)
    alert('Order placed successfully! We will contact you soon.')
    navigate('/')
  }

  const cartTotal = 13000 // Mock total

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="card">
            <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-bold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2">Address *</label>
              <textarea
                name="address"
                required
                rows="3"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block font-bold mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block font-bold mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
            
            <div className="space-y-4 mb-6">
              <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-primary">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <div>
                  <div className="font-bold">Cash on Delivery</div>
                  <div className="text-sm text-gray-600">Pay when you receive</div>
                </div>
              </label>

              <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-primary">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={formData.paymentMethod === 'bank'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <div>
                  <div className="font-bold">Bank Transfer</div>
                  <div className="text-sm text-gray-600">Transfer to our account</div>
                </div>
              </label>

              <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-primary">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="jazzcash"
                  checked={formData.paymentMethod === 'jazzcash'}
                  onChange={handleChange}
                  className="mr-3"
                />
                <div>
                  <div className="font-bold">JazzCash / EasyPaisa</div>
                  <div className="text-sm text-gray-600">Mobile wallet payment</div>
                </div>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold">Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-bold">FREE</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-primary">Rs. {cartTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
