import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ThreeThings from './components/ThreeThings';
import EmphasisBanner from './components/EmphasisBanner';
import InstructorBio from './components/InstructorBio';
import BrandsBusiness from './components/BrandsBusiness';
import LectureHistory from './components/LectureHistory';
import EndingFooter from './components/EndingFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050408] text-white selection:bg-purple-600/30 selection:text-purple-100">
      {/* Header (상단 바) */}
      <Header />

      <main className="w-full">
        {/* Section 1: Hero (히어로 첫 화면) */}
        <Hero />

        {/* Section 2: WHAT YOU GET (이 과정에서 얻는 세 가지) */}
        <ThreeThings />

        {/* Section 3: 강조 띠 (한 줄) */}
        <EmphasisBanner />

        {/* Section 4: INSTRUCTOR (강사 소개) */}
        <InstructorBio />

        {/* Section 5: BRANDS & BUSINESS (운영 중인 사업과 브랜드) */}
        <BrandsBusiness />

        {/* Section 6: LECTURE HISTORY (AI를 활용한 MICE 기획 강의 이력) */}
        <LectureHistory />

        {/* Section 7: 맺음말 + 푸터 */}
        <EndingFooter />
      </main>
    </div>
  );
}
