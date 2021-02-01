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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarDate = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var moment_1 = __importDefault(require("moment"));
var react_datepicker_1 = __importStar(require("react-datepicker"));
var es = __importStar(require("date-fns/locale/es/index"));
require("moment/locale/es-mx");
var bookingContext_1 = require("../../context/bookingContext");
moment_1.default.locale('es-mx');
exports.CalendarDate = function (_a) {
    var hours = _a.hours;
    // hooks
    var _b = react_1.useContext(bookingContext_1.BookingContext), date = _b.date, setDate = _b.setDate, setStep = _b.setStep, setTime = _b.setTime;
    es.default.options = { weekStartsOn: 1 };
    react_datepicker_1.registerLocale("es", es);
    var isWeekday = function (date) {
        var day = new Date(date).getDay();
        return hours[day].isOpen;
    };
    var onChangeDate = function (date) {
        setDate(date);
        setTime('');
    };
    return (<react_2.Flex alignItems='center' justify='center' flex={1} direction='column'>
      <react_2.Text fontSize='lg' fontWeight='bold' py={2}>Selecciona el día</react_2.Text>
      <react_datepicker_1.default selected={date} onChange={function (date) { return onChangeDate(date); }} inline minDate={new Date()} locale='es-mx' filterDate={isWeekday}/>
    </react_2.Flex>);
};
