
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              Our Expertise
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              We're experts in making AI work <span className="text-primary">for humans</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Our team combines deep expertise in software engineering with specialized knowledge of AI systems. We understand the unique challenges that come with AI-generated code and know exactly how to transform it into something elegant and maintainable.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5 mr-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">10+ Years in Software Engineering</h3>
                  <p className="text-sm text-muted-foreground">Our team has extensive experience across various tech stacks and industries.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5 mr-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">AI Model Specialists</h3>
                  <p className="text-sm text-muted-foreground">We understand the inner workings of various AI models and how they generate code.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5 mr-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Professional Code Reviewers</h3>
                  <p className="text-sm text-muted-foreground">Our experts are trained to identify issues and opportunities in AI-generated code.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-right">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 relative animate-untangle">
                    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g className="opacity-20">
                        <path d="M10,30 Q50,10 90,30 T170,30" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M10,50 Q50,30 90,50 T170,50" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M10,70 Q50,50 90,70 T170,70" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M10,90 Q50,70 90,90 T170,90" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M10,110 Q50,90 90,110 T170,110" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M10,130 Q50,110 90,130 T170,130" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M10,150 Q50,130 90,150 T170,150" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M10,170 Q50,150 90,170 T170,170" stroke="#4d95e9" strokeWidth="1" />
                      </g>
                      
                      <g className="opacity-40">
                        <path d="M30,10 Q50,50 30,90 T30,170" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M50,10 Q70,50 50,90 T50,170" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M70,10 Q90,50 70,90 T70,170" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M90,10 Q110,50 90,90 T90,170" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M110,10 Q130,50 110,90 T110,170" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M130,10 Q150,50 130,90 T130,170" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M150,10 Q170,50 150,90 T150,170" stroke="#4d95e9" strokeWidth="1" />
                        <path d="M170,10 Q190,50 170,90 T170,170" stroke="#4d95e9" strokeWidth="1" />
                      </g>
                      
                      {/* Circles at various intersection points */}
                      <circle cx="30" cy="30" r="3" fill="#4d95e9" />
                      <circle cx="70" cy="50" r="3" fill="#4d95e9" />
                      <circle cx="110" cy="90" r="3" fill="#4d95e9" />
                      <circle cx="90" cy="110" r="3" fill="#4d95e9" />
                      <circle cx="50" cy="130" r="3" fill="#4d95e9" />
                      <circle cx="150" cy="70" r="3" fill="#4d95e9" />
                      <circle cx="130" cy="150" r="3" fill="#4d95e9" />
                      <circle cx="170" cy="130" r="3" fill="#4d95e9" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-lg shadow-lg flex items-center justify-center text-white animate-float">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 8.2L16.4 9.9L18.1 4.3L15.6 3L13.9 8.6L8.3 10.3L10 4.7L7.5 3.4L5.8 9L2 10.2L3.3 12.7L7 11.5L12.7 9.8L11 15.5L7.3 16.7L8.5 19.2L12.3 18L14 12.3L15.7 18L19.5 16.8L18.2 14.3L16.5 20L19 21.2L20.7 15.6L24.5 14.4L23.2 11.9L19.5 13.1L17.8 18.7L16.1 13.1L22 11.3L20.7 8.8L17 10L22 8.2Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
