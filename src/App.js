import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

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
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const handleNavigation = page => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-slate-900 flex items-center justify-center"
    }, /*#__PURE__*/React.createElement(motion.div, {
      initial: {
        opacity: 0,
        scale: 0.8
      },
      animate: {
        opacity: 1,
        scale: 1
      },
      transition: {
        duration: 0.6
      },
      className: "text-center"
    }, /*#__PURE__*/React.createElement(motion.div, {
      animate: {
        rotate: 360
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      },
      className: "w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
    }), /*#__PURE__*/React.createElement("h2", {
      className: "text-2xl font-bold text-white"
    }, "Codezyra"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-400"
    }, "Loading...")));
  }
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(CaseStudies, null), /*#__PURE__*/React.createElement(About, null));
      case 'services':
        return /*#__PURE__*/React.createElement(Services, {
          detailed: true
        });
      case 'case-studies':
        return /*#__PURE__*/React.createElement(CaseStudies, {
          detailed: true
        });
      case 'about':
        return /*#__PURE__*/React.createElement(About, {
          detailed: true
        });
      case 'pricing':
        return /*#__PURE__*/React.createElement(Pricing, null);
      case 'blog':
        return /*#__PURE__*/React.createElement(Blog, null);
      case 'contact':
        return /*#__PURE__*/React.createElement(Contact, null);
      default:
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(CaseStudies, null), /*#__PURE__*/React.createElement(About, null));
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-slate-900 text-white overflow-x-hidden"
  }, /*#__PURE__*/React.createElement(Head, null), /*#__PURE__*/React.createElement(Header, {
    currentPage: currentPage,
    onNavigate: handleNavigation
  }), /*#__PURE__*/React.createElement(AnimatePresence, {
    mode: "wait"
  }, /*#__PURE__*/React.createElement(motion.main, {
    key: currentPage,
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    },
    transition: {
      duration: 0.4
    }
  }, renderPage())), /*#__PURE__*/React.createElement(Footer, {
    currentPage: currentPage,
    onNavigate: handleNavigation
  }));
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
      "sameAs": ["https://facebook.com/codezyra", "https://twitter.com/codezyra", "https://linkedin.com/company/codezyra", "https://instagram.com/codezyra"],
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
      "service": [{
        "@type": "Service",
        "name": "SEO Services",
        "description": "Search Engine Optimization to improve your website's visibility"
      }, {
        "@type": "Service",
        "name": "PPC Management",
        "description": "Pay-per-click advertising management for Google Ads and social media"
      }, {
        "@type": "Service",
        "name": "Social Media Marketing",
        "description": "Social media strategy and management across all platforms"
      }, {
        "@type": "Service",
        "name": "Web Development",
        "description": "Custom website development and design services"
      }]
    });
    if (!document.head.contains(script)) {
      document.head.appendChild(script);
    }
  }, []);
  return null;
}