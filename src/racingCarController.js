import RacingCarView from './racingCarView.js';
import RacingCarModel from './racingCarModel.js';
import { isValidCarNames, isValidRacingCount } from './common/validator.js';

export default class RacingCarController {
  constructor() {
    this.view = new RacingCarView();
    this.model = new RacingCarModel();

    this.init();
  }

  init() {
    this.view.renderHeader();
    this.view.renderCarNames();
    this.view.selectCarNamesDOM();
    this.attachCarNamesEvents();
  }

  attachCarNamesEvents() {
    this.view.$carNamesSubmit.addEventListener('click', this.handleCarNames.bind(this));
  }

  attachRacingCountEvents() {
    this.view.$racingCountSubmit.addEventListener('click', this.handleRacingCount.bind(this));
  }

  handleCarNames(event) {
    event.preventDefault();

    const carNames = this.view.$carNamesInput.value.split(',');

    if (isValidCarNames(carNames)) {
      this.model.setCars(carNames);
      this.view.renderRacingCount();
      this.view.selectRacingCountDOM();
      this.attachRacingCountEvents();
    } else {
      alert('임시적인 오류 메시지입니다');
      this.view.resetCarNamesInput();
    }
  }

  handleRacingCount(event) {
    event.preventDefault();

    const racingCount = Number(this.view.$racingCountInput.value);

    if (isValidRacingCount(racingCount)) {
      this.model.setRacingCount(racingCount);
    } else {
      alert('양의 정수가 아닙니다');
      this.view.resetRacingCountInput();
    }
  }
}