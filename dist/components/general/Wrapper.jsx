"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
exports.Wrapper = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? "regular" : _b;
    return (<react_2.Box mt={8} mx="auto" maxW={variant === "regular" ? "800px" : "400px"} w="100%">
      {children}
    </react_2.Box>);
};
