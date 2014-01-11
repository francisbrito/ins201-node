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
        it('should retrieve the element given its index.', function () {
            var array = new DynamicArray();

            var expected = {
                index: 0,
                value: 27
            };

            array.push(expected.value);
            array.at(expected.index).should.equal(expected.value);

            expected.index = 1;
            expected.value = 10;

            array.push(expected.value);
            array.at(expected.index).should.equal(expected.value);

        });
        it('should throw if index is out of bounds.', function () {
            var array = new DynamicArray();

            // NOTE: This is JavaScript --err functional programming magic.
            // .should expects a Function object it can execute to see if throws.
            // array#at returns a Number object instead, screwing up the assertion.
            // Function#bind returns a function given a context and argument list for it to execute
            // which gracefully solves any issue.
            array.at.bind(array, -1).should.throw('Index out of range.');
            array.at.bind(array, 1).should.throw('Index out of range.');
        });
    });
    describe('#push', function () {
        it('should add an element to the collection.', function () {
            var array = new DynamicArray();

            array.push(1);
            array.at(0).should.equal(1);
            array.push(2);
            array.at(1).should.equal(2);
            array.push(3);
            array.at(2).should.equal(3);
        });
    });
    describe('#pop', function () {
        it('should throw if array size is 0.', function () {
            var array = new DynamicArray();

            array.pop.bind(array).should.throw('Invalid operation.');
        });
        it('should remove an element from the collection.', function () {
            var array = new DynamicArray();

            array.push(27);
            array.push(11);
            array.push(95);

            array.pop();
            array.size.should.equal(2);

            array.pop();
            array.size.should.equal(1);

            array.pop();
            array.size.should.equal(0);
        });
        it('should return the last element of the collection.', function () {
            var array = new DynamicArray();

            array.push(10);
            array.push(08);
            array.push(94);

            var expected = array.at(2);
            array.pop().should.equal(expected);

            expected = array.at(1);
            array.pop().should.equal(expected);
        });
    });
    describe('#indexOf', function () {
        it('should return an index given an element.', function () {
            var array = new DynamicArray();

            array.push('07');
            array.push('02');
            array.push('96');

            array.indexOf('96').should.equal(2);
            array.indexOf('07').should.equal(0);
            array.indexOf('02').should.equal(1);
        });
        it('should return -1 if element is not in the collection.', function () {
            var array = new DynamicArray();

            array.indexOf('-1').should.equal(-1);
            array.indexOf(10).should.equal(-1);
        });
    });
});
