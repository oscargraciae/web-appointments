"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propsToParams = void 0;
var query_string_1 = __importDefault(require("query-string"));
exports.propsToParams = function (params) {
    return query_string_1.default.stringify(params, { skipNull: true, skipEmptyString: true, strict: true });
};
