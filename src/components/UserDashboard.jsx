import React from 'react'
import { Link } from 'react-router-dom'
import { User, LogOut, Tractor, Droplet, Calendar } from 'lucide-react'

export default function UserDashboard({ user, onLogout }) {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        <header className=" text-white p-4 flex justify-between items-center" style={{ backgroundColor:'#9ACD32'}}>
          <h1 className="text-2xl font-bold">FarmConnect Dashboard</h1>
          <div className="flex items-center">
            <span className="mr-4">{user.name}</span>
            <button onClick={onLogout} className="hover:text-green-200">
              <LogOut size={24} />
            </button>
          </div>
        </header>
        
        <main className="p-6" style={{backgroundColor:'#D0F0C0'}}>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome back, {user.name}!</h2>
            <p className="text-gray-600">Here's an overview of your farm's current status:</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/home" className="block p-6 bg-green-100 rounded-lg shadow hover:bg-blue-200 transition-colors">
              <Tractor className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="text-lg font-semibold mb-2">Farm Overview</h3>
              <p className="text-sm text-gray-600">View your farm's overall status and key metrics.</p>
            </Link>

            <Link to="/soil-health" className="block p-6 bg-green-100 rounded-lg shadow hover:bg-green-200 transition-colors">
              <Droplet className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="text-lg font-semibold mb-2">Soil Health</h3>
              <p className="text-sm text-gray-600">Check the latest soil health data and recommendations.</p>
            </Link>

            <Link to="/activity-log" className="block p-6 bg-green-100 rounded-lg shadow hover:bg-yellow-200 transition-colors">
              <Calendar className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="text-lg font-semibold mb-2">Activity Log</h3>
              <p className="text-sm text-gray-600">Review and manage your farm activities.</p>
            </Link>
          </div>
        </main>

        <footer className=" text-white p-4 mt-8" style={{ backgroundColor:'#9ACD32'}}>
          <p className="text-center">&copy; 2024 FarmConnect. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}