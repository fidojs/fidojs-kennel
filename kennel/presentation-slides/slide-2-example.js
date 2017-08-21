/**
 * @parent slide-2
 * @module {Bicycle} fast-bicycle Fast Bicycle
 * @description Class representing a fast bicycle.
 *
 * @signature `new Bicycle(cadence, gear, speed)`
 * @param {Number} cadence Speed multiplier.
 * @param {Number} gear Current bike gear.
 * @param {Number} speed Actual speed.
 */
class Bicycle {
  constructor(cadence, gear, speed) {
    this.cadence = cadence;
    this.gear = gear;
    this.speed = speed;
  }

  set cadence(value) {
    this.cadence = value;
  }

  set gear(value) {
    this.gear = value;
  }

  applyBrake(decrement) {
    this.speed -= decrement;
  }

  speedUp(increment) {
    speed += increment;
  }
}

module.exports = Bicycle;

