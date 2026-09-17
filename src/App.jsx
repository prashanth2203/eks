import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AiHealthcarePage from './pages/AiHealthcarePage';
import MiningPage from './pages/MiningPage';
import EnterprisePlatformsPage from './pages/EnterprisePlatformsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/enterprise-platforms" element={<EnterprisePlatformsPage />} />
          <Route path="/services/enterprise-platforms" element={<Navigate to="/enterprise-platforms" replace />} />
          <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/mining" element={<MiningPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Aliases & Fallbacks */}
          <Route path="/web-services" element={<Navigate to="/services" replace />} />
          <Route path="/solutions" element={<Navigate to="/services" replace />} />
          <Route path="/enquiry" element={<Navigate to="/contact" replace />} />
          <Route path="/downloads" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
