import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2000" 
          alt="Dreamy abstract background" 
          className="w-full h-full object-cover opacity-20 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05050a]/80 to-[#05050a]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-12 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-purple-300 text-sm font-medium"
        >
          <Sparkles className="w-4 h-4" />
          <span>새 학기, 새로운 꿈의 시작</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="w-full max-w-2xl mx-auto drop-shadow-[0_0_25px_rgba(167,139,250,0.4)]"
        >
          {/* 첨부해주신 타이틀 이미지가 들어갈 자리입니다. */}
          {/* 이미지를 public 폴더에 title-image.png 로 업로드하시면 자동으로 적용됩니다. */}
          <img 
            src="https://dcm.ajrd.org/title.png" 
            alt="당신의 꿈속으로" 
            className="w-full h-auto object-contain"
            onError={(e) => {
              // 이미지가 없을 경우를 대비한 임시 텍스트 스타일링
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<h1 class="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-white text-glow">당신의 꿈속으로</h1><p class="mt-4 text-purple-300/50 text-sm">첨부하신 이미지를 public/title-image.png 로 업로드해주세요.</p>';
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-purple-500/50 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
