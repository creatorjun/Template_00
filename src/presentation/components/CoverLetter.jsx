// src/presentation/components/CoverLetter.jsx
import { useInView } from '../hooks/useInView'
import { usePortfolio } from '../contexts/PortfolioContext'

export default function CoverLetter() {
  const { ref, inView } = useInView()
  const { coverLetter, profile } = usePortfolio()

  return (
    <section id="cover-letter" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-mono">Cover Letter</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">자기소개서</h2>
          <p className="text-gray-500 text-sm mb-16 font-mono">{profile.nameKo} · {profile.title}</p>
          <div className="space-y-8">
            {coverLetter.sections.map((section, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-indigo-500/20 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-indigo-500/40 bg-indigo-500/10 flex items-center justify-center mt-0.5">
                    <span className="text-indigo-400 text-xs font-mono font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">{section.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{section.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
