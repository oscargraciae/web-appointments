"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerPage = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
exports.ContainerPage = function (_a) {
    var title = _a.title, children = _a.children;
    return (<react_1.Box p={6} maxW='900px'>
      <react_1.Heading as='h3' size='lg'>{title}</react_1.Heading>

      <react_1.Box mt={3}>
        {children}
      </react_1.Box>
    </react_1.Box>);
};
