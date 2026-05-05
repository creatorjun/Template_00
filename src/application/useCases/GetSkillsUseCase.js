// src/application/useCases/GetSkillsUseCase.js
export class GetSkillsUseCase {
  constructor(skillRepository) {
    this.skillRepository = skillRepository
  }
  execute() {
    return this.skillRepository.getAll()
  }
}
