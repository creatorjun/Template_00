// src/presentation/components/About.jsx
import { useInView } from '../hooks/useInView'
import { usePortfolio } from '../contexts/PortfolioContext'
import { ABOUT } from '../../../config'

export default function About() {
  const { ref, inView } = useInView()
  const { profile } = usePortfolio()

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-mono">About</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 leading-tight">
            {ABOUT.headline}<br />
            <span className="text-gray-500">{ABOUT.subheadline}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-400 leading-relaxed">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((s) => (
                <div key={s.label} className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-white/10 transition-colors">
                  <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
