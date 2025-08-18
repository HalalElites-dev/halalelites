'use client';

import React from 'react';
import { motion,  } from 'framer-motion';

interface HolographicBackgroundProps {
  variant?: 'default' | 'single' | 'two' | 'three' | 'minimal';
  className?: string;
}

const HolographicBackground: React.FC<HolographicBackgroundProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  


  if (variant === 'single') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl bg-brand-primary opacity-15"
          animate={{ 
            x: [0, 40, -30, 50, -20, 0], 
            y: [0, -35, 25, -40, 30, 0],
            scale: [1, 1.2, 0.8, 1.1, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (variant === 'two') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl bg-brand-primary opacity-18"
          animate={{ 
            x: [0, 35, -25, 0], 
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-20 w-72 h-72 rounded-full blur-3xl bg-brand-primary opacity-16"
          animate={{ 
            x: [0, -40, 30, 0], 
            y: [0, 25, -35, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (variant === 'three') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Circle 1 */}
        <motion.div 
          className="absolute top-16 left-16 w-64 h-64 rounded-full blur-2xl bg-brand-primary opacity-20"
          animate={{ 
            x: [0, 200, 400, 200, 0], 
            y: [0, -100, 0, 100, 0],
            scale: [1, 1.1, 0.95, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Circle 2 */}
        <motion.div 
          className="absolute top-1/2 right-16 w-56 h-56 rounded-full blur-2xl bg-brand-primary opacity-18"
          animate={{ 
            x: [0, -200, -400, -200, 0], 
            y: [0, 100, 0, -100, 0],
            scale: [1, 0.9, 1.15, 0.8, 1]
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Circle 3 - Companion that follows scroll */}
        <motion.div 
          className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full blur-2xl bg-brand-primary opacity-16"
          animate={{ 
            x: [0, 100, -100, 50, 0], 
            y: [0, -50, 50, -25, 0],
            scale: [1, 1.2, 0.85, 1.1, 1]
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-brand-primary opacity-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  // default variant with fluid orbiting animation
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-2xl bg-brand-primary opacity-20"
        animate={{ 
          x: [0, 300, 600, 300, 0], 
          y: [0, -150, 0, 150, 0] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-2xl bg-brand-primary opacity-15"
        animate={{ 
          x: [0, -250, -500, -250, 0], 
          y: [0, 100, 0, -100, 0],
          scale: [1, 1.1, 1, 0.9, 1] 
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-2xl bg-brand-primary opacity-10"
        animate={{ 
          x: [0, 200, 0, -200, 0],
          y: [0, -200, -400, -200, 0],
          scale: [1, 1.05, 1.2, 1.05, 1] 
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HolographicBackground;