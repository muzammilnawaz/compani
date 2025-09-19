import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Target, Award, Zap, Heart, Globe, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
export default function About({
  detailed = false
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const values = [{
    icon: Target,
    title: 'Results-Driven',
    description: 'Every strategy we implement is designed to deliver measurable results and ROI.',
    color: 'purple'
  }, {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our success. We build long-term partnerships, not just projects.',
    color: 'teal'
  }, {
    icon: Zap,
    title: 'Innovation First',
    description: 'We stay ahead of digital trends to give your business a competitive edge.',
    color: 'purple'
  }, {
    icon: Shield,
    title: 'Transparency',
    description: 'Clear communication, honest reporting, and no hidden fees or surprises.',
    color: 'teal'
  }];
  const stats = [{
    icon: Users,
    number: '500+',
    label: 'Clients Served',
    color: 'purple'
  }, {
    icon: Globe,
    number: '50+',
    label: 'Countries Reached',
    color: 'teal'
  }, {
    icon: Award,
    number: '15+',
    label: 'Industry Awards',
    color: 'purple'
  }, {
    icon: TrendingUp,
    number: '250%',
    label: 'Average Growth',
    color: 'teal'
  }];
  const team = [{
    name: 'Alex Chen',
    position: 'CEO & Founder',
    bio: '10+ years in digital marketing, former Google strategist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  }, {
    name: 'Sarah Rodriguez',
    position: 'Head of Strategy',
    bio: 'Expert in data-driven marketing with MBA from Stanford',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face'
  }, {
    name: 'Michael Kim',
    position: 'Technical Director',
    bio: 'Full-stack developer specializing in marketing technology',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  }, {
    name: 'Emma Thompson',
    position: 'Creative Director',
    bio: 'Award-winning designer with focus on conversion optimization',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
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
  const itemVariants = {
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
    }, "About Codezyra")), /*#__PURE__*/React.createElement("p", {
      className: "text-xl text-gray-300 max-w-3xl mx-auto"
    }, "We're a team of passionate digital marketing experts dedicated to helping businesses achieve extraordinary growth through innovative strategies and cutting-edge technology.")), /*#__PURE__*/React.createElement(motion.div, {
      initial: {
        opacity: 0,
        y: 30
      },
      animate: {
        opacity: 1,
        y: 0
      },
      transition: {
        duration: 0.8,
        delay: 0.2
      },
      className: "mb-20"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      className: "text-3xl font-bold text-white mb-6"
    }, "Our Story"), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-300 mb-6 leading-relaxed"
    }, "Founded in 2018, Codezyra began with a simple mission: to democratize digital marketing success for businesses of all sizes. What started as a small team of marketing enthusiasts has grown into a full-service digital agency serving clients across 50+ countries."), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-300 mb-6 leading-relaxed"
    }, "We believe that every business deserves access to world-class digital marketing strategies, regardless of their size or budget. That's why we've built our processes around transparency, results, and long-term partnerships."), /*#__PURE__*/React.createElement("p", {
      className: "text-gray-300 leading-relaxed"
    }, "Today, we're proud to have helped over 500 businesses achieve an average growth rate of 250%, with many of our clients becoming industry leaders in their respective markets.")), /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement(motion.div, {
      animate: {
        rotate: [0, 5, 0, -5, 0]
      },
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      },
      className: "relative z-10"
    }, /*#__PURE__*/React.createElement(ImageWithFallback, {
      src: "https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTgwNTQxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Codezyra team working",
      className: "rounded-2xl shadow-2xl"
    })), /*#__PURE__*/React.createElement(motion.div, {
      animate: {
        rotate: [0, -3, 0, 3, 0]
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      },
      className: "absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-2xl blur-xl"
    })))), /*#__PURE__*/React.createElement(motion.div, {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "mb-20"
    }, /*#__PURE__*/React.createElement(motion.h2, {
      variants: itemVariants,
      className: "text-3xl font-bold text-center text-white mb-12"
    }, "Our Core Values"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    }, values.map((value, index) => {
      const Icon = value.icon;
      return /*#__PURE__*/React.createElement(motion.div, {
        key: index,
        variants: itemVariants
      }, /*#__PURE__*/React.createElement(Card, {
        className: "h-full bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-center group"
      }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement("div", {
        className: `w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${value.color === 'purple' ? 'from-purple-500/20 to-purple-600/20' : 'from-teal-500/20 to-teal-600/20'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`
      }, /*#__PURE__*/React.createElement(Icon, {
        className: `w-8 h-8 ${value.color === 'purple' ? 'text-purple-400' : 'text-teal-400'}`
      })), /*#__PURE__*/React.createElement(CardTitle, {
        className: "text-white group-hover:text-purple-400 transition-colors"
      }, value.title)), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(CardDescription, {
        className: "text-gray-300"
      }, value.description))));
    }))), /*#__PURE__*/React.createElement(motion.div, {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "mb-20"
    }, /*#__PURE__*/React.createElement(motion.h2, {
      variants: itemVariants,
      className: "text-3xl font-bold text-center text-white mb-12"
    }, "Meet Our Team"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    }, team.map((member, index) => /*#__PURE__*/React.createElement(motion.div, {
      key: index,
      variants: itemVariants,
      whileHover: {
        y: -10
      },
      className: "group"
    }, /*#__PURE__*/React.createElement(Card, {
      className: "bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative"
    }, /*#__PURE__*/React.createElement(ImageWithFallback, {
      src: member.image,
      alt: member.name,
      className: "w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    })), /*#__PURE__*/React.createElement(CardHeader, {
      className: "text-center"
    }, /*#__PURE__*/React.createElement(CardTitle, {
      className: "text-white group-hover:text-purple-400 transition-colors"
    }, member.name), /*#__PURE__*/React.createElement(CardDescription, {
      className: "text-teal-400 font-medium"
    }, member.position)), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement("p", {
      className: "text-gray-300 text-sm text-center"
    }, member.bio))))))), /*#__PURE__*/React.createElement(motion.div, {
      variants: containerVariants,
      initial: "hidden",
      animate: "visible",
      className: "grid grid-cols-2 lg:grid-cols-4 gap-8"
    }, stats.map((stat, index) => {
      const Icon = stat.icon;
      return /*#__PURE__*/React.createElement(motion.div, {
        key: index,
        variants: itemVariants,
        className: "text-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: `w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.color === 'purple' ? 'from-purple-500/20 to-purple-600/20' : 'from-teal-500/20 to-teal-600/20'} flex items-center justify-center mb-4`
      }, /*#__PURE__*/React.createElement(Icon, {
        className: `w-10 h-10 ${stat.color === 'purple' ? 'text-purple-400' : 'text-teal-400'}`
      })), /*#__PURE__*/React.createElement("div", {
        className: `text-4xl font-bold mb-2 ${stat.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent' : 'bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent'}`
      }, stat.number), /*#__PURE__*/React.createElement("div", {
        className: "text-gray-400"
      }, stat.label));
    }))));
  }
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    className: "py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0"
  }, /*#__PURE__*/React.createElement(motion.div, {
    animate: {
      x: [0, 50, 0],
      y: [0, -30, 0],
      rotate: [0, 90, 180]
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    },
    className: "absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-lg"
  })), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: containerVariants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    className: "text-center mb-16"
  }, /*#__PURE__*/React.createElement(motion.h2, {
    variants: itemVariants,
    className: "text-4xl lg:text-5xl font-bold mb-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
  }, "About Codezyra")), /*#__PURE__*/React.createElement(motion.p, {
    variants: itemVariants,
    className: "text-xl text-gray-300 max-w-3xl mx-auto"
  }, "We're passionate digital marketing experts dedicated to helping your business achieve extraordinary growth.")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-3xl font-bold text-white mb-6"
  }, "Why Choose Codezyra?"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 mb-6 leading-relaxed"
  }, "With over 500 successful projects and clients across 50+ countries, we've proven that data-driven strategies combined with creative innovation deliver exceptional results."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 mb-8 leading-relaxed"
  }, "Our team of certified experts stays ahead of industry trends to ensure your business always has a competitive edge in the digital landscape."), /*#__PURE__*/React.createElement(Button, {
    className: "bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
  }, "Learn More About Us")), /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    className: "grid grid-cols-2 gap-6"
  }, stats.map((stat, index) => {
    const Icon = stat.icon;
    return /*#__PURE__*/React.createElement(motion.div, {
      key: index,
      whileHover: {
        scale: 1.05
      },
      className: `text-center p-6 rounded-2xl bg-gradient-to-br ${stat.color === 'purple' ? 'from-purple-500/20 to-purple-600/20 border border-purple-500/30' : 'from-teal-500/20 to-teal-600/20 border border-teal-500/30'} backdrop-blur-sm`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: `w-8 h-8 mx-auto mb-3 ${stat.color === 'purple' ? 'text-purple-400' : 'text-teal-400'}`
    }), /*#__PURE__*/React.createElement("div", {
      className: `text-2xl lg:text-3xl font-bold mb-1 ${stat.color === 'purple' ? 'text-purple-400' : 'text-teal-400'}`
    }, stat.number), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-gray-400"
    }, stat.label));
  }))), /*#__PURE__*/React.createElement(motion.div, {
    variants: containerVariants,
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
  }, values.map((value, index) => {
    const Icon = value.icon;
    return /*#__PURE__*/React.createElement(motion.div, {
      key: index,
      variants: itemVariants,
      whileHover: {
        y: -5
      }
    }, /*#__PURE__*/React.createElement(Card, {
      className: "h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-center group cursor-pointer"
    }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement("div", {
      className: `w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${value.color === 'purple' ? 'from-purple-500/20 to-purple-600/20' : 'from-teal-500/20 to-teal-600/20'} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: `w-6 h-6 ${value.color === 'purple' ? 'text-purple-400' : 'text-teal-400'}`
    })), /*#__PURE__*/React.createElement(CardTitle, {
      className: "text-lg text-white group-hover:text-purple-400 transition-colors"
    }, value.title)), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(CardDescription, {
      className: "text-gray-300 text-sm"
    }, value.description))));
  }))));
}