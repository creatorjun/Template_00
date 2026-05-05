// src/application/repositories/SkillRepository.js
import { ISkillRepository } from '../../domain/repositories/ISkillRepository'
import { skillsData } from '../../infrastructure/data/skillsData'

export class SkillRepository extends ISkillRepository {
  getAll() {
    return skillsData
  }
}
