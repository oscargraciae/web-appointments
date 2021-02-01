"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlToString = exports.stringToUrl = void 0;
exports.stringToUrl = function (str) {
    // return str.replace(/[^A-Z0-9]+/ig, "_");
    return str.replace(/ /g, '-');
};
exports.urlToString = function (str) {
    // return str.replace(/[^A-Z0-9]+/ig, "_");
    return str.replace(/-/g, ' ');
};
