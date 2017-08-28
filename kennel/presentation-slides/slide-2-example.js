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
  /**
   * @function constructor
   * @param {Number} cadence Speed multiplier.
   * @param {Number} gear Current bike gear.
   * @param {Number} speed Actual speed.
   */
  constructor(cadence, gear, speed) {
    this.cadence = cadence;
    this.gear = gear;
    this.speed = speed;
  }

  /**
   * @property {Number} cadence
   */
  set cadence(value) {
    this.cadence = value;
  }

  set gear(value) {
    this.gear = value;
  }

  applyBrake(decrement) {
    this.speed -= decrement;
  }

  /**
   * @signature `speedUp(increment)`
   * @param {Number} increment How much to increase speed.
   */
  speedUp(increment) {
    speed += increment;
  }
}

module.exports = Bicycle;
