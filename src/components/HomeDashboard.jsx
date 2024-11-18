import React from 'react'
import { Link } from 'react-router-dom'
import { Sun, Cloud, Droplet, Leaf, AlertTriangle, Calendar, Menu } from 'lucide-react'

export default function HomeDashboard() {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 min-h-screen font-sans">
      <div className="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden" style={{backgroundColor:'#D0F0C0'}}>
        <header className="text-white p-4 flex justify-between items-center" style={{ backgroundColor:'#9ACD32'}}>
          <h1 className="text-2xl font-bold font-serif">FarmConnect</h1>
          <Menu size={24} />
        </header>
        
        <main className="p-4">
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 font-serif text-green-800">Weather Forecast</h2>
            <div className="p-4 rounded-lg flex items-center justify-between shadow-md" style={{ backgroundColor:'white' }}>
              <div className="flex items-center">
                <Sun className="text-green-500 mr-2" size={36}  / >
                <span className="text-3xl font-bold text-green-500">72°F</span>
              </div>
              <div className="text-right" style={{color:'#043927'}}>
                <p className=" font-medium">Mostly Sunny</p>
                <p className="text-sm">H: 78°F L: 65°F</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 font-serif text-green-800" >Soil Health Overview</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg text-center shadow-md" style={{backgroundColor:'white'}}>
                <Droplet className=" text-green-500 mx-auto mb-2" size={24} />
                <p className="font-semibold " style={{color:'#043927'}}>Moisture</p>
                <p style={{color:'#043927'}}>Good</p>
              </div>
              <div className="p-4 rounded-lg text-center shadow-md" style={{backgroundColor:'white'}}>
                <Leaf className="text-green-500 mx-auto mb-2" size={24} />
                <p className="font-semibold" style={{color:'#043927'}}>Nutrients</p>
                <p style={{color:'#043927'}}>Fair</p>
              </div>
              <div className=" p-4 rounded-lg text-center shadow-md" style={{backgroundColor:'white'}}>
                <Sun className="text-green-500 mx-auto mb-2" size={24} />
                <p className="font-semibold" style={{color:'#043927'}}>pH Level</p>
                <p style={{color:'#043927'}}>Good</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2  font-serif text-green-800">Crop Health Alerts</h2>
            <div className=" p-4 rounded-lg flex items-start shadow-md"  style={{backgroundColor:'white',color:'#043927'}}>
              <AlertTriangle className="text-green-500 mr-2 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold ">Potential pest infestation in Sector B</p>
                <p className="text-sm ">Detected unusual leaf damage. Inspect and consider treatment.</p>
                <button className="mt-2 font-semibold hover:text-blue-800 transition-colors">View Details</button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 font-serif text-green-800" >Recent Activities</h2>
            <div className="p-4 rounded-lg shadow-md" style={{backgroundColor:'white',color:'#043927'}}>
              <div className="flex items-center mb-2">
                <Calendar className="text-green-500 mr-2" size={18} />
                <p><span className="font-semibold ">Today:</span> <span className="text-gray-700">Irrigation in Sector A</span></p>
              </div>
              <div className="flex items-center mb-2">
                <Calendar className="text-green-500 mr-2" size={18} />
                <p><span className="font-semibold ">Yesterday:</span> <span className="text-gray-700">Fertilizer application in Sector C</span></p>
              </div>
              <div className="flex items-center">
                <Calendar className="text-green-500 mr-2" size={18} />
                <p><span className="font-semibold ">3 days ago:</span> <span className="text-gray-700">Pest control in Sector B</span></p>
              </div>
              <Link to="/activity-log" className="mt-4 font-semibold block hover:text-blue-800 transition-colors">View All Activities</Link>
            </div>
          </section>
        </main>

        <footer className="text-white p-4 flex justify-around" style={{ backgroundColor:'#9ACD32' }}>
          <Sun size={24} className="hover:text-yellow-300 transition-colors cursor-pointer" />
          <Cloud size={24} className="hover:text-blue-300 transition-colors cursor-pointer" />
          <Link to="/soil-health"><Droplet size={24} className="hover:text-blue-300 transition-colors" /></Link>
          <AlertTriangle size={24} className="hover:text-red-300 transition-colors cursor-pointer" />
          <Link to="/activity-log"><Calendar size={24} className="hover:text-yellow-300 transition-colors" /></Link>
        </footer>
      </div>
    </div>
  )
}