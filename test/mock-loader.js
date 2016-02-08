// var defaults = require('lodash/object/defaults');
var createMock = require('./create-mock');
var loader = require('../');

module.exports = function (xml, mockOpts) {
    mockOpts = mockOpts || {};

    mockOpts.query = mockOpts.query ? mockOpts.query + '&' : '?';

    if (!(/svgLoaderHelpers/.test(mockOpts.query))) {
        mockOpts.query += 'svgLoaderHelpers=' + __dirname + '/../helpers';
    }

    var mock = createMock(mockOpts);

    return loader.call(mock, xml);
};
