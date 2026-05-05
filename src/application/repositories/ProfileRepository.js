// src/application/repositories/ProfileRepository.js
import { IProfileRepository } from '../../domain/repositories/IProfileRepository'
import { profileData } from '../../infrastructure/data/profileData'

export class ProfileRepository extends IProfileRepository {
  getProfile() {
    return profileData
  }
}
