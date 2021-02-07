"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingsList = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var moment_1 = __importDefault(require("moment"));
var formatDate_1 = require("../../utils/formatDate");
var formatTime_1 = require("../../utils/formatTime");
var bookingService_1 = require("../../services/bookingService");
var LoadingView_1 = require("../general/LoadingView");
exports.BookingsList = function (_a) {
    var tab = _a.tab;
    var _b = react_1.useState([]), bookings = _b[0], setBookings = _b[1];
    var _c = react_1.useState(true), isLoading = _c[0], setIsLoading = _c[1];
    react_1.useEffect(function () {
        var fetchBookings = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, bookings;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {};
                        if (tab === 1) {
                            params = { endDate: moment_1.default(new Date()).toISOString() };
                        }
                        else {
                            params = { startDate: moment_1.default(new Date()).toISOString() };
                        }
                        return [4 /*yield*/, new bookingService_1.BookingService().getAll(params)];
                    case 1:
                        bookings = (_a.sent()).bookings;
                        console.log('bookings', bookings);
                        setBookings(bookings);
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchBookings();
    }, []);
    if (isLoading) {
        return <LoadingView_1.LoadingView />;
    }
    return (<react_2.Table variant="simple" size="md">
        <react_2.Thead>
          <react_2.Tr>
            <react_2.Th>Negocio</react_2.Th>
            <react_2.Th>Fecha de servicio</react_2.Th>
            <react_2.Th>Tiempo de servicio*</react_2.Th>
            <react_2.Th>Costo</react_2.Th>
            <react_2.Th>Fecha de solicitud</react_2.Th>
            <react_2.Th />
          </react_2.Tr>
        </react_2.Thead>
        <react_2.Tbody>
          {bookings.map(function (item) {
        var _a;
        return (<react_2.Tr fontSize='14px'>
              <react_2.Td>{(_a = item.business) === null || _a === void 0 ? void 0 : _a.name}</react_2.Td>
              <react_2.Td>{item.bookingDate ? formatDate_1.formatDate(item.bookingDate) : ''}</react_2.Td>
              <react_2.Td>{item.totalTime ? formatTime_1.minutesToHour(item.totalTime) : ''}</react_2.Td>
              <react_2.Td>${item.totalPrice}MXN</react_2.Td>
              <react_2.Td>{item.createdAt ? formatDate_1.formatDate(item.createdAt) : ''}</react_2.Td>
              <react_2.Td color={item.bookingStatusId === 1 ? 'yellow.500' : 'primary'}>{item.bookingStatusId === 1 ? 'Por confirmar' : 'Agendada'}</react_2.Td>
            </react_2.Tr>);
    })}
        </react_2.Tbody>
      </react_2.Table>);
};
