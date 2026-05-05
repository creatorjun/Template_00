// src/application/useCases/GetProfileUseCase.js

export class GetProfileUseCase {
  /** @param {import('../../domain/repositories/IProfileRepository').IProfileRepository} repo */
  constructor(repo) {
    this.repo = repo
  }

  execute() {
    return this.repo.getProfile()
  }
}
