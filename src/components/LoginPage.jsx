import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

export default function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(email, password)
    navigate('/dashboard')
  }

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-100 min-h-screen flex items-center justify-center p-4" >
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className=" px-6 py-8 text-white" style={{ backgroundColor:'#9ACD32'}}>
          <h1 className="text-3xl font-bold font-serif text-center">FarmConnect</h1>
          <p className="text-center mt-2">Login to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 pl-10"
                placeholder="Enter your email"
                required
                autoComplete="username"
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 pl-10 pr-10"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" style={{ backgroundColor:'#9ACD32'}}>
              Sign in
            </button>
          </div>
        </form>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}