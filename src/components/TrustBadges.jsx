import React from 'react'

const TrustBadges = () => {
  return (
    <section className="py-8 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🚚</div>
            <h4 className="font-bold text-sm">Free Delivery</h4>
            <p className="text-xs text-gray-600">Orders over Rs. 5,000</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">💯</div>
            <h4 className="font-bold text-sm">100% Authentic</h4>
            <p className="text-xs text-gray-600">Genuine products</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🔄</div>
            <h4 className="font-bold text-sm">Easy Returns</h4>
            <p className="text-xs text-gray-600">7-day return policy</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">💳</div>
            <h4 className="font-bold text-sm">Secure Payment</h4>
            <p className="text-xs text-gray-600">Safe & encrypted</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">📞</div>
            <h4 className="font-bold text-sm">24/7 Support</h4>
            <p className="text-xs text-gray-600">Always here to help</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
