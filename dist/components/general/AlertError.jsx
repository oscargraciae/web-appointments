"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertError = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
exports.AlertError = function (_a) {
    var title = _a.title, description = _a.description;
    return (<react_2.Alert status='error'>
      {title && <react_2.AlertTitle>{title}</react_2.AlertTitle>}
      {description && <react_2.AlertDescription fontSize='sm' textAlign='left'>{description}</react_2.AlertDescription>}
    </react_2.Alert>);
};
