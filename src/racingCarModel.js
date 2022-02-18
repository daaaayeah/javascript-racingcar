import { COUNT } from './common/constants.js';

import Car from './car.js';

export default class RacingCarModel {
  constructor() {
    this.cars = [];
    this.racingCount = COUNT.DEFAULT;
  }

  init() {
    this.cars = [];
    this.racingCount = COUNT.DEFAULT;
  }

  setCars(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  setRacingCount(racingCount) {
    this.racingCount = racingCount;
  }

  getWinnners() {
    return this.cars
      .filter((car) => car.moveCount === this.#getMaxMoveCount())
      .map((car) => car.name);
  }

  #getMaxMoveCount() {
    return Math.max(...this.cars.map((car) => car.moveCount));
  }
}
