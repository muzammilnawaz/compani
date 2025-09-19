import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

type Page = 'home' | 'services' | 'case-studies' | 'about' | 'pricing' | 'blog' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-white">Codezyra</h2>
          <p className="text-gray-400">Loading...</p>
        </motion.div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <CaseStudies />
            <About />
          </>
        );
      case 'services':
        return <Services detailed={true} />;
      case 'case-studies':
        return <CaseStudies detailed={true} />;
      case 'about':
        return <About detailed={true} />;
      case 'pricing':
        return <Pricing />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <CaseStudies />
            <About />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* SEO Meta Tags */}
      <Head />
      
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      
      <Footer currentPage={currentPage} onNavigate={handleNavigation} />
    </div>
  );
}

// SEO Component
function Head() {
  useEffect(() => {
    // Set document title and meta tags
    document.title = "Codezyra - Digital Marketing Agency That Delivers Growth";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Codezyra is a leading digital marketing agency specializing in SEO, PPC, social media marketing, and web development. Get measurable results for your business.');
    if (!document.head.contains(metaDescription)) {
      document.head.appendChild(metaDescription);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'digital marketing agency, SEO agency, PPC services, social media marketing, web development agency, conversion rate optimization');
    if (!document.head.contains(metaKeywords)) {
      document.head.appendChild(metaKeywords);
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Codezyra - Digital Marketing That Delivers Growth');
    if (!document.head.contains(ogTitle)) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'We help brands grow with SEO, PPC, social media, and data-driven strategies. Get your free strategy call today.');
    if (!document.head.contains(ogDescription)) {
      document.head.appendChild(ogDescription);
    }

    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.head.contains(ogType)) {
      document.head.appendChild(ogType);
    }

    // JSON-LD Schema
    const script = document.querySelector('script[type="application/ld+json"]') || document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Codezyra",
      "description": "Digital Marketing Agency specializing in SEO, PPC, Social Media Marketing, and Web Development",
      "url": "https://codezyra.com",
      "logo": "https://codezyra.com/logo.png",
      "sameAs": [
        "https://facebook.com/codezyra",
        "https://twitter.com/codezyra",
        "https://linkedin.com/company/codezyra",
        "https://instagram.com/codezyra"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Business Ave",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      },
      "service": [
        {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search Engine Optimization to improve your website's visibility"
        },
        {
          "@type": "Service", 
          "name": "PPC Management",
          "description": "Pay-per-click advertising management for Google Ads and social media"
        },
        {
          "@type": "Service",
          "name": "Social Media Marketing", 
          "description": "Social media strategy and management across all platforms"
        },
        {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom website development and design services"
        }
      ]
    });
    if (!document.head.contains(script)) {
      document.head.appendChild(script);
    }
  }, []);

  return null;
}