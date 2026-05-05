// src/application/repositories/CoverLetterRepository.js
import { ICoverLetterRepository } from '../../domain/repositories/ICoverLetterRepository'
import { coverLetter } from '../data/coverLetter'

export class CoverLetterRepository extends ICoverLetterRepository {
  get() {
    return coverLetter
  }
}
