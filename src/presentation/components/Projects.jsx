// src/presentation/components/Projects.jsx
import { useState, useCallback } from 'react'
import { useInView } from '../hooks/useInView'
import { usePortfolio } from '../contexts/PortfolioContext'
import ProjectCard from './projects/ProjectCard'
import ProjectLightbox from './projects/ProjectLightbox'

export default function Projects() {
  const { ref, inView } = useInView()
  const { projects } = usePortfolio()
  const [selected, setSelected] = useState(null)

  const handleCardClick = useCallback((project) => setSelected(project), [])
  const handleClose = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <p className="mb-4 text-xs font-mono uppercase tracking-widest text-indigo-400">
            Projects
          </p>
          <h2 className="mb-16 text-3xl font-bold text-white md:text-5xl">프로젝트</h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <ProjectLightbox
          project={selected}
          onClose={handleClose}
        />
      )}
    </section>
  )
}
