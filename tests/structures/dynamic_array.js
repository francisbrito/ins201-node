/* global describe, it */
'use strict';

var DynamicArray = require('../../structures/dynamic_array.js');

describe('DynamicArray', function () {
    describe('#size', function () {
        it('should default to 0.', function () {
            var array = new DynamicArray();

            array.size.should.equal(0);
        });
    });
});
