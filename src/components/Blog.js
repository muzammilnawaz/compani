import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Filter, TrendingUp, Eye, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "SEO",
    "PPC",
    "Social Media",
    "Content Marketing",
    "Web Development",
    "Analytics",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 SEO Strategies That Will Dominate 2024",
      excerpt:
        "Discover the latest SEO techniques that are driving real results for businesses in 2024. From Core Web Vitals to AI-powered content optimization.",
      category: "SEO",
      author: "Sarah Rodriguez",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 2400,
      comments: 23,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      tags: ["SEO", "Digital Marketing", "Strategy", "2024 Trends"],
    },
    {
      id: 2,
      title: "How to Create High-Converting Landing Pages",
      excerpt:
        "Learn the essential elements that make landing pages convert visitors into customers. Includes real examples and conversion optimization tips.",
      category: "Web Development",
      author: "Michael Kim",
      date: "2024-01-12",
      readTime: "12 min read",
      views: 1800,
      comments: 31,
      featured: false,
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      tags: ["Landing Pages", "CRO", "Web Design", "Conversions"],
    },
    {
      id: 3,
      title: "The Complete Guide to Google Ads in 2024",
      excerpt:
        "Master Google Ads with our comprehensive guide covering campaign setup, optimization strategies, and advanced bidding techniques.",
      category: "PPC",
      author: "Alex Chen",
      date: "2024-01-10",
      readTime: "15 min read",
      views: 3200,
      comments: 45,
      featured: true,
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      tags: ["Google Ads", "PPC", "Paid Marketing", "ROI"],
    },
    {
      id: 4,
      title: "Social Media Marketing Trends to Watch",
      excerpt:
        "Stay ahead of the curve with the latest social media marketing trends, including short-form video, social commerce, and influencer partnerships.",
      category: "Social Media",
      author: "Emma Thompson",
      date: "2024-01-08",
      readTime: "10 min read",
      views: 1950,
      comments: 28,
      featured: false,
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
      tags: ["Social Media", "Trends", "Marketing Strategy", "Engagement"],
    },
    {
      id: 5,
      title: "Email Marketing Automation That Actually Works",
      excerpt:
        "Build email sequences that nurture leads and drive sales. Learn about segmentation, personalization, and automation best practices.",
      category: "Content Marketing",
      author: "Sarah Rodriguez",
      date: "2024-01-05",
      readTime: "11 min read",
      views: 2100,
      comments: 19,
      featured: false,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop",
      tags: ["Email Marketing", "Automation", "Lead Nurturing", "Personalization"],
    },
    {
      id: 6,
      title: "Measuring ROI in Digital Marketing",
      excerpt:
        "Learn how to accurately measure and improve your digital marketing ROI across all channels. Includes tools, metrics, and calculation methods.",
      category: "Analytics",
      author: "Michael Kim",
      date: "2024-01-03",
      readTime: "9 min read",
      views: 1650,
      comments: 22,
      featured: false,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["Analytics", "ROI", "Measurement", "KPIs"],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // ⚡ Pure React.createElement ka return
  return React.createElement(
    "section",
    { className: "py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" },
    React.createElement("div", { className: "absolute inset-0" },
      React.createElement(motion.div, {
        animate: { x: [0, 50, 0], y: [0, -25, 0], rotate: [0, 90, 180] },
        transition: { duration: 20, repeat: Infinity, ease: "linear" },
        className: "absolute top-32 right-16 w-28 h-28 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-lg",
      })
    ),
    React.createElement("div", { className: "max-w-7xl mx-auto relative z-10" },
      React.createElement(motion.div, {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "text-center mb-16",
      },
        React.createElement("h1", { className: "text-4xl lg:text-6xl font-bold mb-6" },
          React.createElement("span", {
            className: "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
          }, "Digital Marketing Blog")
        ),
        React.createElement("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8" },
          "Stay ahead of the curve with the latest insights, strategies, and trends in digital marketing."
        ),
        React.createElement("div", { className: "flex flex-col lg:flex-row items-center justify-center gap-4 max-w-4xl mx-auto" },
          React.createElement("div", { className: "relative flex-1 max-w-md" },
            React.createElement(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
            React.createElement(Input, {
              type: "text",
              placeholder: "Search articles...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: "pl-10 bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white",
            })
          ),
          React.createElement("div", { className: "flex items-center gap-2 flex-wrap" },
            React.createElement(Filter, { className: "text-gray-400 w-5 h-5" }),
            categories.map((category) =>
              React.createElement(Button, {
                key: category,
                variant: selectedCategory === category ? "default" : "outline",
                size: "sm",
                onClick: () => setSelectedCategory(category),
                className:
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-teal-500 text-white border-0"
                    : "border-slate-600 text-gray-300 hover:border-purple-500/50 hover:text-purple-400",
              }, category)
            )
          )
        )
      )
    )
  );
}
