
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Node class for visualization
    class Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      hue: number;
      
      constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.hue = Math.floor(Math.random() * 360);
        this.color = `hsl(${this.hue}, 80%, 60%)`;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off walls
        if (this.x <= this.radius || this.x >= canvas.width - this.radius) {
          this.vx = -this.vx;
        }
        
        if (this.y <= this.radius || this.y >= canvas.height - this.radius) {
          this.vy = -this.vy;
        }

        // Slowly change color
        this.hue = (this.hue + 0.1) % 360;
        this.color = `hsl(${this.hue}, 80%, 60%)`;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Add cartoon-style white highlight to each bubble
        ctx.beginPath();
        ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
      }
    }
    
    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = Math.min(30, Math.floor(canvas.width / 40));
    
    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 10 + 5;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      nodes.push(new Node(x, y, radius));
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw squiggly lines between nodes
      ctx.lineWidth = 2;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y
            );
            gradient.addColorStop(0, nodes[i].color);
            gradient.addColorStop(1, nodes[j].color);
            
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            
            // Draw wavy line instead of straight
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY = (nodes[i].y + nodes[j].y) / 2;
            const offset = 10 * Math.sin(Date.now() / 500);
            
            ctx.quadraticCurveTo(
              midX + offset, 
              midY + offset, 
              nodes[j].x, 
              nodes[j].y
            );
            
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = 1 - distance / 150;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      
      // Update and draw nodes
      for (const node of nodes) {
        node.update();
        node.draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-90 z-0"
      />
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-6 py-2 text-sm font-bold mb-6">
            AI Code Superheroes
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            We <span className="text-accent wiggle inline-block">Untangle</span> the Mess of <span className="text-primary whitespace-nowrap">AI-Generated Code</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            Our expert team transforms confusing AI outputs into elegant, maintainable systems that your developers will actually want to work with.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-white cartoon-button">
              See Our Approach
            </button>
            <button className="w-full sm:w-auto px-8 py-3 rounded-xl border-2 border-input bg-white/50 hover:bg-white/80 transition-all cartoon-button" style={{ boxShadow: "0 6px 0 theme('colors.secondary.DEFAULT')" }}>
              View Case Studies
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
