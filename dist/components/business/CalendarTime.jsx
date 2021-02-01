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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarTime = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var moment_1 = __importDefault(require("moment"));
var bookingContext_1 = require("../../context/bookingContext");
var formatTime_1 = require("../../utils/formatTime");
exports.CalendarTime = function (_a) {
    var hours = _a.hours;
    // context
    var _b = react_1.useContext(bookingContext_1.BookingContext), date = _b.date, totalTime = _b.totalTime, setTime = _b.setTime, time = _b.time;
    var numElements = totalTime / 15;
    // states
    var _c = react_1.useState([]), hoursState = _c[0], setHoursState = _c[1];
    var _d = react_1.useState([]), highlightDate = _d[0], setHighlightDate = _d[1];
    var _e = react_1.useState([]), servicesSelected = _e[0], setServicesSelected = _e[1];
    var daySelected = hours.filter(function (e) { return e.dayOfWeek === new Date(date).getDay(); })[0];
    // const [selectedTime, setSelectedTime] = useState('');
    react_1.useEffect(function () {
        getHours();
    }, []);
    react_1.useEffect(function () {
        if (hoursState.length > 0) {
            var indexSelected = hoursState.indexOf(time);
            if (indexSelected >= 0) {
                var nums = [];
                for (var x = indexSelected; x < (indexSelected + numElements); x++) {
                    nums.push(x);
                }
                setServicesSelected(nums);
            }
        }
    }, [time, hoursState]);
    var getHours = function () {
        var timeFrom = moment_1.default(daySelected.openFrom, [moment_1.default.ISO_8601, 'HH:mm']).hour();
        var timeTill = moment_1.default(daySelected.openTill, [moment_1.default.ISO_8601, 'HH:mm']).hour();
        var arr = [], i, j;
        for (i = timeFrom; i < timeTill; i++) {
            for (j = 0; j < 4; j++) {
                arr.push(i + ":" + (j === 0 ? "00" : 15 * j));
            }
        }
        setHoursState(arr);
    };
    var handleSelect = function (index) {
        var nums = [];
        for (var x = index; x < (index + numElements); x++) {
            nums.push(x);
        }
        setHighlightDate(__spreadArrays([index], nums));
    };
    var isSelected = function (index) {
        var isActive = highlightDate.filter(function (e) { return e === index; })[0];
        return isActive !== undefined;
    };
    var isActive = function (index) {
        var isActive = servicesSelected.filter(function (e) { return e === index; })[0];
        return isActive !== undefined;
    };
    var handleSelectedTime = function (item, index) {
        var isAvailable = hoursState[index + (numElements - 1)];
        if (isAvailable) {
            // setSelectedTime(item);
            setTime(item);
            var nums = [];
            for (var x = index; x < (index + numElements); x++) {
                nums.push(x);
            }
            setServicesSelected(nums);
        }
        else {
            console.log('NO DISPONIBLE');
        }
    };
    return (<react_2.Flex alignItems='center' justify='center' direction='column' w='100%'>
      <react_2.Text fontSize='lg' fontWeight='bold' py={2}>Selecciona la hora</react_2.Text>
      <react_2.Text>Tiempo de servicio aproximado {formatTime_1.minutesToHour(totalTime)}</react_2.Text>
      <react_2.SimpleGrid columns={4} spacing={1} w='100%'>
        {hoursState.map(function (item, index) { return (<react_2.Box key={index} p={2} textAlign='center' borderWidth={1} borderColor='borders' cursor='pointer' onClick={function () { return handleSelectedTime(item, index); }} onMouseEnter={function (e) { return handleSelect(index); }} className={(isSelected(index) ? 'service-selected' : '') + " " + (isActive(index) ? 'service-active' : '')}>
            <react_2.Text>{item}</react_2.Text>
          </react_2.Box>); })}
      </react_2.SimpleGrid>
      <style>{"\n        .data-class:nth-child(5) ~ .data-class.apple ~ .data-class.apple {\n          background-color: #0ea;\n        }\n\n        .service-selected {\n          background-color: #25CB67;\n          color: #FFF;\n        }\n\n        .service-active {\n          background-color: #020621 !important;\n          color: #FFF;\n        }\n\n        .service:hover ~ .service:nth-child(1) {\n          background-color: red;\n        }\n      "}</style>
    </react_2.Flex>);
};
