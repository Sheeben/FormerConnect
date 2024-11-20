import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomeDashboard from './components/HomeDashboard';
import UserDashboard from './components/UserDashboard';
import SoilHealthDetail from './components/SoilHealthDetail';
import ActivityLog from './components/ActivityLog';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    // This is a mock authentication. In a real app, you'd validate against a backend.
    if (email && password) {
      setIsAuthenticated(true);
      setUser({ email, name: 'John Doe' }); // Mock user data
      navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" replace /> : 
            <LoginPage onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <UserDashboard user={user} onLogout={handleLogout} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <HomeDashboard onLogout={handleLogout} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/soil-health" 
          element={
            <ProtectedRoute>
              <SoilHealthDetail onLogout={handleLogout} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/activity-log" 
          element={
            <ProtectedRoute>
              <ActivityLog onLogout={handleLogout} />
            </ProtectedRoute>
          } 
        />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}

export default App;