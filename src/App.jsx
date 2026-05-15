import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Team = lazy(() => import('./pages/Team'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service Detail Pages
const AIMachineLearning = lazy(() => import('./pages/AIMachineLearning'));
const DataAnalytics = lazy(() => import('./pages/DataAnalytics'));
const SaasProducts = lazy(() => import('./pages/SaasProducts'));
const SoftwareSolutions = lazy(() => import('./pages/SoftwareSolutions'));
const Ecommerce = lazy(() => import('./pages/Ecommerce'));
const UiUx = lazy(() => import('./pages/UiUx'));
const MobileApps = lazy(() => import('./pages/MobileApps'));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'));
const QaTesting = lazy(() => import('./pages/QaTesting'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));

const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-dark">
    <div className="w-16 h-16 border-4 border-gray-800 border-t-white rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-light flex flex-col font-sans text-gray-800">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/services/ai-machine-learning" element={<AIMachineLearning />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/saas-products" element={<SaasProducts />} />
                <Route path="/services/software-solutions" element={<SoftwareSolutions />} />
                <Route path="/services/ecommerce" element={<Ecommerce />} />
                <Route path="/services/ui-ux" element={<UiUx />} />
                <Route path="/services/mobile-apps" element={<MobileApps />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/qa-testing" element={<QaTesting />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
