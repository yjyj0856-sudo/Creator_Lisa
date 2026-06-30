import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-[#2D273D]/50 bg-[#050408]/80 backdrop-blur-md"
      id="header"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Left: 새싹 4기 */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/20 text-purple-400 ring-1 ring-purple-500/30">
            <GraduationCap className="h-4 w-4" />
          </div>
          <span className="font-sans text-sm font-semibold tracking-wide text-white md:text-base">
            새싹 4기
          </span>
        </div>

        {/* Center: AI활용 MICE기획자 양성과정 */}
        <div className="hidden sm:block">
          <span className="font-sans text-xs font-medium tracking-wider text-purple-200/80 md:text-sm">
            AI활용 MICE기획자 양성과정
          </span>
        </div>

        {/* Right: 강사 김연주 */}
        <div className="flex items-center gap-1.5 rounded-full bg-purple-950/40 px-3 py-1 ring-1 ring-purple-500/20">
          <Award className="h-3.5 w-3.5 text-purple-400" />
          <span className="font-sans text-xs font-medium text-purple-300 md:text-sm">
            강사 김연주
          </span>
        </div>
      </div>
    </motion.header>
  );
}
