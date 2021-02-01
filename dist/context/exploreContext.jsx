"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploreProvider = exports.ExploreContext = void 0;
var react_1 = __importStar(require("react"));
var react_places_autocomplete_1 = require("react-places-autocomplete");
var LoadingView_1 = require("../components/general/LoadingView");
var businessService_1 = require("../services/businessService");
var stringToUrl_1 = require("../utils/stringToUrl");
exports.ExploreContext = react_1.default.createContext(null);
exports.ExploreProvider = function (_a) {
    var children = _a.children, placeId = _a.placeId, addressParam = _a.addressParam, category = _a.category;
    console.log('category', category);
    var _b = react_1.useState([]), businesses = _b[0], setBusinesses = _b[1];
    var _c = react_1.useState(null), coords = _c[0], setCoords = _c[1];
    var _d = react_1.useState(null), centerMapCoords = _d[0], setCenterMapCoords = _d[1];
    var _e = react_1.useState(), addressMap = _e[0], setAddressMap = _e[1];
    var _f = react_1.useState(true), isLoading = _f[0], setIsLoading = _f[1];
    var _g = react_1.useState(category ? category : null), categoryId = _g[0], setCategoryId = _g[1];
    // const { socket } = useContext(SocketContext);
    // useEffect(() => {
    //   socket?.emit('hola', coords);
    //   socket.on('listado', (businesses: IBusiness[]) => {
    //     console.log('data', businesses);   
    //     setBusinesses(businesses);
    //     // setIsLoading(false)
    //   })
    //   setIsLoading(false);
    // }, [coords])
    var getCoords = function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, latLng, strAddress;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!placeId) return [3 /*break*/, 3];
                    return [4 /*yield*/, react_places_autocomplete_1.geocodeByPlaceId(placeId)];
                case 1:
                    results = _a.sent();
                    return [4 /*yield*/, react_places_autocomplete_1.getLatLng(results[0])];
                case 2:
                    latLng = _a.sent();
                    setCoords(latLng);
                    setCenterMapCoords(latLng);
                    if (addressParam) {
                        strAddress = stringToUrl_1.urlToString(addressParam);
                        setAddressMap(strAddress);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    setCoords({ lat: 25.6866142, lng: -100.3161126 });
                    setCenterMapCoords({ lat: 25.6866142, lng: -100.3161126 });
                    setAddressMap('Centro, Monterrey, N.L., México');
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var fetch = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, success, business;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!coords) return [3 /*break*/, 2];
                    return [4 /*yield*/, new businessService_1.BusinessService().get(__assign(__assign({}, coords), { categoryId: categoryId }))];
                case 1:
                    _a = _b.sent(), success = _a.success, business = _a.business;
                    if (success && business) {
                        setBusinesses(business);
                    }
                    setIsLoading(false);
                    _b.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        getCoords();
    }, []);
    react_1.useEffect(function () {
        fetch();
    }, [coords, categoryId]);
    if (isLoading || !coords) {
        return <LoadingView_1.LoadingView />;
    }
    var initialState = {
        coords: coords,
        setCoords: setCoords,
        businesses: businesses,
        setBusinesses: setBusinesses,
        isLoading: isLoading,
        centerMapCoords: centerMapCoords,
        setCenterMapCoords: setCenterMapCoords,
        addressMap: addressMap,
        setCategoryId: setCategoryId,
        categoryId: categoryId,
    };
    return (<exports.ExploreContext.Provider value={initialState}>
      {children}
    </exports.ExploreContext.Provider>);
};
