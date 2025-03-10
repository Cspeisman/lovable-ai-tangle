
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
      
      constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = '#4d95e9';
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
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
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = Math.min(20, Math.floor(canvas.width / 50));
    
    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 2 + 2;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      nodes.push(new Node(x, y, radius));
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      for (const node of nodes) {
        node.update();
        node.draw();
      }
      
      // Draw connections
      ctx.strokeStyle = 'rgba(77, 149, 233, 0.15)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
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
        className="absolute inset-0 w-full h-full opacity-70 z-0"
      />
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in">
            AI Code Specialists
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up [animation-delay:200ms]">
            We Detangle the Complexity of <span className="text-primary whitespace-nowrap">AI-Generated Code</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms] text-balance">
            Our expert team transforms confusing AI outputs into elegant, maintainable systems that your developers will actually want to work with.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
            <button className="w-full sm:w-auto px-8 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
              See Our Approach
            </button>
            <button className="w-full sm:w-auto px-8 py-3 rounded-md border border-input bg-white/50 hover:bg-white/80 transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L18 13M12 19L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
