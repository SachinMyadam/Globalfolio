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
    <div className="flex flex-col items-center w-full max-w-md">
      <button 
        onClick={() => setShowAnalysis(!showAnalysis)}
        className={`
          px-8 py-3 rounded-full font-semibold transition-all shadow-sm flex items-center justify-center gap-2 border
          ${showAnalysis 
            ? 'bg-purple-600 text-white border-purple-600 scale-105' 
            : 'bg-white text-black border-gray-200 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 hover:scale-105'
          }
        `}
      >
        ✨ {showAnalysis ? "Close Analysis" : label}
      </button>

      {/* This part shows the message on the screen smoothly */}
      {showAnalysis && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          className="mt-2 bg-white p-6 rounded-xl border border-purple-100 shadow-xl text-left w-full relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-600"></div>
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">
            AI Agent Report
          </p>
          <p className="text-gray-800 font-medium leading-relaxed">
            {alertMessage}
          </p>
        </motion.div>
      )}
    </div>
  );
}