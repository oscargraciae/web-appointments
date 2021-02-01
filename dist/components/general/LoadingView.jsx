"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingView = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
exports.LoadingView = function () {
    return (<react_1.Flex direction='column' justify='center' align='center' flex={1} w='100%' height='100vh'>
      <react_1.Spinner size='md' color='primary'/>
    </react_1.Flex>);
};
