import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, MousePointer, Share2, FileText, Mail, Code, Palette, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
export default function Services({
  detailed = false
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const services = [{
    icon: Search,
    title: 'SEO (Search Engine Optimization)',
    shortDesc: 'Boost your organic visibility and drive qualified traffic',
    longDesc: 'Our comprehensive SEO strategies help your business rank higher in search engine results, driving organic traffic and increasing brand visibility through keyword research, on-page optimization, technical SEO, and link building.',
    features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Audits', 'Link Building', 'Local SEO', 'SEO Analytics & Reporting'],
    color: 'purple',
    gradient: 'from-purple-500 to-purple-700',
    bgGradient: 'from-purple-500/20 to-purple-600/20'
  }, {
    icon: MousePointer,
    title: 'PPC (Google Ads, Paid Marketing)',
    shortDesc: 'Maximize ROI with targeted paid advertising campaigns',
    longDesc: 'Drive immediate, qualified traffic to your website with our data-driven PPC campaigns across Google Ads, Facebook, LinkedIn, and other platforms. We optimize for maximum ROI and conversion rates.',
    features: ['Google Ads Management', 'Facebook & Instagram Ads', 'LinkedIn Advertising', 'Campaign Optimization', 'A/B Testing', 'Conversion Tracking'],
    color: 'teal',
    gradient: 'from-teal-500 to-teal-700',
    bgGradient: 'from-teal-500/20 to-teal-600/20'
  }, {
    icon: Share2,
    title: 'Social Media Marketing',
    shortDesc: 'Build engaging communities and drive brand awareness',
    longDesc: 'Create compelling social media strategies that engage your audience, build brand loyalty, and drive conversions across all major social platforms including Facebook, Instagram, Twitter, LinkedIn, and TikTok.',
    features: ['Content Strategy & Creation', 'Community Management', 'Social Media Advertising', 'Influencer Partnerships', 'Analytics & Reporting', 'Brand Monitoring'],
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/20 to-pink-500/20'
  }, {
    icon: FileText,
    title: 'Content Marketing',
    shortDesc: 'Create valuable content that converts prospects into customers',
    longDesc: 'Develop and execute content strategies that attract, engage, and convert your target audience through blog posts, videos, infographics, whitepapers, and other content formats.',
    features: ['Content Strategy Development', 'Blog Writing & Management', 'Video Content Creation', 'Infographic Design', 'Email Newsletters', 'Content Distribution'],
    color: 'teal',
    gradient: 'from-teal-500 to-cyan-500',
    bgGradient: 'from-teal-500/20 to-cyan-500/20'
  }, {
    icon: Mail,
    title: 'Email Marketing',
    shortDesc: 'Nurture leads and drive sales with targeted email campaigns',
    longDesc: 'Build relationships and drive conversions with personalized email marketing campaigns, automated workflows, and targeted messaging that resonates with your audience.',
    features: ['Email Campaign Design', 'Marketing Automation', 'List Segmentation', 'A/B Testing', 'Performance Analytics', 'CRM Integration'],
    color: 'purple',
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-500/20 to-violet-500/20'
  }, {
    icon: Code,
    title: 'Web Development',
    shortDesc: 'Build fast, responsive websites that convert visitors',
    longDesc: 'Create modern, responsive websites and web applications that provide exceptional user experiences, load quickly, and are optimized for search engines and conversions.',
    features: ['Responsive Web Design', 'E-commerce Development', 'CMS Implementation', 'Performance Optimization', 'Mobile App Development', 'Maintenance & Support'],
    color: 'teal',
    gradient: 'from-teal-500 to-blue-500',
    bgGradient: 'from-teal-500/20 to-blue-500/20'
  }, {
    icon: Palette,
    title: 'UI/UX Design',
    shortDesc: 'Design intuitive experiences that delight users',
    longDesc: 'Create user-centered designs that not only look beautiful but also provide intuitive, engaging experiences that guide users toward conversion and build brand loyalty.',
    features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing', 'Design Systems', 'Mobile-First Design'],
    color: 'purple',
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-500/20 to-indigo-500/20'
  }, {
    icon: TrendingUp,
    title: 'Conversion Rate Optimization (CRO)',
    shortDesc: 'Optimize your website to convert more visitors into customers',
    longDesc: 'Increase your website\'s conversion rates through data-driven testing, user behavior analysis, and strategic optimizations that turn more visitors into paying customers.',
    features: ['Conversion Audits', 'A/B Testing', 'User Behavior Analysis', 'Landing Page Optimization', 'Funnel Optimization', 'ROI Tracking'],
    color: 'teal',
    gradient: 'from-teal-500 to-green-500',
    bgGradient: 'from-teal-500/20 to-green-500/20'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };
  if (detailed) {
    return /*#__PURE__*/React.createElement("section", {
      className: "py-20 px-4 sm:px-6 lg:px-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto"
    }, /*#__PURE__*/React.createElement(motion.div, {
      initial: {
        opacity: 0,
        y: 30
      },
      animate: {
        opacity: 1,
        y: 0
      },
      transition: {
        duration: 0.8
      },
      className: "text-center mb-16"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-4xl lg:text-6xl font-bold mb-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
    }, "Our Services")), /*#__PURE__*/React.createElement("p", {
      className: "text-xl text-gray-300 max-w-3xl mx-auto"
    }, "Comprehensive digital marketing solutions designed to accelerate your business growth and maximize your online presence.")), /*#__PURE__*/React.createElement(motion.div, {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "grid grid-cols-1 lg:grid-cols-2 gap-8"
    }, services.map((service, index) => {
      const Icon = service.icon;
      return /*#__PURE__*/React.createElement(motion.div, {
        key: index,
        variants: cardVariants
      }, /*#__PURE__*/React.createElement(Card, {
        className: "h-full bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
      }, /*#__PURE__*/React.createElement(CardHeader, {
        className: "pb-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`
      }, /*#__PURE__*/React.createElement(Icon, {
        className: `w-8 h-8 text-${service.color}-400`
      })), /*#__PURE__*/React.createElement(CardTitle, {
        className: "text-2xl text-white group-hover:text-purple-400 transition-colors"
      }, service.title), /*#__PURE__*/React.createElement(CardDescription, {
        className: "text-gray-300 text-base"
      }, service.longDesc)), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement("div", {
        className: "space-y-3"
      }, /*#__PURE__*/React.createElement("h4", {
        className: "font-semibold text-white mb-3"
      }, "Key Features:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-2"
      }, service.features.map((feature, featureIndex) => /*#__PURE__*/React.createElement("li", {
        key: featureIndex,
        className: "flex items-start text-gray-300"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0"
      }), feature))), /*#__PURE__*/React.createElement(Button, {
        className: `w-full mt-6 bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-all duration-300`
      }, "Learn More", /*#__PURE__*/React.createElement(ArrowRight, {
        className: "ml-2 w-4 h-4"
      }))))));
    }))));
  }
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    className: "py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0"
  }, /*#__PURE__*/React.createElement(motion.div, {
    animate: {
      x: [0, 100, 0],
      y: [0, -50, 0],
      rotate: [0, 180, 360]
    },
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    },
    className: "absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 30
    },
    transition: {
      duration: 0.8
    },
    className: "text-center mb-16"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl lg:text-5xl font-bold mb-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
  }, "Our Services")), /*#__PURE__*/React.createElement("p", {
    className: "text-xl text-gray-300 max-w-3xl mx-auto"
  }, "Comprehensive digital marketing solutions designed to accelerate your business growth")), /*#__PURE__*/React.createElement(motion.div, {
    variants: containerVariants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  }, services.map((service, index) => {
    const Icon = service.icon;
    return /*#__PURE__*/React.createElement(motion.div, {
      key: index,
      variants: cardVariants,
      whileHover: {
        y: -10,
        scale: 1.02
      },
      className: "group"
    }, /*#__PURE__*/React.createElement(Card, {
      className: "h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
    }, /*#__PURE__*/React.createElement(CardHeader, {
      className: "text-center pb-4"
    }, /*#__PURE__*/React.createElement(motion.div, {
      whileHover: {
        rotate: 360
      },
      transition: {
        duration: 0.6
      },
      className: `w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-4`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: `w-8 h-8 text-${service.color}-400`
    })), /*#__PURE__*/React.createElement(CardTitle, {
      className: "text-xl text-white group-hover:text-purple-400 transition-colors"
    }, service.title), /*#__PURE__*/React.createElement(CardDescription, {
      className: "text-gray-300"
    }, service.shortDesc)), /*#__PURE__*/React.createElement(CardContent, {
      className: "pt-0"
    }, /*#__PURE__*/React.createElement(motion.div, {
      initial: {
        opacity: 0
      },
      whileHover: {
        opacity: 1
      },
      className: "flex items-center justify-center text-purple-400 group-hover:text-teal-400 transition-colors"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sm font-medium"
    }, "Learn More"), /*#__PURE__*/React.createElement(ArrowRight, {
      className: "ml-2 w-4 h-4"
    })))));
  })), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 30
    },
    transition: {
      duration: 0.8,
      delay: 0.6
    },
    className: "text-center mt-16"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
  }, "View All Services", /*#__PURE__*/React.createElement(ArrowRight, {
    className: "ml-2 w-5 h-5"
  })))));
}