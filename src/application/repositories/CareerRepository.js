// src/application/repositories/CareerRepository.js
import { ICareerRepository } from '../../domain/repositories/ICareerRepository'
import { careers } from '../data/careers'

export class CareerRepository extends ICareerRepository {
  getAll() {
    return careers
  }
}
