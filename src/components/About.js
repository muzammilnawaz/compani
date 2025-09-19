import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Target, Award, Zap, Heart, Globe, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function About({ detailed = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    { icon: Target, title: "Results-Driven", description: "Every strategy we implement is designed to deliver measurable results and ROI.", color: "purple" },
    { icon: Heart, title: "Client-Centric", description: "Your success is our success. We build long-term partnerships, not just projects.", color: "teal" },
    { icon: Zap, title: "Innovation First", description: "We stay ahead of digital trends to give your business a competitive edge.", color: "purple" },
    { icon: Shield, title: "Transparency", description: "Clear communication, honest reporting, and no hidden fees or surprises.", color: "teal" }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Clients Served", color: "purple" },
    { icon: Globe, number: "50+", label: "Countries Reached", color: "teal" },
    { icon: Award, number: "15+", label: "Industry Awards", color: "purple" },
    { icon: TrendingUp, number: "250%", label: "Average Growth", color: "teal" }
  ];

  const team = [
    { name: "Alex Chen", position: "CEO & Founder", bio: "10+ years in digital marketing, former Google strategist", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
    { name: "Sarah Rodriguez", position: "Head of Strategy", bio: "Expert in data-driven marketing with MBA from Stanford", image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=400&fit=crop&crop=face" },
    { name: "Michael Kim", position: "Technical Director", bio: "Full-stack developer specializing in marketing technology", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
    { name: "Emma Thompson", position: "Creative Director", bio: "Award-winning designer with focus on conversion optimization", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
  };

  // ⚡ NOTE: Detailed aur Simple dono versions me JSX ki jagah React.createElement ka use kiya gaya hai
  if (detailed) {
    return React.createElement(
      "section",
      { className: "py-20 px-4 sm:px-6 lg:px-8" },
      React.createElement("div", { className: "max-w-7xl mx-auto" },
        // Header
        React.createElement(motion.div, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16"
        },
          React.createElement("h1", { className: "text-4xl lg:text-6xl font-bold mb-6" },
            React.createElement("span", { className: "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent" }, "About Codezyra")
          ),
          React.createElement("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto" },
            "We're a team of passionate digital marketing experts dedicated to helping businesses achieve extraordinary growth through innovative strategies and cutting-edge technology."
          )
        ),

        // Story Section
        React.createElement(motion.div, {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
          className: "mb-20"
        },
          React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" },
            React.createElement("div", null,
              React.createElement("h2", { className: "text-3xl font-bold text-white mb-6" }, "Our Story"),
              React.createElement("p", { className: "text-gray-300 mb-6 leading-relaxed" },
                "Founded in 2018, Codezyra began with a simple mission: to democratize digital marketing success for businesses of all sizes."
              )
            )
          )
        )
      )
    );
  }

  // Simple About
  return React.createElement(
    "section",
    { ref, className: "py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" },
    React.createElement("div", { className: "absolute inset-0" },
      React.createElement(motion.div, {
        animate: { x: [0, 50, 0], y: [0, -30, 0], rotate: [0, 90, 180] },
        transition: { duration: 20, repeat: Infinity, ease: "linear" },
        className: "absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-lg"
      })
    ),
    React.createElement("div", { className: "max-w-7xl mx-auto relative z-10" },
      React.createElement(motion.div, {
        variants: containerVariants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        className: "text-center mb-16"
      },
        React.createElement(motion.h2, { variants: itemVariants, className: "text-4xl lg:text-5xl font-bold mb-6" },
          React.createElement("span", { className: "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent" }, "About Codezyra")
        ),
        React.createElement(motion.p, { variants: itemVariants, className: "text-xl text-gray-300 max-w-3xl mx-auto" },
          "We're passionate digital marketing experts dedicated to helping your business achieve extraordinary growth."
        )
      )
    )
  );
}
