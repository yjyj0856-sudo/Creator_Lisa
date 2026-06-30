import React from 'react';
import { motion } from 'motion/react';
import { Palette, Compass, Trophy, Library } from 'lucide-react';

export default function BrandsBusiness() {
  const brands = [
    {
      id: 1,
      tag: 'MICE 브랜딩 · 디자인 · 교육',
      title: '플랜킷 스튜디오',
      description: 'MICE 브랜딩 디자인을 중심으로 교육과 기획을 함께하는 스튜디오입니다.',
      icon: Palette,
      color: 'from-purple-500/20 to-indigo-500/20',
      iconColor: 'text-purple-400',
    },
    {
      id: 2,
      tag: '어린이 기획자 과정',
      title: '리틀 플래너스',
      description: "아이들이 직접 기획하고 만들어보는 '어린이 기획자' 교육 브랜드입니다.",
      icon: Trophy,
      color: 'from-indigo-500/20 to-purple-600/20',
      iconColor: 'text-indigo-400',
    },
    {
      id: 3,
      tag: '청소년 진로 · 포트폴리오',
      title: '중·고등 포트폴리오 과정',
      description: '중·고등학생이 자신만의 포트폴리오를 만들어가는 과정입니다.',
      icon: Compass,
      color: 'from-purple-600/20 to-pink-500/20',
      iconColor: 'text-purple-400',
    },
    {
      id: 4,
      tag: '도서관 · 지역문화재단',
      title: 'AI 독서로드맵 강의',
      description: '독서토론 교육자로서, 도서관·지역문화재단을 대상으로 AI를 활용한 독서로드맵 기획 강의를 진행합니다.',
      icon: Library,
      color: 'from-pink-500/20 to-purple-500/20',
      iconColor: 'text-pink-400',
    },
  ];

  return (
    <section 
      className="relative w-full bg-[#07060A] px-6 py-24 md:px-12 md:py-32 overflow-hidden"
      id="brands"
    >
      {/* Background image and overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="https://cdn.midjourney.com/477f148b-b42a-4c14-b54a-0d45e1c6fa0c/0_3.png"
          alt="Brands Background"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07060A] via-transparent to-[#07060A]" />
        <div className="absolute inset-0 bg-[#07060A]/30" />
      </div>

      <div className="absolute left-1/2 bottom-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs font-bold tracking-widest text-purple-400 uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            BRANDS & BUSINESS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-transparent bg-gradient-to-b from-white via-purple-100 to-purple-200 bg-clip-text text-glow drop-shadow-[0_5px_15px_rgba(0,0,0,0.95)] sm:text-4xl md:text-5xl"
          >
            운영 중인 사업과 브랜드
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {brands.map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.01] p-6 backdrop-blur-sm hover:border-purple-500/20 hover:bg-white/[0.02] transition-all duration-300"
              >
                {/* Visual Accent Layer */}
                <div className={`absolute -inset-y-0 left-0 w-[4px] bg-gradient-to-b ${brand.color.replace('/20', '')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Top Meta info */}
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-xs font-semibold text-purple-400/80 tracking-wide">
                        {brand.tag}
                      </span>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.02] ring-1 ring-white/5 ${brand.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    {/* Brand Name */}
                    <h3 className="mt-6 font-sans text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {brand.title}
                    </h3>

                    {/* Brand Description */}
                    <p className="mt-3 font-sans text-sm leading-relaxed text-purple-200/60 group-hover:text-purple-200/80 transition-colors duration-300">
                      {brand.description}
                    </p>
                  </div>

                  {/* Aesthetic card indicator */}
                  <div className="mt-8 flex items-center justify-between border-t border-white/[0.04] pt-4">
                    <span className="font-mono text-[10px] text-white/10 uppercase group-hover:text-purple-400/20 transition-colors">
                      STU_ID_{brand.id.toString().padStart(2, '0')}
                    </span>
                    <span className="font-sans text-xs font-medium text-purple-400/0 group-hover:text-purple-400/80 group-hover:translate-x-1 transition-all duration-300">
                      자세히 보기 &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
