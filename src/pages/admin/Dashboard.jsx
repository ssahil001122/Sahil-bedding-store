import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { FaHome, FaBox, FaShoppingBag, FaUsers, FaChartBar } from 'react-icons/fa'

const Dashboard = () => {
  const stats = [
    { label: 'Total Orders', value: '156', icon: FaShoppingBag, color: 'bg-blue-500' },
    { label: 'Total Products', value: '48', icon: FaBox, color: 'bg-green-500' },
    { label: 'Total Customers', value: '89', icon: FaUsers, color: 'bg-purple-500' },
    { label: 'Revenue', value: 'Rs. 2.4M', icon: FaChartBar, color: 'bg-orange-500' }
  ]

  const recentOrders = [
    { id: 'ORD001', customer: 'Ahmed Ali', amount: 15000, status: 'Pending' },
    { id: 'ORD002', customer: 'Sara Khan', amount: 8000, status: 'Delivered' },
    { id: 'ORD003', customer: 'Hassan Raza', amount: 12000, status: 'Processing' }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-dark text-white min-h-screen p-6">
          <h2 className="text-2xl font-bold mb-8 font-serif">Admin Panel</h2>
          <nav className="space-y-2">
            <Link to="/admin" className="flex items-center gap-3 p-3 rounded hover:bg-primary">
              <FaHome /> Dashboard
            </Link>
            <Link to="/admin/products" className="flex items-center gap-3 p-3 rounded hover:bg-primary">
              <FaBox /> Products
            </Link>
            <Link to="/admin/orders" className="flex items-center gap-3 p-3 rounded hover:bg-primary">
              <FaShoppingBag /> Orders
            </Link>
            <Link to="/admin/customers" className="flex items-center gap-3 p-3 rounded hover:bg-primary">
              <FaUsers /> Customers
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-4 rounded-lg`}>
                    <stat.icon className="text-white text-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Order ID</th>
                  <th className="text-left py-3">Customer</th>
                  <th className="text-left py-3">Amount</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3">{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">Rs. {order.amount.toLocaleString()}</td>
                    <td className="py-3">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-primary hover:underline">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
