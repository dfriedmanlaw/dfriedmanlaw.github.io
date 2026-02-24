import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import PracticePage from './pages/PracticePage';
import ResourcePage from './pages/ResourcePage';
import IntakePage from './pages/IntakePage';
import LegalPage from './pages/LegalPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
        <div className="min-h-screen bg-tech-bg text-tech-text font-sans selection:bg-tech-primary selection:text-white flex flex-col">
            <Routes>
                {/* Default to Placeholder for now (No Nav/Footer) */}
                <Route path="/" element={<PlaceholderPage />} />
                <Route path="/intake" element={<IntakePage />} />
                
                {/* Main Site Layout */}
                <Route element={<MainLayout />}>
                    <Route path="/home-draft" element={<Home />} />
                    <Route path="/practice/:id" element={<PracticePage />} />
                    <Route path="/resource/:slug" element={<ResourcePage />} />
                    <Route path="/legal" element={<LegalPage />} />
                    
                    {/* Fallback route */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
