import React from 'react';
import { motion } from 'motion/react';
import { User, ShieldCheck, Mail, BookOpen } from 'lucide-react';

export default function InstructorBio() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#050408] px-6 py-24 md:px-12 md:py-32"
      id="instructor"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-10 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs font-bold tracking-widest text-purple-400 uppercase"
          >
            INSTRUCTOR
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            강사 소개
          </motion.h2>
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/[0.05] bg-gradient-to-b from-purple-950/10 to-transparent p-8 backdrop-blur-sm md:p-12">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            
            {/* Left: Professional Silhouette / Profile Badge (1/3 of space) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center md:col-span-4"
            >
              <div className="relative flex h-52 w-52 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600/30 via-indigo-500/30 to-purple-500/20 p-[1.5px] ring-1 ring-purple-500/30 overflow-hidden shadow-xl shadow-purple-950/20">
                <img 
                  src="https://cdn.pixabay.com/photo/2020/10/21/18/07/woman-5673901_1280.jpg"
                  alt="김연주 강사"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover rounded-2xl filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-500"
                />
                {/* Decorative glows */}
                <div className="absolute -inset-0.5 rounded-2xl bg-purple-500/20 blur-sm -z-10 animate-pulse" />
              </div>

              {/* Quick stats list */}
              <div className="mt-6 flex flex-col gap-2.5 w-full max-w-[200px]">
                <div className="flex items-center gap-2 rounded-lg bg-white/[0.01] px-3 py-1.5 ring-1 ring-white/5">
                  <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
                  <span className="font-sans text-xs text-purple-300">검증된 기획 경력</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/[0.01] px-3 py-1.5 ring-1 ring-white/5">
                  <BookOpen className="h-3.5 w-3.5 text-purple-400" />
                  <span className="font-sans text-xs text-purple-300">새싹 1기~4기 전문 강사</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Text and description (2/3 of space) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col justify-center md:col-span-8"
            >
              <div className="inline-block self-start rounded-full bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300 ring-1 ring-purple-500/20">
                INSTRUCTOR SPEC
              </div>

              <h3 className="mt-4 font-sans text-2xl font-black text-white sm:text-3xl">
                김연주
              </h3>

              <p className="mt-2 font-sans text-sm font-semibold tracking-wide text-purple-300 md:text-base">
                국제회의기획(PCO) 15년 · 기획 / 교육 / 브랜딩 사업가
              </p>

              <div className="mt-6 h-[1px] w-full bg-white/5" />

              <p className="mt-6 font-sans text-sm leading-relaxed text-purple-200/80 md:text-base">
                15년간 국제회의 기획 현장에서 일해온 MICE 기획 전문가입니다. 현재는 기획·교육·디자인을 아우르는 사업을 운영하며, 현장에서 쌓은 경험을 다음 세대 기획자에게 전하고 있습니다. AI를 활용한 MICE 기획 강의를 새싹 1기부터 이어오고 있으며, &apos;도구보다 사람과 기획력&apos;이라는 관점으로 교육합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
