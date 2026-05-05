// src/application/services/PortfolioService.js
import { ProfileRepository } from '../repositories/ProfileRepository'
import { CareerRepository } from '../repositories/CareerRepository'
import { ProjectRepository } from '../repositories/ProjectRepository'
import { SkillRepository } from '../repositories/SkillRepository'
import { CoverLetterRepository } from '../repositories/CoverLetterRepository'
import { GetProfileUseCase } from '../useCases/GetProfileUseCase'
import { GetCareersUseCase } from '../useCases/GetCareersUseCase'
import { GetProjectsUseCase } from '../useCases/GetProjectsUseCase'
import { GetSkillsUseCase } from '../useCases/GetSkillsUseCase'
import { GetCoverLetterUseCase } from '../useCases/GetCoverLetterUseCase'

const getProfileUseCase = new GetProfileUseCase(new ProfileRepository())
const getCareersUseCase = new GetCareersUseCase(new CareerRepository())
const getProjectsUseCase = new GetProjectsUseCase(new ProjectRepository())
const getSkillsUseCase = new GetSkillsUseCase(new SkillRepository())
const getCoverLetterUseCase = new GetCoverLetterUseCase(new CoverLetterRepository())

export const portfolioService = {
  getProfile: () => getProfileUseCase.execute(),
  getCareers: () => getCareersUseCase.execute(),
  getProjects: () => getProjectsUseCase.execute(),
  getSkills: () => getSkillsUseCase.execute(),
  getCoverLetter: () => getCoverLetterUseCase.execute(),
}
