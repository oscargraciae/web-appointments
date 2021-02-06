"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutesToHour = void 0;
exports.minutesToHour = function (minutes) {
    var hour = minutes / 60;
    var min = (hour % 1) * 60;
    if (min === 0) {
        return Math.trunc(hour) + " hrs";
    }
    else if (hour < 1) {
        return min + " mins";
    }
    else {
        return Math.trunc(hour) + ":" + min + " hrs";
    }
};
