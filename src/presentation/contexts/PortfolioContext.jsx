// src/presentation/contexts/PortfolioContext.jsx
import { createContext, useContext, useMemo } from 'react'
import { portfolioService } from '../../application/services/PortfolioService'
import { Profile } from '../../domain/valueObjects/Profile'

const PortfolioContext = createContext(null)

export function PortfolioProvider({ children }) {
  const value = useMemo(() => ({
    profile: Profile,
    careers: portfolioService.getCareers(),
    projects: portfolioService.getProjects(),
    skills: portfolioService.getSkills(),
    coverLetter: portfolioService.getCoverLetter(),
  }), [])

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error('usePortfolio must be used within PortfolioProvider')
  return ctx
}
