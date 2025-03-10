
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-left">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-6 py-2 text-sm font-bold mb-6 wiggle">
              Our Expertise
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              We're experts in making AI work <span className="text-accent">for humans</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Our team combines deep expertise in software engineering with specialized knowledge of AI systems. We understand the unique challenges that come with AI-generated code and know exactly how to transform it into something elegant and maintainable.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-primary text-white flex items-center justify-center mt-0.5 mr-4 transform rotate-3 paper-cutout">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">10+ Years in Software Engineering</h3>
                  <p className="text-muted-foreground">Our team has extensive experience across various tech stacks and industries.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-accent text-white flex items-center justify-center mt-0.5 mr-4 transform -rotate-3 paper-cutout">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">AI Model Specialists</h3>
                  <p className="text-muted-foreground">We understand the inner workings of various AI models and how they generate code.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-secondary-foreground text-white flex items-center justify-center mt-0.5 mr-4 transform rotate-3 paper-cutout">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Professional Code Reviewers</h3>
                  <p className="text-muted-foreground">Our experts are trained to identify issues and opportunities in AI-generated code.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-right">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10 paper-cutout transform rotate-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 relative floating">
                    {/* Create cartoonish tangle of code */}
                    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Colorful spaghetti-like code lines */}
                      <path d="M10,30 Q30,10 50,30 T90,30 T130,30 T170,30" stroke="#8B5CF6" strokeWidth="3" className="squiggly-line" />
                      <path d="M10,50 Q30,30 50,50 T90,50 T130,50 T170,50" stroke="#EC4899" strokeWidth="3" className="squiggly-line" strokeDashoffset="100" />
                      <path d="M10,70 Q30,50 50,70 T90,70 T130,70 T170,70" stroke="#F97316" strokeWidth="3" className="squiggly-line" strokeDashoffset="200" />
                      <path d="M10,90 Q30,70 50,90 T90,90 T130,90 T170,90" stroke="#06B6D4" strokeWidth="3" className="squiggly-line" strokeDashoffset="300" />
                      <path d="M10,110 Q30,90 50,110 T90,110 T130,110 T170,110" stroke="#22C55E" strokeWidth="3" className="squiggly-line" strokeDashoffset="400" />
                      <path d="M10,130 Q30,110 50,130 T90,130 T130,130 T170,130" stroke="#F43F5E" strokeWidth="3" className="squiggly-line" strokeDashoffset="500" />
                      
                      {/* Vertical lines */}
                      <path d="M30,10 Q50,30 30,50 T30,90 T30,130 T30,170" stroke="#8B5CF6" strokeWidth="3" className="squiggly-line" strokeDashoffset="600" />
                      <path d="M70,10 Q90,30 70,50 T70,90 T70,130 T70,170" stroke="#EC4899" strokeWidth="3" className="squiggly-line" strokeDashoffset="700" />
                      <path d="M110,10 Q130,30 110,50 T110,90 T110,130 T110,170" stroke="#F97316" strokeWidth="3" className="squiggly-line" strokeDashoffset="800" />
                      <path d="M150,10 Q170,30 150,50 T150,90 T150,130 T150,170" stroke="#06B6D4" strokeWidth="3" className="squiggly-line" strokeDashoffset="900" />
                      
                      {/* Fun cartoon nodes at intersection points */}
                      <circle cx="30" cy="30" r="6" fill="#8B5CF6" />
                      <circle cx="70" cy="50" r="6" fill="#EC4899" />
                      <circle cx="110" cy="90" r="6" fill="#F97316" />
                      <circle cx="90" cy="110" r="6" fill="#06B6D4" />
                      <circle cx="50" cy="130" r="6" fill="#22C55E" />
                      <circle cx="150" cy="70" r="6" fill="#F43F5E" />
                      <circle cx="130" cy="150" r="6" fill="#8B5CF6" />
                      <circle cx="170" cy="130" r="6" fill="#EC4899" />
                      
                      {/* Add highlights to nodes */}
                      <circle cx="28" cy="28" r="2" fill="white" />
                      <circle cx="68" cy="48" r="2" fill="white" />
                      <circle cx="108" cy="88" r="2" fill="white" />
                      <circle cx="88" cy="108" r="2" fill="white" />
                      <circle cx="48" cy="128" r="2" fill="white" />
                      <circle cx="148" cy="68" r="2" fill="white" />
                      <circle cx="128" cy="148" r="2" fill="white" />
                      <circle cx="168" cy="128" r="2" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl shadow-lg flex items-center justify-center text-white transform -rotate-3 wiggle paper-cutout">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
