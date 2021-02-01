"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketProvider = exports.SocketContext = void 0;
var react_1 = __importDefault(require("react"));
var useSocket_1 = require("../hooks/useSocket");
exports.SocketContext = react_1.default.createContext(null);
exports.SocketProvider = function (_a) {
    var children = _a.children;
    var _b = useSocket_1.useSocket(), socket = _b.socket, online = _b.online;
    // useEffect(() => {
    //   return socket.emit('end');
    // })
    return (<exports.SocketContext.Provider value={{ socket: socket, online: online }}>
        {children}
      </exports.SocketContext.Provider>);
};
