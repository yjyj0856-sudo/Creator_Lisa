import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, MousePointerClick, Cpu, Workflow, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-grid px-6 py-20 text-center"
      id="hero"
    >
      {/* Background radial glowing effects */}
      <div className="absolute inset-0 bg-[#050408] overflow-hidden">
        <img 
          src="https://cdn.midjourney.com/b75f1580-f26f-4cdc-a5b8-d8645fcf6fa6/0_1.png"
          alt="Hero Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050408]/60 to-[#050408]" />
      </div>
      <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        {/* Badge: 은평캠퍼스 · 새싹 4기 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-2 rounded-full bg-purple-950/40 px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-300 ring-1 ring-purple-500/30 backdrop-blur-sm"
        >
          <Sparkles className="h-3 w-3 animate-pulse text-purple-400" />
          <span>은평캠퍼스 · 새싹 4기</span>
        </motion.div>

        {/* Heading: 기획자가 되는 가장 빠른 길 */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          기획자가 되는 <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent text-glow">가장 빠른 길</span>
        </motion.h1>

        {/* Subtitle: 포트폴리오, 사람, 그리고 기획력 — 이 과정이 당신에게 남기는 세 가지입니다. */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-purple-200/80 sm:text-lg md:text-xl"
        >
          포트폴리오, 사람, 그리고 기획력 — 이 과정이 당신에게 남기는 세 가지입니다.
        </motion.p>

        {/* Instructor Info: 김연주 | 국제회의기획(PCO) 15년 */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-5 py-3 backdrop-blur-md"
        >
          <div className="flex h-10 px-3.5 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 font-display text-xs font-bold text-white uppercase tracking-wider">
            Planner
          </div>
          <div className="text-left">
            <p className="text-xs text-purple-400/80 font-medium">COURSE LEADER</p>
            <p className="font-sans text-sm font-semibold text-white">김연주 | 국제회의기획(PCO) 15년</p>
          </div>
        </motion.div>

        {/* Interactive Visual Element: Glassmorphic MICE Blueprint Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 w-full max-w-3xl rounded-2xl border border-purple-500/10 bg-gradient-to-b from-purple-950/20 to-black/40 p-6 backdrop-blur-lg shadow-2xl shadow-purple-950/10"
        >
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/50" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/50" />
              <span className="h-3 w-3 rounded-full bg-green-500/50" />
              <span className="ml-2 font-mono text-xs text-purple-400/70">MICE_AI_PLANNING_STUDIO_V4.0</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-purple-500/10 px-2.5 py-1 text-[10px] font-mono text-purple-300">
              <Cpu className="h-3 w-3 animate-spin" />
              <span>AI CO-PILOT ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
            {/* Interactive blueprint cards */}
            <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4 hover:border-purple-500/20 transition-all duration-300">
              <div className="mb-2 text-purple-400">
                <Layers className="h-5 w-5" />
              </div>
              <p className="font-mono text-[10px] text-purple-400/60 uppercase">STAGE 01</p>
              <h4 className="font-sans text-sm font-semibold text-white mt-0.5">기획 설계 & 정의</h4>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-purple-950">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full bg-purple-500" 
                />
              </div>
              <p className="font-sans text-[11px] text-purple-300/60 mt-2">AI 기반 아이디어 모델링</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4 hover:border-indigo-500/20 transition-all duration-300">
              <div className="mb-2 text-indigo-400">
                <Workflow className="h-5 w-5" />
              </div>
              <p className="font-mono text-[10px] text-indigo-400/60 uppercase">STAGE 02</p>
              <h4 className="font-sans text-sm font-semibold text-white mt-0.5">MICE 포트폴리오</h4>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-indigo-950">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 2, delay: 1.3 }}
                  className="h-full bg-indigo-500" 
                />
              </div>
              <p className="font-sans text-[11px] text-indigo-300/60 mt-2">실무 피드백 & 결과 제작</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4 hover:border-purple-500/20 transition-all duration-300">
              <div className="mb-2 text-purple-400">
                <Compass className="h-5 w-5" />
              </div>
              <p className="font-mono text-[10px] text-purple-400/60 uppercase">STAGE 03</p>
              <h4 className="font-sans text-sm font-semibold text-white mt-0.5">현업 네트워크 연계</h4>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-purple-950">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 2, delay: 1.6 }}
                  className="h-full bg-purple-400" 
                />
              </div>
              <p className="font-sans text-[11px] text-purple-300/60 mt-2">현장 관계자 피칭 준비</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant scroll hint */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 z-10 flex flex-col items-center gap-1 cursor-pointer text-purple-400/60 hover:text-purple-400 transition-colors duration-300"
        onClick={() => document.getElementById('what-you-get')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">EXPLORE</span>
        <MousePointerClick className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
