import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="w-full mx-auto text-center flex flex-col items-center pt-12 px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto mb-16"
      >
        <img 
          src="https://dcm.ajrd.org/title.png" 
          alt="당신의 꿈속으로" 
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl glass-panel p-10 md:p-16 rounded-[3rem] w-full relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300" />
        
        <h2 className="text-2xl md:text-4xl font-serif text-pink-600 mb-8 flex items-center justify-center gap-3">
          <Sparkles className="w-6 h-6 text-pink-300" />
          2026년 대한민국, 다온대학교
          <Sparkles className="w-6 h-6 text-pink-300" />
        </h2>
        
        <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-light mb-12 break-keep">
          <p>
            따스한 봄바람이 불어오는 2026년 3월.<br className="hidden md:block"/>
            벚꽃이 흩날리는 다온대학교 캠퍼스에는 새 학기의 설렘과 풋풋한 감정이 피어납니다.
          </p>
          <p>
            우연한 만남이 인연이 되고, 평범했던 일상이 특별해지는 곳.<br className="hidden md:block"/>
            현실과 꿈의 경계가 흐려지는 달콤하고 신비로운 시간 속으로 당신을 초대합니다.
          </p>
        </div>

        <div className="inline-block bg-pink-50 border border-pink-200 rounded-full px-8 py-4 shadow-sm">
          <p className="text-pink-500 font-serif text-xl md:text-2xl flex items-center gap-2">
            <Heart className="w-5 h-5 fill-pink-400 text-pink-400" />
            "루시드 드림을 이용해서 당신의 이야기를 만들어나가세요."
            <Heart className="w-5 h-5 fill-pink-400 text-pink-400" />
          </p>
        </div>
      </motion.div>

      {/* 다온대학교 Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="max-w-4xl w-full mt-12 glass-panel p-8 md:p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white">
          <img 
            src="https://dcm.ajrd.org/university.png" 
            alt="다온대학교 전경" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-3xl md:text-4xl font-serif text-pink-600 mb-4 flex items-center gap-3">
            🏫 다온대학교
          </h3>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            서울 성북구에 위치한 4년제 명문대학교.<br/>
            수많은 청춘들이 꿈을 키워나가는 배움의 전당입니다.
          </p>
        </div>
      </motion.div>

      {/* 필름 동아리 홍보 게시물 Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="max-w-4xl w-full mt-16 mb-12 relative"
      >
        {/* 게시판 느낌의 배경 패널 */}
        <div className="bg-[#fdfbf7] p-8 md:p-12 rounded-sm shadow-xl border border-slate-200 transform rotate-1 relative max-w-3xl mx-auto">
          {/* 테이프 장식 */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm transform -rotate-2" />
          
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center font-serif tracking-tight">
            🎬 영화 동아리 [필름] 부원 모집!
          </h3>
          
          <div className="space-y-8 text-left text-slate-700">
            <div>
              <h4 className="text-2xl font-bold text-pink-600 mb-3 flex items-center gap-2">
                <span className="text-2xl">📌</span> 개요
              </h4>
              <p className="text-lg md:text-xl ml-8 font-medium">영화 감상 및 제작 동아리 🎥</p>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-pink-600 mb-3 flex items-center gap-2">
                <span className="text-2xl">🏃‍♀️</span> 활동
              </h4>
              <ul className="list-disc list-inside ml-8 text-lg md:text-xl space-y-3 font-medium">
                <li>영화는 연 1~2회 제작! 🎬</li>
                <li>학기말이나 축제 때 동아리의 자작영화 감상회 개최 ✨</li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-pink-600 mb-3 flex items-center gap-2">
                <span className="text-2xl">📝</span> 규칙
              </h4>
              <ul className="list-disc list-inside ml-8 text-lg md:text-xl space-y-3 font-medium">
                <li>동아리방은 자유롭게 이용 가능. 대신, 동아리방은 깨끗하게 사용할 것!!🧹</li>
                <li>학기 회비는 3만원!💵</li>
              </ul>
            </div>

            {/* 노란색 메모 (포스트잇 느낌) */}
            <div className="relative mt-10 mx-auto md:ml-auto md:mr-0 w-[90%] max-w-[18rem] md:w-72 bg-yellow-200 p-5 rounded-br-2xl shadow-md transform rotate-3 border border-yellow-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-500/20 rounded-full" />
              <p className="text-slate-800 font-medium leading-relaxed text-base md:text-lg break-keep">
                목요일마다 모여서 영화 감상해요! 🍿<br/>
                <span className="text-sm md:text-base text-slate-600">(영화관 혹은 동아리방)</span><br/>
                <span className="text-red-500 font-bold mt-2 block">※ 시험기간에는 바쁘니 패스~ 📚💦</span>
              </p>
            </div>

            {/* 낙서 (학생이 쓴 느낌) */}
            <div className="mt-8 text-center md:absolute md:bottom-8 md:left-8 md:text-left transform md:-rotate-6">
              <p className="text-black-600 font-bold text-lg md:text-2xl tracking-wider break-keep" style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', sans-serif" }}>
                방학 때 동아리 MT도 간다!! 🌊🏖️
              </p>
            </div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}
