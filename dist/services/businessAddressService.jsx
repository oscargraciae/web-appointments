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
exports.BusinessAddressService = void 0;
var constants_1 = require("../config/constants");
var HttpClient_1 = __importDefault(require("./HttpClient"));
var BusinessAddressService = /** @class */ (function (_super) {
    __extends(BusinessAddressService, _super);
    function BusinessAddressService() {
        var _this = _super.call(this, constants_1.URL_API) || this;
        _this.get = function (businessId) { return _this.instance.get("/businesses/" + businessId + "/addresses"); };
        _this.create = function (data, businessId) { return _this.instance.post("/businesses/" + businessId + "/addresses", data); };
        _this.update = function (data, businessId, id) { return _this.instance.put("/businesses/" + businessId + "/addresses/" + id, data); };
        return _this;
    }
    return BusinessAddressService;
}(HttpClient_1.default));
exports.BusinessAddressService = BusinessAddressService;
