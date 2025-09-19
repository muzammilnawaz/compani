import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudiesProps {
  detailed?: boolean;
}

export default function CaseStudies({ detailed = false }: CaseStudiesProps) {
  const [currentCase, setCurrentCase] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      id: 1,
      title: 'TechStart E-commerce Growth',
      company: 'TechStart Solutions',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and limited organic traffic',
      solution: 'Comprehensive SEO optimization, PPC campaigns, and CRO implementation',
      results: {
        traffic: '350%',
        conversions: '280%',
        revenue: '$2.4M',
        roi: '450%'
      },
      timeline: '6 months',
      image: 'https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODA0NjMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['SEO', 'PPC', 'CRO', 'E-commerce'],
      testimonial: "Codezyra transformed our online presence completely. Our revenue has grown by 280% in just 6 months!",
      clientName: 'Sarah Johnson',
      clientPosition: 'CEO, TechStart Solutions'
    },
    {
      id: 2,
      title: 'HealthCorp Lead Generation',
      company: 'HealthCorp Medical',
      industry: 'Healthcare',
      challenge: 'Generating qualified leads for medical services',
      solution: 'Targeted social media campaigns, content marketing, and email automation',
      results: {
        traffic: '420%',
        conversions: '310%',
        revenue: '$1.8M',
        roi: '380%'
      },
      timeline: '8 months',
      image: 'https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTgwNTQxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Social Media', 'Content Marketing', 'Email Marketing', 'Healthcare'],
      testimonial: "The team at Codezyra understood our industry and delivered exceptional results. Our patient inquiries increased by 310%.",
      clientName: 'Dr. Michael Chen',
      clientPosition: 'Director, HealthCorp Medical'
    },
    {
      id: 3,
      title: 'FinanceFlow Brand Awareness',
      company: 'FinanceFlow Inc',
      industry: 'Financial Services',
      challenge: 'Building brand awareness in a competitive market',
      solution: 'Multi-channel digital strategy including SEO, social media, and content marketing',
      results: {
        traffic: '290%',
        conversions: '240%',
        revenue: '$3.2M',
        roi: '520%'
      },
      timeline: '10 months',
      image: 'https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc1ODEyMTU0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['SEO', 'Social Media', 'Content Marketing', 'Finance'],
      testimonial: "Codezyra helped us establish a strong digital presence. We're now recognized as a leader in our industry.",
      clientName: 'Amanda Rodriguez',
      clientPosition: 'CMO, FinanceFlow Inc'
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  if (detailed) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients. Discover how we've helped businesses achieve remarkable growth through strategic digital marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white">
                      {study.industry}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {study.company}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs border-purple-500/30 text-purple-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-bold text-teal-400">
                          +{study.results.traffic}
                        </div>
                        <div className="text-xs text-gray-400">Traffic</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-400">
                          +{study.results.conversions}
                        </div>
                        <div className="text-xs text-gray-400">Conversions</div>
                      </div>
                    </div>
                    
                    <blockquote className="italic text-gray-300 border-l-4 border-purple-500/50 pl-4">
                      "{study.testimonial}"
                    </blockquote>
                    
                    <div className="pt-2">
                      <div className="font-medium text-white">{study.clientName}</div>
                      <div className="text-sm text-gray-400">{study.clientPosition}</div>
                    </div>
                    
                    <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-teal-500 hover:opacity-90">
                      View Full Case Study
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const currentStudy = caseStudies[currentCase];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-teal-500/10 to-purple-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Real results from real clients. See how we've helped businesses achieve remarkable growth.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-6xl mx-auto"
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-16 z-20">
            <Button
              onClick={prevCase}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-purple-500/50 bg-slate-800/80 backdrop-blur-sm hover:bg-purple-600/20 hover:border-purple-400"
            >
              <ChevronLeft className="w-6 h-6 text-purple-400" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-16 z-20">
            <Button
              onClick={nextCase}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-purple-500/50 bg-slate-800/80 backdrop-blur-sm hover:bg-purple-600/20 hover:border-purple-400"
            >
              <ChevronRight className="w-6 h-6 text-purple-400" />
            </Button>
          </div>

          {/* Case Study Card */}
          <motion.div
            key={currentCase}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-64 lg:h-full">
                  <ImageWithFallback
                    src={currentStudy.image}
                    alt={currentStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-teal-900/40" />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {currentStudy.tags.map((tag, index) => (
                      <Badge key={index} className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-500/30">
                      {currentStudy.industry}
                    </Badge>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {currentStudy.title}
                    </h3>
                    <p className="text-xl text-purple-400 mb-4">{currentStudy.company}</p>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-xl border border-purple-500/30">
                      <TrendingUp className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-teal-400">
                        +{currentStudy.results.traffic}
                      </div>
                      <div className="text-sm text-gray-400">Traffic Growth</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-xl border border-teal-500/30">
                      <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-400">
                        +{currentStudy.results.conversions}
                      </div>
                      <div className="text-sm text-gray-400">Conversions</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-xl border border-purple-500/30">
                      <DollarSign className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-teal-400">
                        {currentStudy.results.revenue}
                      </div>
                      <div className="text-sm text-gray-400">Revenue Generated</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-xl border border-teal-500/30">
                      <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-400">
                        {currentStudy.results.roi}
                      </div>
                      <div className="text-sm text-gray-400">ROI Increase</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="mb-6 p-4 bg-slate-700/50 rounded-xl border-l-4 border-purple-500/50">
                    <p className="text-gray-300 italic mb-3">"{currentStudy.testimonial}"</p>
                    <footer>
                      <div className="font-medium text-white">{currentStudy.clientName}</div>
                      <div className="text-sm text-gray-400">{currentStudy.clientPosition}</div>
                    </footer>
                  </blockquote>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-semibold py-3">
                    View Full Case Study
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCase
                    ? 'bg-purple-500 scale-125'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            View All Case Studies
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}