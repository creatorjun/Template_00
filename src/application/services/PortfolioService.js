// src/application/services/PortfolioService.js
import { CareerRepository } from '../repositories/CareerRepository'
import { ProjectRepository } from '../repositories/ProjectRepository'
import { SkillRepository } from '../repositories/SkillRepository'
import { GetCareersUseCase } from '../useCases/GetCareersUseCase'
import { GetProjectsUseCase } from '../useCases/GetProjectsUseCase'
import { GetSkillsUseCase } from '../useCases/GetSkillsUseCase'

const getCareersUseCase = new GetCareersUseCase(new CareerRepository())
const getProjectsUseCase = new GetProjectsUseCase(new ProjectRepository())
const getSkillsUseCase = new GetSkillsUseCase(new SkillRepository())

export const portfolioService = {
  getCareers: () => getCareersUseCase.execute(),
  getProjects: () => getProjectsUseCase.execute(),
  getSkills: () => getSkillsUseCase.execute(),
}
