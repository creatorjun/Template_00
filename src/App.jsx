// src/App.jsx
import { PortfolioProvider } from './presentation/contexts/PortfolioContext'
import Navbar from './presentation/components/Navbar'
import Hero from './presentation/components/Hero'
import About from './presentation/components/About'
import Career from './presentation/components/Career'
import Projects from './presentation/components/Projects'
import Skills from './presentation/components/Skills'
import CoverLetter from './presentation/components/CoverLetter'
import Contact from './presentation/components/Contact'

export default function App() {
  return (
    <PortfolioProvider>
      <div className="bg-[#0a0a0f] text-gray-100 font-sans antialiased">
        <Navbar />
        <Hero />
        <About />
        <Career />
        <Projects />
        <Skills />
        <CoverLetter />
        <Contact />
      </div>
    </PortfolioProvider>
  )
}
