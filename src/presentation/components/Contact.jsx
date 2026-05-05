// src/presentation/components/Contact.jsx
import { useInView } from '../hooks/useInView'
import { usePortfolio } from '../contexts/PortfolioContext'

export default function Contact() {
  const { ref, inView } = useInView()
  const { profile } = usePortfolio()

  return (
    <section id="contact" className="py-40 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs text-indigo-400 uppercase tracking-widest mb-4 font-mono">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">함께 만들어요.</h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            새로운 기회나 협업 제안은 언제든지 환영합니다.<br />
            아래 이메일로 편하게 연락주세요.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-950 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {profile.email}
          </a>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
