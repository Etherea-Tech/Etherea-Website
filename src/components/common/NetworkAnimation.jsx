import React from 'react';
import { motion } from 'framer-motion';

const NetworkAnimation = () => {
  const nodes = [
    { id: 1, label: 'Build', x: 100 },
    { id: 2, label: 'Test', x: 300 },
    { id: 3, label: 'Monitor', x: 500 },
    { id: 4, label: 'Deploy', x: 700 }
  ];

  const topY = 100;
  const bottomY = 500;
  const centerX = 400;

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 800 600" className="w-full h-full max-w-5xl mx-auto scale-110" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          <filter id="smallGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Horizontal background line */}
        <line x1="0" y1={topY} x2="800" y2={topY} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        
        {/* Central Vertical stem baseline glow */}
        <line x1={centerX} y1={topY} x2={centerX} y2={bottomY} stroke="#ffffff" strokeWidth="8" opacity="0.03" filter="url(#glow)" />

        {/* Paths and Nodes */}
        {nodes.map((node, i) => {
          // Smooth fountain curve from bottom center to node
          const cp1Y = bottomY - 200;
          const cp2Y = topY + 150;
          const pathD = `M ${centerX} ${bottomY} C ${centerX} ${cp1Y}, ${node.x} ${cp2Y}, ${node.x} ${topY}`;
          
          return (
            <g key={node.id}>
              {/* Ambient Glow behind path */}
              <path d={pathD} fill="none" stroke="#ffffff" strokeWidth="12" opacity="0.03" filter="url(#glow)" />
              
              {/* Base Path */}
              <path d={pathD} fill="none" stroke="url(#lineGradient)" strokeWidth="1.5" />
              
              {/* Glow Pulse along the path */}
              <motion.path 
                d={pathD} fill="none" stroke="#ffffff" strokeWidth="2.5" filter="url(#smallGlow)"
                style={{ pathLength: 0.1, pathSpacing: 1 }}
                animate={{ pathOffset: [0, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
              />

              {/* Node Pill */}
              <rect x={node.x - 45} y={topY - 16} width="90" height="32" rx="16" fill="#050505" stroke="rgba(255,255,255,0.15)" />
              
              {/* Node Text */}
              <text x={node.x} y={topY + 4} fill="#e5e7eb" fontSize="12" fontWeight="500" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
                {node.label}
              </text>
            </g>
          );
        })}
        
        {/* Bottom Source glowing orb */}
        <circle cx={centerX} cy={bottomY} r="4" fill="#fff" filter="url(#smallGlow)" opacity="0.8" />
        
        {/* Continuous pulse escaping from the bottom */}
        <motion.circle 
          cx={centerX} cy={bottomY} r="6" fill="#fff" filter="url(#glow)"
          animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Etherea Tech Label at Bottom Center */}
        <g transform={`translate(${centerX}, ${bottomY + 35})`}>
          <rect x="-70" y="-16" width="140" height="32" rx="8" fill="#000" stroke="rgba(255,255,255,0.3)" />
          <text x="0" y="4" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="2">
            ETHEREA TECH
          </text>
        </g>
      </svg>
      
      {/* Top overlay to fade out lines into the background smoothly */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default NetworkAnimation;
