import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function CaseStudies({ detailed = false }) {
  const [currentCase, setCurrentCase] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      id: 1,
      title: "TechStart E-commerce Growth",
      company: "TechStart Solutions",
      industry: "E-commerce",
      challenge: "Low conversion rates and limited organic traffic",
      solution: "Comprehensive SEO optimization, PPC campaigns, and CRO implementation",
      results: { traffic: "350%", conversions: "280%", revenue: "$2.4M", roi: "450%" },
      timeline: "6 months",
      image:
        "https://images.unsplash.com/photo-1642132652860-471b4228023e?...",
      tags: ["SEO", "PPC", "CRO", "E-commerce"],
      testimonial:
        "Codezyra transformed our online presence completely. Our revenue has grown by 280% in just 6 months!",
      clientName: "Sarah Johnson",
      clientPosition: "CEO, TechStart Solutions",
    },
    // ... baki case studies
  ];

  const nextCase = () => setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  const prevCase = () => setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
  };

  if (detailed) {
    return React.createElement(
      "section",
      { className: "py-20 px-4 sm:px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto" },
        React.createElement(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
          },
          React.createElement(
            "h1",
            { className: "text-4xl lg:text-6xl font-bold mb-6" },
            React.createElement(
              "span",
              { className: "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent" },
              "Case Studies"
            )
          ),
          React.createElement(
            "p",
            { className: "text-xl text-gray-300 max-w-3xl mx-auto" },
            "Real results from real clients. Discover how we've helped businesses achieve remarkable growth through strategic digital marketing."
          )
        ),
        React.createElement(
          "div",
          { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" },
          caseStudies.map((study, index) =>
            React.createElement(
              motion.div,
              {
                key: study.id,
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: index * 0.1 },
                className: "group",
              },
              React.createElement(
                Card,
                { className: "h-full bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden" },
                React.createElement(
                  "div",
                  { className: "relative overflow-hidden" },
                  React.createElement(ImageWithFallback, {
                    src: study.image,
                    alt: study.title,
                    className:
                      "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500",
                  }),
                  React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" }),
                  React.createElement(Badge, { className: "absolute top-4 left-4 bg-purple-600/90 text-white" }, study.industry)
                ),
                React.createElement(
                  CardHeader,
                  null,
                  React.createElement(CardTitle, { className: "text-xl text-white group-hover:text-purple-400 transition-colors" }, study.title),
                  React.createElement(CardDescription, { className: "text-gray-300" }, study.company)
                )
              )
            )
          )
        )
      )
    );
  }

  // Default carousel return part
  return React.createElement(
    "section",
    { ref, className: "py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" },
    React.createElement("div", { className: "absolute inset-0" }),
    React.createElement("div", { className: "max-w-7xl mx-auto relative z-10" })
  );
}
