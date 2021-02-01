"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var HttpClient = /** @class */ (function () {
    function HttpClient(baseURL) {
        var _this = this;
        this._initializeResponseInterceptor = function () {
            _this.instance.interceptors.response.use(_this._handleResponse, _this._handleError);
        };
        this._handleResponse = function (_a) {
            var data = _a.data;
            return data;
        };
        this._handleError = function (error) { return Promise.reject(error); };
        // /axios.defaults.withCredentials = true;
        this.instance = axios_1.default.create({
            baseURL: baseURL,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        this._initializeResponseInterceptor();
    }
    return HttpClient;
}());
exports.default = HttpClient;
