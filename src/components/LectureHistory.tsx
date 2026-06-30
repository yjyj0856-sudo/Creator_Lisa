import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Star, Users, Award, Monitor, Landmark } from 'lucide-react';

export default function LectureHistory() {
  const historyItems = [
    {
      id: 1,
      text: '새싹 캠퍼스 AI활용 MICE기획자 양성과정 — 1기 ~ 3기 진행 · 현재 4기 진행 중',
      icon: Award,
      badge: 'MAIN COURSE',
      badgeColor: 'bg-purple-500/10 text-purple-300 ring-purple-500/30',
      glow: 'shadow-purple-500/20',
    },
    {
      id: 2,
      text: '전국 MICE 연합동아리 S.O.M 특강',
      icon: Users,
      badge: 'SPECIAL LECTURE',
      badgeColor: 'bg-indigo-500/10 text-indigo-300 ring-indigo-500/30',
      glow: 'shadow-indigo-500/10',
    },
    {
      id: 3,
      text: '인천관광공사 영 마이스(Young MICE)',
      icon: Landmark,
      badge: 'PUBLIC SECTOR',
      badgeColor: 'bg-pink-500/10 text-pink-300 ring-pink-500/30',
      glow: 'shadow-pink-500/10',
    },
    {
      id: 4,
      text: '인천대학교 강의',
      icon: Star,
      badge: 'UNIVERSITY',
      badgeColor: 'bg-purple-500/10 text-purple-300 ring-purple-500/30',
      glow: 'shadow-purple-500/10',
    },
    {
      id: 5,
      text: '기업 재직자 대상 ZOOM 강의 런칭',
      icon: Monitor,
      badge: 'ZOOM LIVE',
      badgeColor: 'bg-indigo-500/10 text-indigo-300 ring-indigo-500/30',
      glow: 'shadow-indigo-500/10',
    },
    {
      id: 6,
      text: "고양시 입주기업 대표 대상 'AI를 활용한 사업계획서' 과정 — 온·오프라인 진행 중",
      icon: Calendar,
      badge: 'FOR FOUNDERS',
      badgeColor: 'bg-pink-500/10 text-pink-300 ring-pink-500/30',
      glow: 'shadow-pink-500/10',
    },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#050408] px-6 py-24 md:px-12 md:py-32"
      id="lecture-history"
    >
      {/* Background image and overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="https://cdn.midjourney.com/a17f452e-1799-4570-ae30-33601e5783b9/0_2.png"
          alt="Lecture History Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-45"
        />
        {/* Dark radial and vertical gradient masks for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050408] via-transparent to-[#050408]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#050408]/50 to-[#050408]" />
        <div className="absolute inset-0 bg-[#050408]/65" />
      </div>

      <div className="absolute right-1/4 bottom-1/4 h-[350px] w-[350px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs font-bold tracking-widest text-purple-400 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
          >
            LECTURE HISTORY
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-transparent bg-gradient-to-b from-white via-purple-100 to-purple-200 bg-clip-text text-glow drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] sm:text-4xl md:text-5xl"
          >
            AI를 활용한 MICE 기획 강의 이력
          </motion.h2>
        </div>

        {/* Timeline Stack */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-500/40 via-indigo-500/20 to-purple-500/5" />

          <div className="flex flex-col gap-8">
            {historyItems.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative flex items-center w-full"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#090810] border border-purple-500/40 text-purple-400 shadow-lg ring-4 ring-purple-950/60">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Timeline Card */}
                  <div className="w-full pl-16">
                    <div className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0a15]/75 p-6 backdrop-blur-md hover:border-purple-500/30 hover:bg-[#0c0a15]/90 transition-all duration-300 shadow-xl shadow-black/40">
                      
                      {/* Badge */}
                      <div className="inline-block mb-3 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300 ring-1 ring-purple-500/20">
                        {item.badge}
                      </div>

                      <p className="font-sans text-sm font-semibold leading-relaxed text-white md:text-base group-hover:text-purple-200 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {item.text}
                      </p>

                      <div className="absolute bottom-2 right-4 font-mono text-[9px] text-white/10 select-none">
                        HIST_REF_{item.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
