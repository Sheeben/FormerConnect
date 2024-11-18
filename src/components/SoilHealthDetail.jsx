import React from 'react'
import { ArrowLeft, Droplet, Leaf, ThermometerSun } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SoilHealthDetail() {
  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 min-h-screen font-sans p-4">
      <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden" style={{backgroundColor:'#9ACD32'}}>
        <header className="text-white p-4 flex items-center" style={{ backgroundColor:'#9ACD32' }}>
          <Link to="/" className="mr-2 text-white hover:text-green-200 transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold font-serif" >Soil Health Detail</h1>
        </header>
        
        <main className="p-4">
          <section className="mb-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4  font-serif text-green-800" >Nutrient Levels</h2>
            <div className="space-y-4" style={{color:'#043927'}}>
              <div className="flex items-center justify-between">
                <span>Nitrogen (N)</span>
                <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span >Phosphorus (P)</span>
                <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span >Potassium (K)</span>
                <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 font-serif text-green-800">Other Indicators</h2>
            <div className="grid grid-cols-3 gap-4" style={{color:'#043927'}}>
              <div className="text-center p-3 rounded-lg" style={{backgroundColor:'#D0F0C0'}}>
                <Droplet size={24} className="mx-auto mb-2 text-green-500" />
                <span >Moisture</span>
                <p className="font-semibold ">65%</p>
              </div>
              <div className="text-center p-3 rounded-lg" style={{backgroundColor:'#D0F0C0'}}>
                <ThermometerSun size={24} className="mx-auto mb-2 text-green-500" />
                <span >pH Level</span>
                <p className="font-semibold ">6.5</p>
              </div>
              <div className="text-center  p-3 rounded-lg" style={{backgroundColor:'#D0F0C0'}}>
                <Leaf size={24} className="mx-auto mb-2 text-green-500" />
                <span >Organic Matter</span>
                <p className="font-semibold ">3.2%</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-green-800  font-serif" >Recommendations</h2>
            <ul className="list-disc list-inside space-y-2 text-green-700">
              <li>Apply nitrogen-rich fertilizer</li>
              <li>Increase irrigation frequency</li>
              <li>Monitor pH levels closely</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}