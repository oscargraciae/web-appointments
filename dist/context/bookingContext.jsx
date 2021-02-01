"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingProvider = exports.BookingContext = void 0;
var react_1 = __importStar(require("react"));
exports.BookingContext = react_1.default.createContext(null);
exports.BookingProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(new Date()), date = _b[0], setDate = _b[1];
    var _c = react_1.useState(''), time = _c[0], setTime = _c[1];
    var _d = react_1.useState(1), step = _d[0], setStep = _d[1];
    var _e = react_1.useState([]), services = _e[0], setServices = _e[1];
    var _f = react_1.useState(0), totalTime = _f[0], setTotalTime = _f[1];
    var _g = react_1.useState(''), message = _g[0], setMessage = _g[1];
    return (<exports.BookingContext.Provider value={{
        date: date,
        setDate: setDate,
        step: step,
        setStep: setStep,
        services: services,
        setServices: setServices,
        totalTime: totalTime,
        setTotalTime: setTotalTime,
        time: time,
        setTime: setTime,
        message: message,
        setMessage: setMessage,
    }}>
      {children}
    </exports.BookingContext.Provider>);
};
