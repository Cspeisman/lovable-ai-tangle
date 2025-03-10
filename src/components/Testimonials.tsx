import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  active: boolean;
  onClick: () => void;
  color: string;
}

const Testimonial = ({ quote, author, role, company, active, onClick, color }: TestimonialProps) => {
  return (
    <div 
      className={cn(
        "glass-panel p-8 cursor-pointer transition-all duration-500",
        active ? "border-primary/30 shadow-lg scale-100 opacity-100 rotate-0" : 
                 `scale-95 opacity-70 ${Math.random() > 0.5 ? "rotate-2" : "-rotate-2"}`
      )}
      onClick={onClick}
      style={{ borderTop: `4px solid ${color}` }}
    >
      <div className="mb-6 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-primary inline-block mr-1 text-2xl wiggle" style={{ animationDelay: `${star * 0.1}s` }}>★</span>
        ))}
      </div>
      
      <blockquote className="text-lg mb-6 font-medium">"{quote}"</blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4 text-white transform rotate-3 paper-cutout" style={{ backgroundColor: color }}>
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-bold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Their team transformed our AI-generated codebase from a confusing mess into a clean, maintainable system. Our developers are finally happy to work with it.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechFlow Inc.",
      color: "#8B5CF6"
    },
    {
      quote: "We were stuck with a complex AI system that nobody wanted to touch. DetangleAI stepped in and restructured it so elegantly that onboarding new developers became simple.",
      author: "Michael Chen",
      role: "VP of Engineering",
      company: "DataSphere",
      color: "#EC4899"
    },
    {
      quote: "The security audit they performed on our AI-generated code identified critical vulnerabilities we hadn't even considered. Their remediation was swift and thorough.",
      author: "Jessica Williams",
      role: "CISO",
      company: "SecureFinance",
      color: "#F97316"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Happy Humans</h2>
          <p className="section-subtitle">
            See how we've helped companies transform their AI-generated code into elegant, maintainable systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-xl bg-white border-2 border-input hover:bg-primary hover:text-white transition-colors cartoon-button">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
