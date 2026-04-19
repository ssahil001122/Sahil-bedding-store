import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-8">
            Get exclusive deals, new arrivals, and bedding tips delivered to your inbox!
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-white transition-all">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 text-gray-200">
            🎁 Get 10% OFF on your first order when you subscribe!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
