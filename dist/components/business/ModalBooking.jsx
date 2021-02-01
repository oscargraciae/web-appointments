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
exports.ModalBooking = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var moment_1 = __importDefault(require("moment"));
var CalendarDate_1 = require("./CalendarDate");
var CalendarTime_1 = require("./CalendarTime");
var bookingContext_1 = require("../../context/bookingContext");
var BookingResume_1 = require("./BookingResume");
var bookingService_1 = require("../../services/bookingService");
var BookingSuccess_1 = require("./BookingSuccess");
exports.ModalBooking = function (_a) {
    var business = _a.business, isOpen = _a.isOpen, onClose = _a.onClose;
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useContext(bookingContext_1.BookingContext), step = _c.step, setStep = _c.setStep, time = _c.time, date = _c.date, message = _c.message, services = _c.services, totalTime = _c.totalTime;
    var submitBooking = function () { return __awaiter(void 0, void 0, void 0, function () {
        var d, dateB, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    console.log('FEcha de reserva', date);
                    d = moment_1.default(date).format('YYYY-MM-DD').toString();
                    console.log('Fecha d', d);
                    dateB = moment_1.default(d + " " + time).toDate();
                    console.log('Fecha dateB', dateB);
                    return [4 /*yield*/, new bookingService_1.BookingService().create({
                            // bookingDate: moment(date).format('YYYY-MM-DD').toString(),
                            bookingDate: dateB,
                            bookingTime: time,
                            message: message,
                            businessId: business.id,
                            businessServices: services,
                            totalTime: totalTime,
                        })];
                case 1:
                    response = _a.sent();
                    if (response.success) {
                        setStep(4);
                    }
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (<react_2.Modal isOpen={isOpen} onClose={onClose}>
      <react_2.ModalOverlay />
      <react_2.ModalContent>
        <react_2.ModalCloseButton />
        <react_2.ModalBody>
          <react_2.Flex direction='column'>
            {step === 1 && <CalendarDate_1.CalendarDate hours={business.hours}/>}
            {step === 2 && <CalendarTime_1.CalendarTime hours={business.hours}/>}
            {step === 3 && <BookingResume_1.BookingResume />}
            {step === 4 && <BookingSuccess_1.BookingSuccess />}
          </react_2.Flex>
        </react_2.ModalBody>
        <react_2.ModalFooter>
          <react_2.Flex justify='space-between' w='100%'>
            {(step > 1 && step < 4) && <react_2.Button variant='outline' onClick={function () { return setStep(step - 1); }}>Atrás</react_2.Button>}
            <react_2.Spacer />
            {step < 3 && <react_2.Button alignSelf='flex-end' variant='primary' onClick={function () { return setStep(step + 1); }}>Siguiente</react_2.Button>}

            {step === 3 && <react_2.Button alignSelf='flex-end' variant='primary' onClick={submitBooking} isLoading={isLoading}>Confirmar reserva</react_2.Button>}
          </react_2.Flex>
          
        </react_2.ModalFooter>
      </react_2.ModalContent>
      <style>{"\n        .react-datepicker__header {\n          background-color: #FFF;\n          border-bottom: none;\n        }\n\n        .react-datepicker__current-month {\n          padding-bottom: 20px;\n        }\n\n        .react-datepicker {\n          font-size: 14px;\n          border: none;\n        }\n\n        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {\n          width: 40px;\n          height: 40px;\n          line-height: 40px;\n          font-weight: bold;\n        }\n\n        .react-datepicker__day-name {\n          color: red;\n          font-size: 12px;\n          color: rgb(113, 113, 113) !important;\n        }\n\n        .react-datepicker__day--selected {\n          background-color: #325CB67;\n        }\n        \n\n      "}</style>
    </react_2.Modal>);
};
