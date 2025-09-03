import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import History from './pages/History';
import Quiz from './pages/Quiz';
import TeacherShowcase from './pages/TeacherShowcase';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/teachers" element={<TeacherShowcase />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;