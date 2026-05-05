// src/application/repositories/ProjectRepository.js
import { IProjectRepository } from '../../domain/repositories/IProjectRepository'
import { projectsData } from '../../infrastructure/data/projectsData'

export class ProjectRepository extends IProjectRepository {
  getAll() {
    return projectsData
  }
}
