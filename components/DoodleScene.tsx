"use client";
import { motion } from 'framer-motion';

// Hand-picked chicken cartoon icons
const CHICKENS = ["🍗", "👑", "🐔", "🐥", "🐣", "🥚"];

export default function DoodleScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
      {/* The "Wavy" Glass Layer */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-500/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-600/10 blur-[120px]" />
      </div>

      {/* Floating Interactive Doodles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileHover={{ scale: 2, rotate: 20 }}
          className="absolute cursor-grab active:cursor-grabbing text-4xl opacity-30 hover:opacity-100 transition-opacity"
          style={{ 
            left: `${Math.random() * 90}%`, 
            top: `${Math.random() * 90}%` 
          }}
        >
          {CHICKENS[i % CHICKENS.length]}
        </motion.div>
      ))}
    </div>
  );
}
