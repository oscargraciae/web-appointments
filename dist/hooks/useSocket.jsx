"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSocket = void 0;
var react_1 = require("react");
var socket_io_client_1 = require("socket.io-client");
var constants_1 = require("../config/constants");
exports.useSocket = function () {
    var socket = socket_io_client_1.io(constants_1.API_DOMAIN, { transports: ['websocket'] });
    var _a = react_1.useState(false), online = _a[0], setOnline = _a[1];
    return {
        socket: socket,
        online: online
    };
};
