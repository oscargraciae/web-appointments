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
exports.UserService = void 0;
var HttpClient_1 = __importDefault(require("./HttpClient"));
var constants_1 = require("../config/constants");
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        var _this = _super.call(this, constants_1.URL_API) || this;
        _this.login = function (data) { return _this.instance.post('/users/auth', data); };
        _this.signup = function (data) { return _this.instance.post('/users', data); };
        _this.forgotPasword = function (data) { return _this.instance.post('/users/forgot-password', data); };
        _this.changePasword = function (data) { return _this.instance.post('/users/change-password', data); };
        _this.logout = function () { return _this.instance.get('/users/auth/logout'); };
        _this.getMe = function () { return _this.instance.get('/users'); };
        return _this;
    }
    return UserService;
}(HttpClient_1.default));
exports.UserService = UserService;
