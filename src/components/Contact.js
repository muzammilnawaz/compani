import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Calendar, Zap, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    urgency: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        urgency: ''
      });
    }, 3000);
  };
  const contactInfo = [{
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
    color: 'purple'
  }, {
    icon: Mail,
    title: 'Email',
    details: ['hello@codezyra.com', 'support@codezyra.com'],
    color: 'teal'
  }, {
    icon: MapPin,
    title: 'Address',
    details: ['123 Business Avenue', 'New York, NY 10001, USA'],
    color: 'purple'
  }, {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM EST', 'Weekend: Emergency only'],
    color: 'teal'
  }];
  const services = ['SEO (Search Engine Optimization)', 'PPC (Google Ads, Paid Marketing)', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Web Development', 'UI/UX Design', 'Conversion Rate Optimization (CRO)', 'Complete Digital Marketing Package', 'Custom Solution'];
  const budgetRanges = ['Under $5,000/month', '$5,000 - $10,000/month', '$10,000 - $25,000/month', '$25,000 - $50,000/month', '$50,000+/month', 'One-time project', 'Not sure yet'];
  const urgencyOptions = ['ASAP - Need to start immediately', 'Within 2 weeks', 'Within 1 month', 'Within 3 months', 'Just exploring options'];
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
  return /*#__PURE__*/React.createElement("section", {
    className: "py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0"
  }, /*#__PURE__*/React.createElement(motion.div, {
    animate: {
      x: [0, 75, 0],
      y: [0, -50, 0],
      rotate: [0, 120, 240]
    },
    transition: {
      duration: 25,
      repeat: Infinity,
      ease: "linear"
    },
    className: "absolute top-20 left-10 w-36 h-36 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-xl"
  }), /*#__PURE__*/React.createElement(motion.div, {
    animate: {
      x: [0, -60, 0],
      y: [0, 40, 0],
      rotate: [360, 0, 360]
    },
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    },
    className: "absolute bottom-32 right-16 w-44 h-44 bg-gradient-to-br from-teal-500/10 to-purple-500/10 rounded-full blur-2xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto relative z-10"
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
  }, "Get Your Free Strategy Call")), /*#__PURE__*/React.createElement("p", {
    className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8"
  }, "Ready to accelerate your business growth? Let's discuss how our digital marketing expertise can help you achieve your goals."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    className: "w-4 h-4 text-teal-400 mr-2"
  }), "Free 30-minute consultation"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    className: "w-4 h-4 text-teal-400 mr-2"
  }), "Custom strategy recommendations"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    className: "w-4 h-4 text-teal-400 mr-2"
  }), "No obligations or contracts"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-12"
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: containerVariants,
    initial: "hidden",
    animate: "visible",
    className: "lg:col-span-2"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden"
  }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, {
    className: "text-2xl text-white flex items-center"
  }, /*#__PURE__*/React.createElement(MessageCircle, {
    className: "mr-3 w-6 h-6 text-purple-400"
  }), "Tell Us About Your Project"), /*#__PURE__*/React.createElement(CardDescription, {
    className: "text-gray-300"
  }, "Fill out the form below and we'll get back to you within 24 hours with a customized strategy proposal.")), /*#__PURE__*/React.createElement(CardContent, null, isSubmitted ? /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    className: "text-center py-12"
  }, /*#__PURE__*/React.createElement(motion.div, {
    animate: {
      rotate: 360
    },
    transition: {
      duration: 0.6
    },
    className: "w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
  }, /*#__PURE__*/React.createElement(CheckCircle, {
    className: "w-10 h-10 text-white"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-bold text-white mb-4"
  }, "Message Sent Successfully!"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 mb-6"
  }, "Thank you for reaching out! We'll review your information and get back to you within 24 hours with a customized strategy proposal."), /*#__PURE__*/React.createElement(Badge, {
    className: "bg-gradient-to-r from-purple-600 to-teal-500 text-white px-4 py-2"
  }, "Response within 24 hours")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "name",
    className: "text-white"
  }, "Full Name *"), /*#__PURE__*/React.createElement(Input, {
    id: "name",
    type: "text",
    required: true,
    value: formData.name,
    onChange: e => handleInputChange('name', e.target.value),
    className: "bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white",
    placeholder: "John Doe"
  })), /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "email",
    className: "text-white"
  }, "Email Address *"), /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    required: true,
    value: formData.email,
    onChange: e => handleInputChange('email', e.target.value),
    className: "bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white",
    placeholder: "john@company.com"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "phone",
    className: "text-white"
  }, "Phone Number"), /*#__PURE__*/React.createElement(Input, {
    id: "phone",
    type: "tel",
    value: formData.phone,
    onChange: e => handleInputChange('phone', e.target.value),
    className: "bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white",
    placeholder: "+1 (555) 123-4567"
  })), /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "company",
    className: "text-white"
  }, "Company Name"), /*#__PURE__*/React.createElement(Input, {
    id: "company",
    type: "text",
    value: formData.company,
    onChange: e => handleInputChange('company', e.target.value),
    className: "bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white",
    placeholder: "Your Company Inc."
  }))), /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "service",
    className: "text-white"
  }, "Service Needed *"), /*#__PURE__*/React.createElement(Select, {
    value: formData.service,
    onValueChange: value => handleInputChange('service', value)
  }, /*#__PURE__*/React.createElement(SelectTrigger, {
    className: "bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white"
  }, /*#__PURE__*/React.createElement(SelectValue, {
    placeholder: "Select a service"
  })), /*#__PURE__*/React.createElement(SelectContent, {
    className: "bg-slate-800 border-slate-700"
  }, services.map(service => /*#__PURE__*/React.createElement(SelectItem, {
    key: service,
    value: service,
    className: "text-white focus:bg-purple-600/20"
  }, service))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "budget",
    className: "text-white"
  }, "Monthly Budget Range"), /*#__PURE__*/React.createElement(Select, {
    value: formData.budget,
    onValueChange: value => handleInputChange('budget', value)
  }, /*#__PURE__*/React.createElement(SelectTrigger, {
    className: "bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white"
  }, /*#__PURE__*/React.createElement(SelectValue, {
    placeholder: "Select budget range"
  })), /*#__PURE__*/React.createElement(SelectContent, {
    className: "bg-slate-800 border-slate-700"
  }, budgetRanges.map(range => /*#__PURE__*/React.createElement(SelectItem, {
    key: range,
    value: range,
    className: "text-white focus:bg-purple-600/20"
  }, range))))), /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "urgency",
    className: "text-white"
  }, "Timeline"), /*#__PURE__*/React.createElement(Select, {
    value: formData.urgency,
    onValueChange: value => handleInputChange('urgency', value)
  }, /*#__PURE__*/React.createElement(SelectTrigger, {
    className: "bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white"
  }, /*#__PURE__*/React.createElement(SelectValue, {
    placeholder: "When do you want to start?"
  })), /*#__PURE__*/React.createElement(SelectContent, {
    className: "bg-slate-800 border-slate-700"
  }, urgencyOptions.map(option => /*#__PURE__*/React.createElement(SelectItem, {
    key: option,
    value: option,
    className: "text-white focus:bg-purple-600/20"
  }, option)))))), /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "message",
    className: "text-white"
  }, "Tell Us About Your Goals *"), /*#__PURE__*/React.createElement(Textarea, {
    id: "message",
    required: true,
    value: formData.message,
    onChange: e => handleInputChange('message', e.target.value),
    className: "bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white min-h-[120px]",
    placeholder: "Describe your business goals, challenges, and what you hope to achieve with digital marketing..."
  })), /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "pt-4"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: isSubmitting,
    className: "w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white py-4 font-semibold text-lg transition-all duration-300 disabled:opacity-50"
  }, isSubmitting ? /*#__PURE__*/React.createElement(motion.div, {
    animate: {
      rotate: 360
    },
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    },
    className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
  }) : /*#__PURE__*/React.createElement(Send, {
    className: "mr-2 w-5 h-5"
  }), isSubmitting ? 'Sending Message...' : 'Send Message & Get Free Strategy Call')))))), /*#__PURE__*/React.createElement(motion.div, {
    variants: containerVariants,
    initial: "hidden",
    animate: "visible",
    className: "space-y-6"
  }, contactInfo.map((info, index) => {
    const Icon = info.icon;
    return /*#__PURE__*/React.createElement(motion.div, {
      key: index,
      variants: itemVariants
    }, /*#__PURE__*/React.createElement(Card, {
      className: "bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500/50 transition-all duration-300"
    }, /*#__PURE__*/React.createElement(CardHeader, {
      className: "pb-3"
    }, /*#__PURE__*/React.createElement(CardTitle, {
      className: "text-lg text-white flex items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-10 h-10 rounded-lg bg-gradient-to-br ${info.color === 'purple' ? 'from-purple-500/20 to-purple-600/20' : 'from-teal-500/20 to-teal-600/20'} flex items-center justify-center mr-3`
    }, /*#__PURE__*/React.createElement(Icon, {
      className: `w-5 h-5 ${info.color === 'purple' ? 'text-purple-400' : 'text-teal-400'}`
    })), info.title)), /*#__PURE__*/React.createElement(CardContent, null, info.details.map((detail, detailIndex) => /*#__PURE__*/React.createElement("p", {
      key: detailIndex,
      className: "text-gray-300 text-sm"
    }, detail)))));
  }), /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white py-4 font-semibold"
  }, /*#__PURE__*/React.createElement(Calendar, {
    className: "mr-2 w-5 h-5"
  }), "Schedule a Call"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10 py-4 font-semibold"
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "mr-2 w-5 h-5"
  }), "Get Instant Quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "w-full border-teal-500/50 text-teal-400 hover:bg-teal-500/10 py-4 font-semibold"
  }, /*#__PURE__*/React.createElement(Users, {
    className: "mr-2 w-5 h-5"
  }), "View Case Studies")), /*#__PURE__*/React.createElement(motion.div, {
    variants: itemVariants
  }, /*#__PURE__*/React.createElement(Card, {
    className: "bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border-slate-700 text-center"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "pt-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-bold text-white mb-2"
  }, "500+"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 mb-4"
  }, "Successful Projects"), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center space-x-1 mb-2"
  }, [1, 2, 3, 4, 5].map(star => /*#__PURE__*/React.createElement(motion.div, {
    key: star,
    animate: {
      rotate: [0, 360]
    },
    transition: {
      duration: 2,
      delay: star * 0.1,
      repeat: Infinity,
      repeatDelay: 5
    }
  }, "\u2B50"))), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400"
  }, "4.9/5 Client Satisfaction")))))), /*#__PURE__*/React.createElement(motion.div, {
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
      delay: 0.6
    },
    className: "mt-16"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement(MapPin, {
    className: "w-16 h-16 text-purple-400 mx-auto mb-4"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-xl font-bold text-white mb-2"
  }, "Our Location"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300"
  }, "123 Business Avenue, New York, NY 10001"), /*#__PURE__*/React.createElement(Button, {
    className: "mt-4 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white"
  }, "View on Google Maps")))))));
}