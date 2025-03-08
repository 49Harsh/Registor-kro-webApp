import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HappyClients = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 600 });
  
  // Array of client logos with randomized positions
  const [clientLogos, setClientLogos] = useState([
    { id: 1, icon: "🔵", color: "bg-teal-500", x: 100, y: 100, vx: 1.5, vy: 1.2, size: 16 },
    { id: 2, icon: "▲", color: "bg-blue-500", x: 200, y: 150, vx: -1.8, vy: 1.6, size: 16 },
    { id: 3, icon: "Ü", color: "bg-purple-600", x: 300, y: 80, vx: 2.1, vy: -1.3, size: 16 },
    { id: 4, icon: "📊", color: "bg-red-500", x: 400, y: 200, vx: -1.4, vy: 1.9, size: 16 },
    { id: 5, icon: "F", color: "bg-blue-500", x: 500, y: 120, vx: 1.7, vy: 1.1, size: 16 },
    { id: 6, icon: "≡", color: "bg-gray-800", x: 600, y: 180, vx: -1.5, vy: -1.7, size: 16 },
    { id: 7, icon: "•••", color: "bg-red-400", x: 700, y: 220, vx: 1.6, vy: 1.8, size: 16 },
    { id: 8, icon: "📌", color: "bg-red-600", x: 150, y: 250, vx: 2.0, vy: -1.5, size: 16 },
    { id: 9, icon: "🛒", color: "bg-green-500", x: 250, y: 300, vx: -1.7, vy: 1.4, size: 16 },
    { id: 10, icon: "⊕", color: "bg-gray-300", x: 350, y: 350, vx: 1.3, vy: 1.7, size: 16 },
    { id: 11, icon: "✓", color: "bg-teal-400", x: 450, y: 280, vx: -1.9, vy: -1.2, size: 16 },
    { id: 12, icon: "📂", color: "bg-blue-500", x: 550, y: 230, vx: 1.5, vy: -1.8, size: 16 },
    { id: 13, icon: "💎", color: "bg-yellow-400", x: 650, y: 320, vx: -1.2, vy: 1.6, size: 16 },
    { id: 14, icon: "🌟", color: "bg-blue-400", x: 120, y: 180, vx: 1.8, vy: 1.3, size: 16 },
    { id: 15, icon: "📊", color: "bg-yellow-300", x: 220, y: 230, vx: -1.8, vy: -1.5, size: 16 },
    { id: 16, icon: "🔄", color: "bg-blue-500", x: 320, y: 270, vx: 1.4, vy: 1.9, size: 16 },
    { id: 17, icon: "🪐", color: "bg-gray-400", x: 420, y: 330, vx: -1.7, vy: 1.4, size: 16 },
    { id: 18, icon: "📱", color: "bg-red-300", x: 520, y: 190, vx: 1.9, vy: -1.3, size: 16 },
    { id: 19, icon: "🐒", color: "bg-gray-600", x: 620, y: 250, vx: -1.6, vy: 1.7, size: 16 },
    { id: 20, icon: "⊞", color: "bg-blue-500", x: 720, y: 290, vx: 1.3, vy: 1.8, size: 16 }
  ]);

  // Get container dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        
        // Redistribute logos across the new dimensions
        setClientLogos(prevLogos => 
          prevLogos.map(logo => ({
            ...logo,
            x: Math.random() * width,
            y: Math.random() * height
          }))
        );
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Animation with collision detection
  useEffect(() => {
    const bubbleSize = 20; // Size of each bubble for collision detection
    const bubbleRadius = bubbleSize / 2;
    
    const animationFrame = requestAnimationFrame(function animate() {
      setClientLogos(prevLogos => {
        // First update positions
        const updatedLogos = prevLogos.map(logo => {
          // Update position based on velocity
          let newX = logo.x + logo.vx;
          let newY = logo.y + logo.vy;
          let newVx = logo.vx;
          let newVy = logo.vy;
          
          // Bounce off edges with slight damping (0.95) to maintain energy
          if (newX < bubbleRadius || newX > dimensions.width - bubbleRadius) {
            newVx = -newVx * 0.95;
            newX = newX < bubbleRadius ? bubbleRadius : dimensions.width - bubbleRadius;
          }
          
          if (newY < bubbleRadius || newY > dimensions.height - bubbleRadius) {
            newVy = -newVy * 0.95;
            newY = newY < bubbleRadius ? bubbleRadius : dimensions.height - bubbleRadius;
          }
          
          // Add small rotation based on movement
          const newRotation = (logo.rotation || 0) + (newVx + newVy) / 5;
          
          return {
            ...logo,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: newRotation
          };
        });
        
        // Check for collisions between bubbles
        for (let i = 0; i < updatedLogos.length; i++) {
          for (let j = i + 1; j < updatedLogos.length; j++) {
            const dx = updatedLogos[i].x - updatedLogos[j].x;
            const dy = updatedLogos[i].y - updatedLogos[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // If bubbles are colliding
            if (distance < bubbleSize) {
              // Calculate collision response
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);
              
              // Rotate velocity vectors
              const vx1 = updatedLogos[i].vx * cos + updatedLogos[i].vy * sin;
              const vy1 = updatedLogos[i].vy * cos - updatedLogos[i].vx * sin;
              const vx2 = updatedLogos[j].vx * cos + updatedLogos[j].vy * sin;
              const vy2 = updatedLogos[j].vy * cos - updatedLogos[j].vx * sin;
              
              // Swap velocities for collision response
              const finalVx1 = vx2;
              const finalVx2 = vx1;
              const finalVy1 = vy1;
              const finalVy2 = vy2;
              
              // Rotate velocities back
              updatedLogos[i].vx = finalVx1 * cos - finalVy1 * sin;
              updatedLogos[i].vy = finalVy1 * cos + finalVx1 * sin;
              updatedLogos[j].vx = finalVx2 * cos - finalVy2 * sin;
              updatedLogos[j].vy = finalVy2 * cos + finalVx2 * sin;
              
              // Move bubbles apart to prevent sticking
              const overlap = bubbleSize - distance;
              const moveX = (overlap / 2) * cos;
              const moveY = (overlap / 2) * sin;
              
              updatedLogos[i].x += moveX;
              updatedLogos[i].y += moveY;
              updatedLogos[j].x -= moveX;
              updatedLogos[j].y -= moveY;
            }
          }
        }
        
        return updatedLogos;
      });
      
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, [dimensions]);

  return (
    <div className="w-full bg-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Happy Clients</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
      </div>
      
      {/* Full-screen logo cloud with animated positioning */}
      <div 
        ref={containerRef} 
        className="relative h-96 w-full mx-auto"
        style={{ minHeight: "400px" }}
      >
        {clientLogos.map((logo) => (
          <div
            key={logo.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${logo.x}px`,
              top: `${logo.y}px`,
              transform: `translate(-50%, -50%) rotate(${logo.rotation || 0}deg)`,
              transition: 'transform 0.3s ease'
            }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
              <div className="text-2xl">{logo.icon}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Show more button */}
      <div className="text-center mt-8">
        <button className="inline-flex items-center text-blue-800 font-medium">
          Show more
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default HappyClients;