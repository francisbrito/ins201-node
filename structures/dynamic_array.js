'use strict';

var GROWTH_FACTOR = 2;

function DynamicArray() {
    this.size = 0;
    this.capacity = GROWTH_FACTOR;
    this.__items = new Array(GROWTH_FACTOR);
}

DynamicArray.prototype.push = function (item) {
    if (this.size === this.capacity) {
        var items = this.__items;

        this.capacity *= GROWTH_FACTOR;
        this.__items = new Array(this.capacity);

        items.forEach(this.__items.push);
    }

    this.__items.push(item);
    this.size++;
};

DynamicArray.prototype.pop = function () {
    if (this.size === 0) {
        throw new Error('Invalid operation.');
    }

    return this.__items.pop();
};

DynamicArray.prototype.at = function (index) {
    if (index < 0 || index >= this.size) {
        throw new Error('Index out of range.');
    }

    return this.__items[index];
};

DynamicArray.prototype.indexOf = function (item) {
    var index = -1;

    for (var i = 0; i < this.size; i++) {
        var curr = this.__items[i];

        if (curr === item) {
            index = i;
            break;
        }
    }

    return index;
};

module.exports = exports = DynamicArray;

