"use client";
import { motion, useSpring, useMotionValue } from 'framer-motion';
import React from 'react';

const CHICKEN_DOODLES = [
  { icon: "🐔", size: "text-6xl", top: "15%", left: "10%" },
  { icon: "🐣", size: "text-5xl", top: "25%", left: "80%" },
  { icon: "🍗", size: "text-7xl", top: "70%", left: "15%" },
  { icon: "🥚", size: "text-4xl", top: "60%", left: "75%" },
  { icon: "🐤", size: "text-5xl", top: "10%", left: "50%" },
  { icon: "👑", size: "text-6xl", top: "80%", left: "45%" },
];

function Doodle({ doodle }: { doodle: any }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // This creates that "moving away from mouse" effect
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Simple logic to wiggle when mouse is near
    mouseX.set(Math.random() * 20 - 10);
    mouseY.set(Math.random() * 20 - 10);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{ 
        position: 'absolute', 
        top: doodle.top, 
        left: doodle.left, 
        x: springX, 
        y: springY,
        cursor: 'pointer'
      }}
      whileHover={{ scale: 1.4, rotate: 15 }}
      className={`${doodle.size} select-none opacity-40 hover:opacity-100 transition-opacity`}
    >
      {doodle.icon}
    </motion.div>
  );
}

export default function DoodleScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
      {CHICKEN_DOODLES.map((d, i) => (
        <Doodle key={i} doodle={d} />
      ))}
      {/* Noise texture to hide any banding */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://res.cloudinary.com/dqcsk8rsc/image/upload/v1664265910/Project%20Images/noise_v9arba.png')]" />
    </div>
  );
}
