import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDashboard from './components/HomeDashboard';
import SoilHealthDetail from './components/SoilHealthDetail';
import ActivityLog from './components/ActivityLog';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/soil-health" element={<SoilHealthDetail />} />
          <Route path="/activity-log" element={<ActivityLog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

