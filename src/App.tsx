/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Home from './components/Home';
import AppSystem from './components/AppSystem';
import Characters from './components/Characters';

export default function App() {
  const [page, setPage] = useState('홈');

  // 벚꽃 잎 날리는 애니메이션 효과
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDuration = Math.random() * 3 + 5 + 's'; // 5~8초
      petal.style.width = Math.random() * 8 + 8 + 'px'; // 8~16px
      petal.style.height = Math.random() * 8 + 8 + 'px';
      
      const container = document.getElementById('petals-container');
      if (container) {
        container.appendChild(petal);
        setTimeout(() => {
          if (container.contains(petal)) {
            petal.remove();
          }
        }, 8000);
      }
    };

    const interval = setInterval(createPetal, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-pink-200 selection:text-pink-900 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* 벚꽃 컨테이너 */}
      <div id="petals-container" className="fixed inset-0 z-0 pointer-events-none overflow-hidden" />

      {/* 네비게이션 바 */}
      <nav className="fixed top-6 right-6 z-50 flex gap-2 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-sm border border-pink-100">
        {['홈', '어플 시스템', '등장인물'].map(tab => (
          <button 
            key={tab} 
            onClick={() => setPage(tab)} 
            className={`px-5 py-2 rounded-full font-serif text-sm md:text-base transition-all duration-300 ${
              page === tab 
                ? 'bg-pink-400 text-white shadow-md' 
                : 'text-pink-700 hover:bg-pink-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* 메인 콘텐츠 영역 */}
      <main className="relative z-10 pt-32 pb-24 px-6 min-h-screen">
        <AnimatePresence mode="wait">
          {page === '홈' && <Home key="home" />}
          {page === '어플 시스템' && <AppSystem key="system" />}
          {page === '등장인물' && <Characters key="characters" />}
        </AnimatePresence>
      </main>
    </div>
  );
}
