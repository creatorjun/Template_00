// src/application/useCases/GetProjectsUseCase.js
export class GetProjectsUseCase {
  constructor(projectRepository) {
    this.projectRepository = projectRepository
  }
  execute() {
    return this.projectRepository.getAll()
  }
}
