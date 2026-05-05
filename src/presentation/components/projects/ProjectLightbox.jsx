// src/presentation/components/projects/ProjectLightbox.jsx
import { useEffect, useCallback } from 'react'

export default function ProjectLightbox({ project, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-3xl max-h-[90vh] flex-col rounded-2xl overflow-hidden"
        style={{
          backgroundColor: '#0f0f0f',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="닫기"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-video overflow-hidden bg-gray-900">
          {project.image ? (
            <img
              src={`/images/${project.image}`}
              alt={project.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                const ph = document.createElement('div')
                ph.style.cssText = 'position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;'
                ph.innerHTML = `
                  <svg width="48" height="48" fill="none" stroke="#374151" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span style="color:#4b5563;font-size:12px;font-family:monospace">${project.image}</span>
                `
                e.target.parentNode.appendChild(ph)
              }}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600 text-xs font-mono">image placeholder</span>
            </div>
          )}
          {project.metric && (
            <div className="absolute top-3 left-3 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-1 text-xs font-mono text-emerald-400 backdrop-blur-sm">
              {project.metric}
            </div>
          )}
        </div>

        <div className="flex min-h-0 flex-1 flex-col p-6 md:p-8">
          <p className="mb-2 text-xs font-mono text-indigo-400">{project.tag}</p>
          <h3 className="mb-4 text-xl font-bold text-white">{project.name}</h3>

          <div
            className="min-h-0 flex-1 overflow-y-auto pr-2"
            style={{ maxHeight: 'clamp(8rem, 24vh, 16rem)', scrollbarWidth: 'thin' }}
          >
            <p className="whitespace-pre-line text-sm leading-relaxed text-gray-400">
              {project.desc}
            </p>
          </div>

          {(project.github || project.demo) && (
            <div className="mt-6 flex shrink-0 gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {project.demo.includes('pypi') ? 'PyPI' : project.demo.includes('pub.dev') ? 'pub.dev' : 'Demo'}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <p className="absolute bottom-3 select-none text-xs text-white/30">
        ESC 또는 바깥 영역 클릭으로 닫기
      </p>
    </div>
  )
}
