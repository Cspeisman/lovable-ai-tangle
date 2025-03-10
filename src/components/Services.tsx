
import React from 'react';
import { GitBranch, Code, Layers, Brain, MessageSquare, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300",
        "animate-fade-in-up",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
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
      delay: 100
    },
    {
      icon: <Code size={24} />,
      title: "Architecture Refinement",
      description: "Restructure and optimize complex AI solutions for better performance and scalability.",
      delay: 200
    },
    {
      icon: <Layers size={24} />,
      title: "System Integration",
      description: "Seamlessly integrate AI components with your existing systems and infrastructure.",
      delay: 300
    },
    {
      icon: <Brain size={24} />,
      title: "AI Model Optimization",
      description: "Fine-tune and optimize AI models for better performance and more reliable outputs.",
      delay: 400
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Developer Training",
      description: "Educate your team on best practices for working with and maintaining AI-generated code.",
      delay: 500
    },
    {
      icon: <Shield size={24} />,
      title: "Security Auditing",
      description: "Identify and address security vulnerabilities in AI-generated systems and applications.",
      delay: 600
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in-up">Our Services</h2>
          <p className="section-subtitle animate-fade-in-up [animation-delay:200ms]">
            We specialize in bringing clarity and structure to AI-generated code and systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
