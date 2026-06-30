import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUp } from 'lucide-react';

export default function EndingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-grid px-6 pt-32 pb-16 md:px-12 md:pb-20"
      id="ending-footer"
    >
      {/* Background image and overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="https://cdn.midjourney.com/a17f452e-1799-4570-ae30-33601e5783b9/0_3.png"
          alt="Footer Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050408]/20 via-[#050408]/50 to-[#050408]" />
      </div>
      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Decorative divider badge */}
        <div className="flex justify-center mb-10">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
          <div className="mx-4 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
            <Sparkles className="h-3 w-3 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        </div>

        {/* 맺음말: AI는 빠르게 일하는 법을 알려주지만, 무엇을 기획하고 누구와 함께할지는 여전히 사람의 몫입니다. 이 과정에서, 그 답을 함께 찾아갑니다. */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-xl font-medium leading-relaxed text-purple-100 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] sm:text-2xl md:text-3xl"
        >
          AI는 빠르게 일하는 법을 알려주지만, <br />
          무엇을 기획하고 누구와 함께 할지, 어떻게 할지는 <br />
          <span className="font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-glow drop-shadow-[0_2px_8px_rgba(168,85,247,0.4)]">
            여전히 사람의 몫
          </span>
          입니다. <br />
          이 과정에서, 그 답을 함께 찾아갑시다.
        </motion.p>

        {/* Action / Back to top button */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/[0.04] pt-12 md:flex-row">
          
          {/* Back to top clicker */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 text-xs font-semibold text-purple-300 ring-1 ring-white/5 hover:bg-purple-600/10 hover:ring-purple-500/30 transition-all duration-300"
          >
            <span>상단으로 이동</span>
            <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>

          {/* 푸터(하단 우측): ⓒ 2026 김연주. All rights reserved. */}
          <p className="font-sans text-xs tracking-wide text-purple-300/40">
            ⓒ 2026 김연주. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
