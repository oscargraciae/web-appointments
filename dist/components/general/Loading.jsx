"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var constants_1 = require("../../config/constants");
exports.Loading = function () {
    return (<react_2.Flex direction='column' justify='center' align='center' flex={1} w='100%' height='100vh'>
      <react_2.Spinner size='xl' color='primary'/>
      <react_2.Text mt={4} fontWeight='bold' fontSize='2xl'>Cargando {constants_1.APP_NAME}</react_2.Text>
    </react_2.Flex>);
};
