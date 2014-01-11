/* global describe, it */
'use strict';

var DynamicArray = require('../../structures/dynamic_array.js');

describe('DynamicArray', function () {
    describe('#size', function () {
        it('should default to 0.', function () {
            var array = new DynamicArray();

            array.size.should.equal(0);
        });
        // TODO: Consider rewriting these tests so the belong to #pop/#push as the depend on those.
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
    describe('#at', function () {
        it('should retrieve the element given its index.');
        it('should throw if index is out of bounds.');
    });
    describe('#push', function () {
        it('should add an element to the collection.');
    });
    describe('#pop', function () {
        it('should throw if array size is 0.');
        it('should remove an element from the collection.');
        it('should return the last element of the collection.');
    });
    describe('#indexOf', function () {
        it('should return an index given an element.');
        it('should return -1 if element is not in the collection.');
    });
});
