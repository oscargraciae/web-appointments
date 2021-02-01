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
exports.BusinessService = void 0;
var constants_1 = require("../config/constants");
var propsToParams_1 = require("../utils/propsToParams");
var HttpClient_1 = __importDefault(require("./HttpClient"));
var BusinessService = /** @class */ (function (_super) {
    __extends(BusinessService, _super);
    function BusinessService() {
        var _this = _super.call(this, constants_1.URL_API) || this;
        _this.get = function (params) { return _this.instance.get("/businesses?" + propsToParams_1.propsToParams(params)); };
        _this.getById = function (id) { return _this.instance.get("/businesses/" + id); };
        _this.getPhotos = function (id) { return _this.instance.get("/businesses/" + id + "/photos"); };
        return _this;
    }
    return BusinessService;
}(HttpClient_1.default));
exports.BusinessService = BusinessService;
