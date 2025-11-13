"use client";
import { useState } from 'react';
import * as motion from "framer-motion/client";

export default function AiButton({ 
  label, 
  alertMessage 
}: { 
  label: string, 
  alertMessage: string 
}) {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    // Make the whole component full-width on small screens, auto-width on desktop
    <div className="relative flex flex-col items-center w-full sm:w-auto"> 
      
      <button 
        onClick={() => setShowAnalysis(!showAnalysis)}
        className={`
          h-12 px-8 rounded-full font-semibold transition-all shadow-sm flex items-center justify-center gap-2 border whitespace-nowrap
          w-full sm:w-auto // 👈 Full width on mobile, auto on desktop
          ${showAnalysis 
            ? 'bg-purple-600 text-white border-purple-600' 
            : 'bg-white text-black border-gray-200 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200'
          }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        {showAnalysis ? "Close" : label}
      </button>

      {/* Floating Card */}
      {showAnalysis && (
        <motion.div 
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 10, scale: 1 }}
          // 👇 Full-width on mobile, 80-wide (320px) on desktop
          className="absolute top-full mt-2 left-0 right-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-80 z-50 bg-white p-5 rounded-xl border border-purple-100 shadow-2xl text-left"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-600"></div>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
            AI Agent Report
          </p>
          <p className="text-gray-800 text-sm font-medium leading-relaxed">
            {alertMessage}
          </p>
        </motion.div>
      )}
    </div>
  );
}