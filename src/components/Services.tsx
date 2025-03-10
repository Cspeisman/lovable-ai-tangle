import React from 'react';
import { GitBranch, Code, Layers, Brain, MessageSquare, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ServiceCard = ({ icon, title, description, color }: ServiceCardProps) => {
  return (
    <div 
      className="glass-panel p-8 flex flex-col items-center text-center"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <div className="p-4 rounded-full mb-6" style={{ backgroundColor: `${color}20` }}>
        <div className="text-white p-3 rounded-full" style={{ backgroundColor: color }}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color }}>{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <GitBranch size={24} />,
      title: "Code Detangling",
      description: "We transform messy AI-generated code into clean, maintainable, and well-structured systems.",
      color: "#F97316" // Changed from purple to orange
    },
    {
      icon: <Code size={24} />,
      title: "Architecture Refinement",
      description: "Restructure and optimize complex AI solutions for better performance and scalability.",
      color: "#EC4899"
    },
    {
      icon: <Layers size={24} />,
      title: "System Integration",
      description: "Seamlessly integrate AI components with your existing systems and infrastructure.",
      color: "#F97316" // Changed from orange to a consistent orange
    },
    {
      icon: <Brain size={24} />,
      title: "AI Model Optimization",
      description: "Fine-tune and optimize AI models for better performance and more reliable outputs.",
      color: "#06B6D4"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Developer Training",
      description: "Educate your team on best practices for working with and maintaining AI-generated code.",
      color: "#22C55E"
    },
    {
      icon: <Shield size={24} />,
      title: "Security Auditing",
      description: "Identify and address security vulnerabilities in AI-generated systems and applications.",
      color: "#F97316" // Changed from red to orange
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Superpowers</h2>
          <p className="section-subtitle">
            We specialize in bringing clarity and structure to AI-generated code and systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
