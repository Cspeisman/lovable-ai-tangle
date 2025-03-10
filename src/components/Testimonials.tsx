
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  active: boolean;
  onClick: () => void;
}

const Testimonial = ({ quote, author, role, company, active, onClick }: TestimonialProps) => {
  return (
    <div 
      className={cn(
        "glass-panel rounded-xl p-8 cursor-pointer transition-all duration-500",
        active ? "border-primary/30 shadow-lg scale-100 opacity-100" : "scale-95 opacity-60"
      )}
      onClick={onClick}
    >
      <div className="mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-primary inline-block mr-1">★</span>
        ))}
      </div>
      
      <blockquote className="text-lg mb-6">"{quote}"</blockquote>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-medium">{author}</div>
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
      company: "TechFlow Inc."
    },
    {
      quote: "We were stuck with a complex AI system that nobody wanted to touch. DetangleAI stepped in and restructured it so elegantly that onboarding new developers became simple.",
      author: "Michael Chen",
      role: "VP of Engineering",
      company: "DataSphere"
    },
    {
      quote: "The security audit they performed on our AI-generated code identified critical vulnerabilities we hadn't even considered. Their remediation was swift and thorough.",
      author: "Jessica Williams",
      role: "CISO",
      company: "SecureFinance"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in-up">Case Studies</h2>
          <p className="section-subtitle animate-fade-in-up [animation-delay:200ms]">
            See how we've helped companies transform their AI-generated code into elegant, maintainable systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up [animation-delay:400ms]">
          <button className="px-8 py-3 rounded-md bg-white border border-input hover:bg-primary hover:text-white transition-colors">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
