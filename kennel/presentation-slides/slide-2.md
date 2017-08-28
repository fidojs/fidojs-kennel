@parent presentation
@page slide-2 JavaScript Module: Class Syntax
@description How do we document a module that is using class syntax?

@body

```js
/**
 * @parent bicycle-project
 * @module {Bicycle} fast-bicycle Fast Bicycle
 * @description Class representing a fast bicycle.
 */
class Bicycle {
  /**
   * @signature `new Bicycle(cadence, gear, speed)`
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

  speedUp(increment) {
    speed += increment;
  }
}

module.exports = Bicycle;
```
