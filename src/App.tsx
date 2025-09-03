import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Quiz from './pages/Quiz';
import TeacherShowcase from './pages/TeacherShowcase';

// Debug component to log route changes
const RouteLogger = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log('🌐 Route changed to:', location.pathname);
    console.log('📍 Current URL:', window.location.href);
  }, [location]);
  
  return null;
};

function App() {
  useEffect(() => {
    console.log('🚀 App component mounted');
    console.log('🏠 Initial route should be: /');
  }, []);

  return (
    <Router>
      <RouteLogger />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/history" element={<History />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/teachers" element={<TeacherShowcase />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;