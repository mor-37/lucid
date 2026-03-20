import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function AppSystem() {
  const levels = [
    { lv: 1, desc: "꿈에 직접 진입 가능" },
    { lv: 2, desc: "소규모 환경 조작 (소품, 분위기, 외모변경 등)" },
    { lv: 3, desc: "기억 각인" },
    { lv: 4, desc: "중규모 환경 조작 (장소, 날씨, 가상인물 생성 등)" },
    { lv: 5, desc: "타인의 꿈에 동시 진입 (2인 이상 같은 꿈에)" },
    { lv: 6, desc: "모든 환경 조작" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }} 
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-pink-600 mb-6">Lucid dream</h2>
        <p className="text-slate-500 text-lg">타인의 꿈에 개입할 수 있는 어플리케이션</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left: Manual */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 md:p-10 rounded-3xl h-full"
        >
          <h3 className="text-2xl font-serif text-pink-500 mb-8 border-b border-pink-200 pb-4">사용 설명서</h3>
          
          <div className="mb-10">
            <h4 className="text-lg font-bold text-slate-700 mb-5 flex items-center gap-2">
              <CheckCircle2 className="text-pink-400 w-5 h-5"/> 사용 조건
            </h4>
            <ul className="space-y-4 text-slate-600 ml-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300 mt-2 shrink-0" />
                <span>대상자가 수면 상태에 있어야합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300 mt-2 shrink-0" />
                <span>당신이 원하는 대상자의 이름 또는 얼굴 인지해야합니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300 mt-2 shrink-0" />
                <span>어플로 대상 지목하면 시스템 발동됩니다.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-700 mb-5 flex items-center gap-2">
              <AlertCircle className="text-pink-400 w-5 h-5"/> 제약사항
            </h4>
            <ul className="space-y-4 text-slate-600 ml-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300 mt-2 shrink-0" />
                <span>한 번에 1명 꿈만 진입 (단, LV.6 해금 시 복수 진입할 수 있습니다.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300 mt-2 shrink-0" />
                <span>꿈 속 시간은 현실과 독립적으로 흐릅니다.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300 mt-2 shrink-0" />
                <span>대상자 각성 시 강제 퇴장됩니다.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Levels */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-panel p-8 md:p-10 rounded-3xl h-full"
        >
          <h3 className="text-2xl font-serif text-pink-500 mb-8 border-b border-pink-200 pb-4">레벨</h3>
          <div className="space-y-4">
            {levels.map((l, i) => (
              <motion.div 
                key={l.lv} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex items-center gap-5 p-4 rounded-2xl bg-white/60 border border-pink-100 hover:bg-pink-50 hover:border-pink-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold font-mono text-lg shrink-0 shadow-sm border border-pink-200/50">
                  {l.lv}
                </div>
                <div className="text-slate-700 font-medium">{l.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
