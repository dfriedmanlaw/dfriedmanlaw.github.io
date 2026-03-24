import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PracticePage from './pages/PracticePage';
import ResourcePage from './pages/ResourcePage';
import IntakePage from './pages/IntakePage';
import LegalPage from './pages/LegalPage';
import LibraryPage from './pages/LibraryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
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
                {/* Main Site Layout */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/practice/:id" element={<PracticePage />} />
                    <Route path="/resource/:slug" element={<ResourcePage />} />
                    <Route path="/library" element={<LibraryPage />} />
                    <Route path="/legal" element={<LegalPage />} />
                    <Route path="/intake" element={<IntakePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    
                    {/* Fallback route */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
