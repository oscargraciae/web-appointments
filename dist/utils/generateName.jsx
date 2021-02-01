"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateName = void 0;
exports.generateName = function (name) {
    return name.replace(/ /g, '-').toLocaleLowerCase();
};
