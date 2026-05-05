// src/application/repositories/ProjectRepository.js
import { IProjectRepository } from '../../domain/repositories/IProjectRepository'
import { projects } from '../data/projects'

export class ProjectRepository extends IProjectRepository {
  getAll() {
    return projects
  }
}
