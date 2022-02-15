import { CAR, COUNT, RANDOM } from './common/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = COUNT.DEFAULT;
  }

  moveForward() {
    if (Car.#getRandomDigit() >= CAR.MIN_MOVE_FORWARD_CONDITION) {
      this.moveCount += 1;
    }
  }

  static #getRandomDigit() {
    return Math.floor(Math.random() * (RANDOM.MAX_DIGIT - RANDOM.MIN_DIGIT + 1)) + RANDOM.MIN_DIGIT;
  }
}
