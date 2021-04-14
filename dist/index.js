"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tsAdd() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (prev, next) { return prev + next; }, 0);
}
exports.tsAdd = tsAdd;
