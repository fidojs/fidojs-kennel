@parent presentation
@page slide-4 JavaScript Module: Simple
@description A simple JS module example.

@body

```js
/**
 * @module {{}} foo Foo
 */
module.exports = {
  /**
   * A function named bar.
   *
   * @param {{}} params A parameter object with options:
   *   @option {String} aString An arbitrary string.
   *   @option {Number} [oNumber] An optional number.
   */
  bar: function(params) { /*...*/ }
};
```
