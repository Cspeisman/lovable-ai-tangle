
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                Get Started
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                Ready to transform your AI-generated code?
              </h2>
              
              <p className="text-muted-foreground mb-8">
                Let's discuss how we can help you detangle complexity and create elegant, maintainable systems that your developers will love.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5 mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@detangleai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5 mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.49 21.79 21.03 21.42 21.42C21.04 21.79 20.5 22 19.92 22C18.37 21.93 16.84 21.54 15.41 20.82C14.08 20.16 12.87 19.25 11.8 18.13C10.68 17.06 9.77 15.85 9.11 14.52C8.39 13.09 8 11.56 7.93 10.01C7.93 9.43 8.14 8.89 8.51 8.52C8.89 8.14 9.43 7.93 10 7.93H13C13.47 7.93 13.92 8.11 14.29 8.44C14.65 8.77 14.89 9.22 14.95 9.71C15.07 10.77 15.33 11.79 15.71 12.77C15.86 13.16 15.86 13.59 15.71 13.97C15.58 14.35 15.29 14.65 14.92 14.83L13.61 15.48C14.71 17.19 16.29 18.76 18 19.86L18.65 18.55C18.83 18.18 19.14 17.89 19.52 17.75C19.9 17.61 20.32 17.61 20.71 17.75C21.7 18.14 22.72 18.39 23.77 18.51C24.26 18.57 24.71 18.81 25.04 19.18C25.37 19.54 25.55 20 25.55 20.47V23.47C25.55 24.05 25.34 24.59 24.97 24.97C24.59 25.34 24.05 25.55 23.47 25.55C21.92 25.48 20.39 25.09 18.96 24.37C17.63 23.71 16.42 22.8 15.35 21.68C14.23 20.61 13.32 19.4 12.66 18.07C11.94 16.64 11.55 15.11 11.48 13.56C11.48 12.98 11.69 12.44 12.06 12.07C12.44 11.69 12.98 11.48 13.55 11.48H16.55C17.02 11.48 17.47 11.66 17.84 11.99C18.2 12.32 18.44 12.77 18.5 13.26C18.62 14.32 18.88 15.34 19.26 16.32C19.41 16.71 19.41 17.14 19.26 17.52C19.12 17.91 18.84 18.21 18.46 18.38L17.15 19.03C18.25 20.74 19.83 22.31 21.54 23.41L22.19 22.1C22.37 21.73 22.67 21.44 23.06 21.3C23.44 21.16 23.86 21.16 24.25 21.3C25.24 21.69 26.26 21.94 27.31 22.06C27.8 22.12 28.25 22.36 28.58 22.73C28.9 23.09 29.08 23.55 29.08 24.02V27.02C29.08 27.6 28.87 28.14 28.5 28.52C28.12 28.89 27.58 29.1 27 29.1C25.45 29.03 23.92 28.64 22.49 27.92C21.16 27.26 19.95 26.35 18.88 25.23C17.76 24.16 16.85 22.95 16.19 21.62C15.47 20.19 15.08 18.66 15.01 17.11C15.01 16.53 15.22 15.99 15.59 15.62C15.97 15.24 16.51 15.03 17.08 15.03H20.08C20.55 15.03 21 15.21 21.37 15.54C21.73 15.87 21.97 16.32 22.03 16.81" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5 mr-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Innovation Way, Tech City, TC 98765</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-6 animate-fade-in-right">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your company"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell us about your project"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
