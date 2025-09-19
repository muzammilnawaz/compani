import React from 'react';
import { motion } from 'motion/react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

type Page = 'home' | 'services' | 'case-studies' | 'about' | 'pricing' | 'blog' | 'contact';

interface FooterProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Footer({ currentPage, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', page: 'home' as Page },
    { name: 'Services', page: 'services' as Page },
    { name: 'Case Studies', page: 'case-studies' as Page },
    { name: 'About Us', page: 'about' as Page },
    { name: 'Pricing', page: 'pricing' as Page },
    { name: 'Blog', page: 'blog' as Page },
    { name: 'Contact', page: 'contact' as Page },
  ];

  const services = [
    'SEO Optimization',
    'PPC Management',
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing',
    'Web Development',
    'UI/UX Design',
    'Conversion Optimization'
  ];

  const resources = [
    'Digital Marketing Guide',
    'SEO Checklist',
    'PPC Calculator',
    'Social Media Templates',
    'Content Calendar',
    'Analytics Dashboard',
    'ROI Calculator',
    'Free Consultation'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Data Protection',
    'Refund Policy',
    'Disclaimer'
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/codezyra', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com/codezyra', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com/codezyra', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: 'https://linkedin.com/company/codezyra', color: 'hover:text-blue-500' },
    { icon: Youtube, href: 'https://youtube.com/codezyra', color: 'hover:text-red-400' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: Mail,
      text: 'hello@codezyra.com',
      href: 'mailto:hello@codezyra.com'
    },
    {
      icon: MapPin,
      text: '123 Business Ave, New York, NY 10001',
      href: 'https://maps.google.com'
    }
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-teal-500/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-40 left-16 w-24 h-24 bg-gradient-to-br from-teal-500/5 to-purple-500/5 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 border-b border-slate-800"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Ahead of the Digital Curve
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get exclusive digital marketing insights, industry trends, and growth strategies delivered to your inbox.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-2 font-semibold whitespace-nowrap">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-sm text-gray-400 text-center mt-4">
            Join 10,000+ marketers. No spam, unsubscribe anytime.
          </p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-teal-400 to-purple-600 mr-3"
                  />
                  <div className="absolute inset-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-teal-400 to-purple-600 mr-3 opacity-50 animate-pulse" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
                  Codezyra
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're a passionate team of digital marketing experts dedicated to helping businesses achieve extraordinary growth through innovative strategies and cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors group"
                    >
                      <Icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-teal-400 transition-colors" />
                      {info.text}
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-teal-500/20 border border-slate-700 hover:border-purple-500/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.page}>
                    <motion.button
                      onClick={() => onNavigate(link.page)}
                      whileHover={{ x: 5 }}
                      className={`text-gray-300 hover:text-purple-400 transition-colors ${
                        currentPage === link.page ? 'text-purple-400' : ''
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => onNavigate('services')}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-teal-400 transition-colors"
                    >
                      {service}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      {resource}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-slate-800" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400"
            >
              <span>© {currentYear} Codezyra. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2"
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>in New York</span>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-6"
            >
              {legalLinks.map((link, index) => (
                <React.Fragment key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ y: -1 }}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </motion.a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="mr-2 w-4 h-4" />
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}