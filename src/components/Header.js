import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
export default function Header({
  currentPage,
  onNavigate
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    page: 'home'
  }, {
    name: 'Services',
    page: 'services'
  }, {
    name: 'Case Studies',
    page: 'case-studies'
  }, {
    name: 'About',
    page: 'about'
  }, {
    name: 'Pricing',
    page: 'pricing'
  }, {
    name: 'Blog',
    page: 'blog'
  }, {
    name: 'Contact',
    page: 'contact'
  }];
  return /*#__PURE__*/React.createElement(motion.header, {
    initial: {
      y: -100
    },
    animate: {
      y: 0
    },
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between h-16"
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      delay: 0.1
    },
    className: "flex items-center cursor-pointer",
    onClick: () => onNavigate('home')
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(motion.div, {
    animate: {
      rotate: [0, 360]
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    },
    className: "w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-teal-400 to-purple-600 mr-3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-teal-400 to-purple-600 mr-3 opacity-50 animate-pulse"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent"
  }, "Codezyra")), /*#__PURE__*/React.createElement("nav", {
    className: "hidden lg:flex items-center space-x-8"
  }, navItems.map((item, index) => /*#__PURE__*/React.createElement(motion.button, {
    key: item.page,
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.1 + index * 0.05
    },
    onClick: () => onNavigate(item.page),
    className: `relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-purple-400 ${currentPage === item.page ? 'text-purple-400' : 'text-gray-300'}`
  }, item.name, currentPage === item.page && /*#__PURE__*/React.createElement(motion.div, {
    layoutId: "activeNavItem",
    className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-teal-400"
  })))), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: 20
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      delay: 0.2
    },
    className: "hidden lg:block"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('contact'),
    className: "bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
  }, "Get Free Strategy Call")), /*#__PURE__*/React.createElement(motion.button, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      delay: 0.2
    },
    className: "lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors",
    onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen)
  }, isMobileMenuOpen ? /*#__PURE__*/React.createElement(X, {
    className: "w-6 h-6"
  }) : /*#__PURE__*/React.createElement(Menu, {
    className: "w-6 h-6"
  })))), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      height: 0
    },
    animate: {
      opacity: isMobileMenuOpen ? 1 : 0,
      height: isMobileMenuOpen ? 'auto' : 0
    },
    transition: {
      duration: 0.3
    },
    className: "lg:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-800 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-4 space-y-3"
  }, navItems.map((item, index) => /*#__PURE__*/React.createElement(motion.button, {
    key: item.page,
    initial: {
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: isMobileMenuOpen ? 1 : 0,
      x: isMobileMenuOpen ? 0 : -20
    },
    transition: {
      delay: isMobileMenuOpen ? index * 0.05 : 0
    },
    onClick: () => {
      onNavigate(item.page);
      setIsMobileMenuOpen(false);
    },
    className: `block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${currentPage === item.page ? 'bg-gradient-to-r from-purple-600/20 to-teal-500/20 text-purple-400 border border-purple-500/30' : 'text-gray-300 hover:bg-slate-800 hover:text-white'}`
  }, item.name)), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: isMobileMenuOpen ? 1 : 0,
      x: isMobileMenuOpen ? 0 : -20
    },
    transition: {
      delay: isMobileMenuOpen ? navItems.length * 0.05 : 0
    },
    className: "pt-4 border-t border-slate-800"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => {
      onNavigate('contact');
      setIsMobileMenuOpen(false);
    },
    className: "w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white py-3 rounded-lg font-medium transition-all duration-300"
  }, "Get Free Strategy Call")))));
}