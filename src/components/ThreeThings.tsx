import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Users2, Sparkles } from 'lucide-react';

export default function ThreeThings() {
  const cards = [
    {
      id: '01',
      title: '포트폴리오',
      description: "배운 것을 '보여줄 수 있는 결과물'로 만듭니다. 수업이 끝나면 말로 설명하는 대신, 내 손으로 만든 기획 결과물을 내밀 수 있습니다.",
      icon: Briefcase,
      color: 'from-purple-500 to-indigo-500',
      glowColor: 'rgba(168, 85, 247, 0.15)',
    },
    {
      id: '02',
      title: '사람',
      description: '기획은 결국 사람을 모으고 연결하는 일입니다. 함께 배우는 동료, 그리고 현업으로 이어지는 관계가 과정 안에서 만들어집니다.',
      icon: Users2,
      color: 'from-indigo-500 to-purple-600',
      glowColor: 'rgba(99, 102, 241, 0.15)',
    },
    {
      id: '03',
      title: '기획력',
      description: '도구를 다루는 법이 아니라, 문제를 정의하고 방향을 잡는 힘을 기릅니다. AI는 거들 뿐, 기획의 중심은 언제나 사람입니다.',
      icon: Sparkles,
      color: 'from-purple-600 to-indigo-400',
      glowColor: 'rgba(168, 85, 247, 0.15)',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#07060A] px-6 py-24 md:px-12 md:py-32"
      id="what-you-get"
    >
      {/* Background glow */}
      <div className="absolute right-10 top-1/4 h-[350px] w-[350px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 h-[350px] w-[350px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs font-bold tracking-widest text-purple-400 uppercase"
          >
            WHAT YOU GET
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            이 과정에서 얻는 세 가지
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-sans text-sm text-purple-200/60 md:text-base"
          >
            3기까지 진행하며, 정말 중요하다고 확신하게 된 것들입니다.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-2xl border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent p-8 backdrop-blur-sm transition-colors hover:border-purple-500/30"
                style={{
                  boxShadow: `0 10px 30px -15px ${card.glowColor}`,
                }}
              >
                {/* Background decorative accent card number */}
                <div className="absolute right-6 top-6 font-display text-7xl font-black text-white/[0.02] pointer-events-none select-none">
                  {card.id}
                </div>

                {/* Card Icon Header */}
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} text-white shadow-lg shadow-purple-500/10`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-sm font-semibold text-purple-400">
                    CARD {card.id}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="mt-6 font-sans text-xl font-bold text-white sm:text-2xl">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="mt-4 font-sans text-sm leading-relaxed text-purple-200/70 sm:text-base">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
