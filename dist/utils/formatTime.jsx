"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutesToHour = void 0;
exports.minutesToHour = function (minutes) {
    var hour = minutes / 60;
    // const hourWuthoutDecimal = Number(hour.toFixed(0));
    var decimals = hour % 1;
    var min = decimals * 60;
    if (min === 0) {
        return hour.toFixed(0) + " hrs";
    }
    else if (hour < 1) {
        return min + " mins";
    }
    else {
        return hour.toFixed(0) + ":" + min + " hrs";
    }
};
