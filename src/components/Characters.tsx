import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

type Character = {
  name: string;
  gender: string;
  age: number;
  dept: string;
  mbti: string;
  image: string;
  color: string;
  description: string;
  tags: string[];
  secretTitle?: string;
  secretDesc?: string;
};

const characters: Character[] = [
  {
    name: "김선아",
    gender: "女",
    age: 20,
    dept: "신문방송학과 1학년",
    mbti: "INFP",
    image: "https://dcm.ajrd.org/E/2.webp",
    color: "from-pink-500/20 to-rose-500/5",
    description: "호기심과 상상을 많이하는 몽상가 신입생",
    tags: ["#몽상가", "#호기심 만땅"]
  },
  {
    name: "한지은",
    gender: "女",
    age: 20,
    dept: "경영학과 1학년",
    mbti: "ENFP",
    image: "https://dcm.ajrd.org/A/2.webp",
    color: "from-orange-500/20 to-amber-500/5",
    description: "언제나 활발하고 모두가 귀여워 하는 신입생",
    tags: ["#비타민", "#간식창고"]
  },
  {
    name: "백서연",
    gender: "女",
    age: 23,
    dept: "연극영화과 4학년",
    mbti: "ESTP",
    image: "https://dcm.ajrd.org/B/2.webp",
    color: "from-red-500/20 to-rose-900/5",
    description: "차가워 보이지만 멋지고 씀씀이 좋은 동아리 회장님",
    tags: ["#부자누나", "#카리스마"]
  },
  {
    name: "서진하",
    gender: "女",
    age: 21,
    dept: "컴퓨터공학과 2학년",
    mbti: "INFP",
    image: "https://dcm.ajrd.org/C/2.webp",
    color: "from-blue-500/20 to-indigo-500/5",
    description: "언제나 베개를 좋아하고 잠 많고 귀여운 2학년",
    tags: ["#잠보", "#게으름"]
  },
  {
    name: "류채린",
    gender: "女",
    age: 22,
    dept: "시각디자인학과 3학년",
    mbti: "INFP",
    image: "https://dcm.ajrd.org/D/2.webp",
    color: "from-emerald-500/20 to-teal-500/5",
    description: "센스있고 멋지고 몸매 좋은 3학년 선배",
    tags: ["#센스쟁이", "#멋진누나"]
  },
  {
    name: "최예령",
    gender: "女",
    age: 29,
    dept: "연극영화과 교수",
    mbti: "ENFP",
    image: "https://dcm.ajrd.org/F/2.webp",
    color: "from-purple-500/20 to-fuchsia-500/5",
    description: "허접하고 귀여운 교수님 (본인은 멋진 교수로 보이려고 노력)",
    tags: ["#허접교수님", "#그래도 엘리트"]
  },
  {
    name: "정하연",
    gender: "女",
    age: 21,
    dept: "실용음악과 2학년",
    mbti: "ISTP",
    image: "https://dcm.ajrd.org/G/2.webp",
    color: "from-slate-500/20 to-gray-500/5",
    description: "쿨냉 츤데레지만 귀여운 거 좋아하는 톰보이",
    tags: ["#톰보이", "#차도녀(?)", "#사실 정 많음"]
  },
  {
    name: "강재호",
    gender: "男",
    age: 24,
    dept: "화학공학과 3학년",
    mbti: "ENTP",
    image: "https://dcm.ajrd.org/Z/2.webp",
    color: "from-cyan-500/20 to-blue-500/5",
    description: "유쾌하고 잘생긴 미남이지만 글쎄...?",
    tags: ["#미남", "#흐음 수상해..."],
    secretTitle: "강재호의 실체",
    secretDesc: "사실은 바람둥이~"
  },
  {
    name: "박유현",
    gender: "男",
    age: 21,
    dept: "전자공학과 3학년",
    mbti: "INP",
    image: "https://dcm.ajrd.org/X/2.webp",
    color: "from-indigo-500/20 to-violet-500/5",
    description: "엉뚱한(?) 상상을 많이하는 너드남. 정하연의 연인이자 소꿉친구",
    tags: ["#너드남", "#엉뚱해"]
  }
];

export default function Characters() {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [showSecret, setShowSecret] = useState(false);

  const handleSelectChar = (char: Character | null) => {
    setSelectedChar(char);
    setShowSecret(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-pink-600 mb-6">등장인물</h2>
        <p className="text-slate-500 text-lg">꿈과 현실의 경계에서 마주칠 인연들.</p>
      </div>

      <div className="space-y-16">
        {/* 필름 동아리 Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-pink-200 pb-3">
            <span className="text-3xl">🎬</span>
            <h3 className="text-2xl md:text-3xl font-serif text-pink-600">필름 동아리</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.filter(c => ["김선아", "한지은", "백서연", "서진하", "류채린", "최예령", "정하연", "강재호"].includes(c.name)).map((char, i) => (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleSelectChar(char)}
                className="cursor-pointer group relative overflow-hidden rounded-3xl glass-panel hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-pink-100/50 shadow-sm hover:shadow-md"
              >
                {/* Character Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-pink-50">
                  <img 
                    src={char.image} 
                    alt={char.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                </div>

                {/* Character Info */}
                <div className="relative z-10 p-5 -mt-16 text-center">
                  <h3 className="text-2xl font-serif text-slate-800 mb-1 drop-shadow-sm">
                    {char.name}
                  </h3>
                  <p className="text-pink-500 font-medium text-sm">{char.dept}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 그 외 인물 Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-3">
            <span className="text-3xl">👤</span>
            <h3 className="text-2xl md:text-3xl font-serif text-slate-600">그 외 인물</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.filter(c => !["김선아", "한지은", "백서연", "서진하", "류채린", "최예령", "정하연", "강재호"].includes(c.name)).map((char, i) => (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleSelectChar(char)}
                className="cursor-pointer group relative overflow-hidden rounded-3xl glass-panel hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-slate-200 shadow-sm hover:shadow-md"
              >
                {/* Character Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-50">
                  <img 
                    src={char.image} 
                    alt={char.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                </div>

                {/* Character Info */}
                <div className="relative z-10 p-5 -mt-16 text-center">
                  <h3 className="text-2xl font-serif text-slate-800 mb-1 drop-shadow-sm">
                    {char.name}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm">{char.dept}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedChar && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-pink-900/20 backdrop-blur-sm"
            onClick={() => handleSelectChar(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white/95 backdrop-blur-xl p-5 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl max-w-4xl w-full relative border border-pink-100 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => handleSelectChar(null)} 
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-slate-400 hover:text-pink-500 bg-pink-50 hover:bg-pink-100 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-4 md:mt-0">
                {/* Left: Image */}
                <div className="w-1/2 max-w-[180px] md:max-w-none mx-auto md:w-5/12 shrink-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-pink-50">
                  <img 
                    src={selectedChar.image} 
                    alt={selectedChar.name} 
                    className="w-full aspect-[3/4] object-cover object-top" 
                    referrerPolicy="no-referrer" 
                  />
                </div>

                {/* Right: Info */}
                <div className="w-full md:w-7/12 flex flex-col justify-center py-2 md:py-4">
                  <div className="mb-6 md:mb-8 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-serif text-pink-600 mb-4 md:mb-6 flex items-center justify-center md:justify-start gap-3 md:gap-4">
                      {selectedChar.name}
                      <span className="text-sm md:text-base font-sans px-3 py-1 md:px-4 md:py-1 rounded-full bg-pink-100 text-pink-600 shadow-sm border border-pink-200/50">
                        {selectedChar.gender}
                      </span>
                    </h3>
                    
                    <div className="space-y-3 md:space-y-4 text-slate-600 text-base md:text-lg inline-block text-left">
                      <p className="flex items-center gap-3 md:gap-4">
                        <span className="font-bold text-pink-400 w-12 md:w-16 shrink-0">나이</span> 
                        <span>{selectedChar.age}세</span>
                      </p>
                      <p className="flex items-center gap-3 md:gap-4">
                        <span className="font-bold text-pink-400 w-12 md:w-16 shrink-0">소속</span> 
                        <span className="break-keep">{selectedChar.dept}</span>
                      </p>
                      <p className="flex items-center gap-3 md:gap-4">
                        <span className="font-bold text-pink-400 w-12 md:w-16 shrink-0">MBTI</span> 
                        <span className="px-2 py-1 md:px-3 md:py-1 bg-slate-100 rounded-lg text-slate-700 font-mono text-sm md:text-base border border-slate-200">
                          {selectedChar.mbti}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Cloud Bubble for Custom Description */}
                  <div className="relative mt-4 md:mt-8 bg-white rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 shadow-[0_8px_30px_rgb(255,182,193,0.25)] border-2 border-pink-50">
                    {/* Cloud bumps */}
                    <div className="hidden md:block absolute -top-6 left-8 w-12 h-12 bg-white rounded-full border-t-2 border-l-2 border-pink-50" />
                    <div className="hidden md:block absolute -top-10 left-16 w-20 h-20 bg-white rounded-full border-t-2 border-pink-50" />
                    <div className="hidden md:block absolute -top-5 left-32 w-12 h-12 bg-white rounded-full border-t-2 border-r-2 border-pink-50" />
                    {/* Cover the bottom borders of the bumps */}
                    <div className="hidden md:block absolute top-0 left-6 right-6 h-6 bg-white z-10" />
                    
                    <div className="relative z-20 text-slate-700 leading-relaxed min-h-[60px] md:min-h-[80px] text-base md:text-lg font-medium break-keep text-center md:text-left">
                      <p>{selectedChar.description}</p>
                      
                      {selectedChar.secretTitle && (
                        <div className="mt-4 pt-4 border-t border-pink-100 border-dashed">
                          {!showSecret ? (
                            <button 
                              onClick={() => setShowSecret(true)}
                              className="text-pink-500 font-bold hover:text-pink-600 transition-colors flex items-center justify-center md:justify-start gap-2 text-sm md:text-lg w-full"
                            >
                              🔒 {selectedChar.secretTitle} (클릭하여 확인)
                            </button>
                          ) : (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-rose-500 font-bold text-sm md:text-lg"
                            >
                              🔓 {selectedChar.secretDesc}
                            </motion.p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 md:mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                    {selectedChar.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 bg-pink-50 text-pink-600 rounded-full text-xs md:text-sm font-bold border border-pink-100 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
