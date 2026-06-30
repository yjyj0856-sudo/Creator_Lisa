import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function EmphasisBanner() {
  return (
    <section 
      className="relative w-full overflow-hidden border-y border-purple-500/10 bg-gradient-to-r from-purple-950/20 via-[#0B0A0F] to-indigo-950/20 py-10"
      id="emphasis-banner"
    >
      {/* Background linear sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
            <Sparkles className="h-4 w-4" />
          </div>
          
          <h3 className="font-sans text-base font-semibold leading-relaxed text-purple-100 sm:text-lg md:text-xl lg:text-2xl">
            수료 후 당신에게는 —{' '}
            <span className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-glow">
              보여줄 포트폴리오
            </span>
            ,{' '}
            <span className="font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-glow">
              함께할 사람
            </span>
            , 그리고 어디서든 통하는{' '}
            <span className="font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-glow">
              기획력
            </span>
            이 남습니다.
          </h3>

          <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 md:flex">
            <Sparkles className="h-4 w-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
