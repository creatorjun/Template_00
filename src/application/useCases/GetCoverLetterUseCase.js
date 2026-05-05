// src/application/useCases/GetCoverLetterUseCase.js
export class GetCoverLetterUseCase {
  constructor(coverLetterRepository) {
    this.coverLetterRepository = coverLetterRepository
  }
  execute() {
    return this.coverLetterRepository.get()
  }
}
