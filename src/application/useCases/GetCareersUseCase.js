// src/application/useCases/GetCareersUseCase.js
export class GetCareersUseCase {
  constructor(careerRepository) {
    this.careerRepository = careerRepository
  }
  execute() {
    return this.careerRepository.getAll()
  }
}
