/* global describe, it */
'use strict';

var DynamicArray = require('../../structures/dynamic_array.js');

describe('DynamicArray', function () {
    describe('#size', function () {
        it('should default to 0.', function () {
            var array = new DynamicArray();

            array.size.should.equal(0);
        });
        it('should increase by 1 everytime an item is pushed.', function () {
            var array = new DynamicArray();

            array.push(1);
            array.size.should.equal(1);
            array.push(2);
            array.size.should.equal(2);
            array.push(3);
            array.size.should.equal(3);
        });
        it('should decrease by 1 everytime an item is popped.', function () {
            var array = new DynamicArray();

            array.push(1);
            array.push(2);
            array.push(3);

            array.size.should.equal(3);
            array.pop();
            array.size.should.equal(2);
            array.pop();
            array.size.should.equal(1);
            array.pop();
            array.size.should.equal(0);
        });
    });
});
