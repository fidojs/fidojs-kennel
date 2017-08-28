/**
 * @parent slide-3
 * @module {function} Concierge Concierge
 * @description An employee of some establishment.
 * @param {String} name Name of the concierge.
 * @return {function} Anonymous prototype.
 * 
 * @body
 * 
 * Concierge usually works at a hotel, and gives greetings or farewells to the
 * patrons or guests.
 * 
 * ## Use
 * 
 * ```js
 * var Concierge = require('./foo.js');
 * var c = new Concierge('Alfred');
 * c.greeting('Bruce', 'Wayne'); //-> "Alfred says: Hello Bruce Wayne"
 * ```
 */
var Concierge = function(name) {
    this.name = name;
};

/**
 * @prototype
 */
Object.assign(Concierge.prototype, {
    /**
     * @property {Number} delay
     * Sets the delay in milliseconds before giving a greeting or farewell.
     */
    delay: 100,
    /**
     * @signature
     * @param first First name of a guest.
     * @param second Second name of guest.
     * @return {String}
     */
    greeting: function(first, second) {
        return this.name + ' says: Hello ' + first + ' ' + second;
    },
    /**
     * @signature
     * @param {{}} personRecord An object with `first` and `last` properties.
     * @option {String} first First name of person.
     * @option {String} last Last name of person.
     * @return {Object}
     */
    farewell: function(personRecord) {
        return {
            farewell: 'Goodbye ' + personRecord.first + ' ' + personRecord.last
        };
    }
});

module.exports = Concierge;
