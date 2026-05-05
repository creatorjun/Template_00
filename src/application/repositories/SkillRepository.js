// src/application/repositories/SkillRepository.js
import { ISkillRepository } from '../../domain/repositories/ISkillRepository'
import { skills } from '../data/skills'

export class SkillRepository extends ISkillRepository {
  getAll() {
    return skills
  }
}
