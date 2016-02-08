var assign = require('lodash/object/assign');
var functions = require('lodash/object/functions');

var MOCK_DEFAULTS = {
    callback: function (error, result) {
        if (error) {
            throw error;
        }
        console.error(result);
    },
    async:         function () { return this.callback; },
    cacheable:     function () {},
    addDependency: function () {}
};

module.exports = function createMock (opts) {
    var mock = assign({}, MOCK_DEFAULTS, opts || {});

    functions(mock).
        // map((name) => { console.log(name); return name; }).
        forEach(function (name) { mock[name] = mock[name].bind(mock); });

    return mock;
};

