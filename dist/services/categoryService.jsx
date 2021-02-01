"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
var HttpClient_1 = __importDefault(require("./HttpClient"));
var constants_1 = require("../config/constants");
var CategoryService = /** @class */ (function (_super) {
    __extends(CategoryService, _super);
    function CategoryService() {
        var _this = _super.call(this, constants_1.URL_API) || this;
        _this.getAll = function () { return _this.instance.get('/categories'); };
        return _this;
    }
    return CategoryService;
}(HttpClient_1.default));
exports.CategoryService = CategoryService;
