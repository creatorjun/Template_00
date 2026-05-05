// src/application/repositories/CoverLetterRepository.js
import { ICoverLetterRepository } from '../../domain/repositories/ICoverLetterRepository'
import { coverLetterData } from '../../infrastructure/data/coverLetterData'

export class CoverLetterRepository extends ICoverLetterRepository {
  get() {
    return coverLetterData
  }
}
