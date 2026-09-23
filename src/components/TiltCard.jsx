import React, { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', isDarkMode = true }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setTilt({
      rotateX,
      rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0, 0, 1)',
      }}
      className={`relative overflow-hidden rounded-2xl border backdrop-blur-xl shadow-xl ${
        isDarkMode ? 'border-zinc-800 bg-zinc-900/60 shadow-zinc-950/30' : 'border-zinc-200 bg-white/80 shadow-zinc-200/80'
      } ${className}`}
    >
      {/* Dynamic Specular Glare */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-60 z-10"
          style={{
            background: `radial-gradient(400px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(99, 102, 241, 0.15), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}