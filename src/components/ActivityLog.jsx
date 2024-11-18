import React from 'react'
import { ArrowLeft, Plus, Calendar, Droplet, Sun, Bug } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ActivityLog() {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 min-h-screen font-sans p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className=" from-green-600 to-green-700 text-white p-4 flex items-center justify-between" style={{ backgroundColor:'#9ACD32'}}>
          <div className="flex items-center">
            <Link to="/" className="mr-2 text-white hover:text-green-200 transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold font-serif">Activity Log</h1>
          </div>
          <button className="p-2 bg-white text-green-500 rounded-full hover:bg-green-400 transition-colors">
            <Plus size={24} />
          </button>
        </header>
        
        <main className="p-4" >
          <section className="mb-6 p-4 rounded-lg shadow-md" style={{backgroundColor:'#D0F0C0'}}> 
            <h2 className="text-xl font-semibold mb-4 text-green-800 font-serif">Recent Activities</h2>
            <div className="space-y-4">
              <div className="flex items-start  p-3 rounded-lg" style={{ backgroundColor:'#9ACD32'}}>
                <Droplet size={24} className="mr-2 flex-shrink-0 text-white" />
                <div>
                  <p className="font-semibold text-green-800">Irrigation</p>
                  <p className="text-sm ">Today, 10:30 AM - Sector A</p>
                </div>
              </div>
              <div className="flex items-start  p-3 rounded-lg" style={{ backgroundColor:'#9ACD32'}}>
                <Sun size={24} className="mr-2 flex-shrink-0 text-white" />
                <div>
                  <p className="font-semibold text-green-800">Fertilizer Application</p>
                  <p className="text-sm ">Yesterday, 2:00 PM - Sector C</p>
                </div>
              </div>
              <div className="flex items-start  p-3 rounded-lg" style={{ backgroundColor:'#9ACD32'}}>
                <Bug size={24} className="mr-2 flex-shrink-0 text-white" />
                <div>
                  <p className="font-semibold text-green-800">Pest Control</p>
                  <p className="text-sm ">3 days ago - Sector B</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-md" style={{backgroundColor:'#D0F0C0'}}>
            <h2 className="text-xl font-semibold mb-4 text-green-800 font-serif">Add New Activity</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-green-700">Date</label>
                <div className="flex items-center border border-green-300 rounded p-2">
                  <input type="date" placeholder="Select date" className="w-full focus:outline-none text-green-800" />
                </div>
              </div>
              <div>
                <label className="block mb-1 text-green-700">Activity Type</label>
                <select className="w-full p-2 border border-green-300 rounded text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Select activity type</option>
                  <option>Irrigation</option>
                  <option>Fertilizer Application</option>
                  <option>Pest Control</option>
                  <option>Harvesting</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-green-700">Notes</label>
                <textarea className="w-full p-2 border border-green-300 rounded text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500" rows={3} placeholder="Add any additional notes..."></textarea>
              </div>
              <button className="w-full p-2 rounded hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" style={{ backgroundColor:'#9ACD32',color:'white'}}>Save Activity</button>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}