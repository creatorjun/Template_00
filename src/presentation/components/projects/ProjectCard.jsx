// src/presentation/components/projects/ProjectCard.jsx

export default function ProjectCard({ project, onCardClick }) {
  return (
    <div
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
      onClick={() => onCardClick(project)}
    >
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        {project.image ? (
          <img
            src={`/images/${project.image}`}
            alt={project.name}
            className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
            onError={(e) => {
              e.target.style.display = 'none'
              const ph = document.createElement('div')
              ph.className = 'absolute inset-0 flex flex-col items-center justify-center gap-2'
              ph.innerHTML = `
                <svg width="40" height="40" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span style="color:#4b5563;font-size:11px;font-family:monospace">${project.image}</span>
              `
              e.target.parentNode.appendChild(ph)
            }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-700 text-xs font-mono">image placeholder</span>
          </div>
        )}
        {project.metric && (
          <div className="absolute top-3 left-3 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2.5 py-1 text-xs font-mono text-emerald-400 backdrop-blur-sm">
            {project.metric}
          </div>
        )}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
        >
          <div className="rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-sm">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">
        <p className="mb-1.5 text-xs font-mono text-indigo-400">{project.tag}</p>
        <h3 className="text-sm font-bold text-white">{project.name}</h3>
      </div>
    </div>
  )
}
