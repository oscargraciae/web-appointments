"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.formatTime = void 0;
var moment_1 = __importDefault(require("moment"));
exports.formatTime = function (time) {
    return moment_1.default(time, [moment_1.default.ISO_8601, 'HH:mm']).format('H:mm a');
};
exports.formatDate = function (date) {
    return moment_1.default(date).format('DD MMMM YYYY');
};
