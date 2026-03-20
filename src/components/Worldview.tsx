import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';

export default function Worldview() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">세계관</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-10 md:p-16 rounded-3xl text-center hover:bg-white/[0.03] transition-colors border border-purple-500/10"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center mb-8 text-purple-300 border border-purple-500/20">
            <Building2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">2026년 대한민국, 다온대학교</h3>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            현재 2026년 대한민국 서울 성북구에 위치한 4년제 대학교.<br/>
            모든 인연이 교차하는 곳이자, 새 학기의 설렘과 풋풋한 감정이 피어나는 캠퍼스.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
