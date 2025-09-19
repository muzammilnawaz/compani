import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star, Zap, Crown, ArrowRight, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses getting started with digital marketing',
      monthlyPrice: 997,
      annualPrice: 897,
      popular: false,
      features: [
        'SEO Audit & Basic Optimization',
        'Google My Business Setup',
        'Social Media Profile Setup (3 platforms)',
        'Monthly Performance Report',
        'Email Support',
        'Basic Website Analysis',
        '1 Landing Page Optimization',
        'Keyword Research (Up to 20 keywords)'
      ],
      notIncluded: [
        'PPC Campaign Management',
        'Content Creation',
        'Advanced Analytics',
        'Priority Support'
      ],
      color: 'teal',
      gradient: 'from-teal-500 to-teal-700',
      bgGradient: 'from-teal-500/20 to-teal-600/20'
    },
    {
      name: 'Professional',
      icon: Star,
      description: 'Comprehensive digital marketing for growing businesses',
      monthlyPrice: 2497,
      annualPrice: 2247,
      popular: true,
      features: [
        'Everything in Starter',
        'PPC Campaign Management (Google Ads)',
        'Social Media Marketing (5 platforms)',
        'Content Creation (8 posts/month)',
        'Email Marketing Setup & Management',
        'Conversion Rate Optimization',
        'Weekly Performance Reports',
        'Phone & Email Support',
        'Landing Page Creation (3 pages)',
        'Advanced Keyword Research (50+ keywords)',
        'Competitor Analysis',
        'Google Analytics Setup & Monitoring'
      ],
      notIncluded: [
        'Dedicated Account Manager',
        'Custom Development',
        'Advanced Integrations'
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700',
      bgGradient: 'from-purple-500/20 to-purple-600/20'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'Full-service digital marketing for established businesses',
      monthlyPrice: 4997,
      annualPrice: 4497,
      popular: false,
      features: [
        'Everything in Professional',
        'Dedicated Account Manager',
        'Custom Website Development',
        'Advanced PPC Management (Multi-platform)',
        'Content Strategy & Creation (20+ posts/month)',
        'Marketing Automation Setup',
        'Advanced Analytics & Reporting',
        'Priority Support (24/7)',
        'Unlimited Landing Pages',
        'Comprehensive SEO (Technical + Content)',
        'Brand Strategy Consultation',
        'Custom Integrations',
        'Quarterly Strategy Reviews',
        'Performance Marketing Optimization'
      ],
      notIncluded: [],
      color: 'purple',
      gradient: 'from-purple-500 via-teal-500 to-purple-600',
      bgGradient: 'from-purple-500/20 via-teal-500/20 to-purple-600/20'
    }
  ];

  const addOns = [
    {
      name: 'Additional Landing Pages',
      price: 497,
      description: 'Custom designed and optimized landing pages'
    },
    {
      name: 'E-commerce Setup',
      price: 1497,
      description: 'Complete e-commerce platform setup and optimization'
    },
    {
      name: 'Marketing Automation',
      price: 797,
      description: 'Advanced email sequences and workflow automation'
    },
    {
      name: 'Video Content Creation',
      price: 997,
      description: 'Professional video content for social media and ads'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-500/10 to-purple-500/10 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan to accelerate your business growth. All plans include our core digital marketing expertise.
          </p>

          {/* Annual Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-purple-600"
            />
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
            </span>
            <Badge className="bg-gradient-to-r from-purple-600 to-teal-500 text-white">
              Save 10%
            </Badge>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-4 py-1 text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full relative overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-slate-800/80 border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/50'
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-50`} />
                  
                  <CardHeader className="relative z-10 text-center pb-8">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.bgGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 text-${plan.color}-400`} />
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-300 mb-6">
                      {plan.description}
                    </CardDescription>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-center">
                        <span className="text-4xl lg:text-5xl font-bold text-white">
                          ${price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 ml-2">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-teal-400 mt-2">
                          Save ${((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString()} annually
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <Button className={`w-full mb-8 bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition-all duration-300 text-white font-semibold py-3`}>
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">What's included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-gray-300">
                            <Check className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {plan.notIncluded.length > 0 && (
                        <div className="pt-4 border-t border-slate-700">
                          <h5 className="font-medium text-gray-400 mb-3">Not included:</h5>
                          <ul className="space-y-2">
                            {plan.notIncluded.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start text-gray-500">
                                <span className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-gray-600">×</span>
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Add-On Services
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-center">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{addon.name}</CardTitle>
                    <div className="text-2xl font-bold text-purple-400">
                      ${addon.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4">
                      {addon.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                      Add to Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-700"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss a tailored digital marketing strategy that fits your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg">
              <Phone className="mr-2 w-5 h-5" />
              Schedule a Call
            </Button>
            <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-xl font-semibold text-lg">
              Get Custom Quote
            </Button>
          </div>
        </motion.div>

        {/* FAQ or Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're confident in our ability to deliver results. If you're not satisfied with our services within the first 30 days, we'll provide a full refund. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}