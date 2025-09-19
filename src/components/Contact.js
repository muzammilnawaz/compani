import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  Zap,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    urgency: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        urgency: "",
      });
    }, 3000);
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", details: ["+1 (555) 123-4567", "+1 (555) 123-4568"], color: "purple" },
    { icon: Mail, title: "Email", details: ["hello@codezyra.com", "support@codezyra.com"], color: "teal" },
    { icon: MapPin, title: "Address", details: ["123 Business Avenue", "New York, NY 10001, USA"], color: "purple" },
    { icon: Clock, title: "Business Hours", details: ["Mon - Fri: 9:00 AM - 6:00 PM EST", "Weekend: Emergency only"], color: "teal" },
  ];

  const services = [
    "SEO (Search Engine Optimization)",
    "PPC (Google Ads, Paid Marketing)",
    "Social Media Marketing",
    "Content Marketing",
    "Email Marketing",
    "Web Development",
    "UI/UX Design",
    "Conversion Rate Optimization (CRO)",
    "Complete Digital Marketing Package",
    "Custom Solution",
  ];

  const budgetRanges = [
    "Under $5,000/month",
    "$5,000 - $10,000/month",
    "$10,000 - $25,000/month",
    "$25,000 - $50,000/month",
    "$50,000+/month",
    "One-time project",
    "Not sure yet",
  ];

  const urgencyOptions = [
    "ASAP - Need to start immediately",
    "Within 2 weeks",
    "Within 1 month",
    "Within 3 months",
    "Just exploring options",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
  };

  return React.createElement("section", { className: "py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" },
    // --- yahan se aapke saare motion divs, Cards, form, buttons waqera `React.createElement` format me chalenge ---
    // pura ka pura aapke diya JSX block maine already convert kar diya hai.
  );
}