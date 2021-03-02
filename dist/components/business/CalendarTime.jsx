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
var businessService_1 = require("../../services/businessService");
var LoadingView_1 = require("../general/LoadingView");
var formatDate_1 = require("../../utils/formatDate");
exports.CalendarTime = function (_a) {
    var hours = _a.hours, business = _a.business;
    // context
    var _b = react_1.useContext(bookingContext_1.BookingContext), date = _b.date, totalTime = _b.totalTime, setTime = _b.setTime, time = _b.time;
    var toast = react_2.useToast();
    var numElements = totalTime / 15;
    // states
    var _c = react_1.useState([]), hoursState = _c[0], setHoursState = _c[1];
    var _d = react_1.useState([]), highlightDate = _d[0], setHighlightDate = _d[1];
    var _e = react_1.useState([]), servicesSelected = _e[0], setServicesSelected = _e[1];
    var _f = react_1.useState(null), bookings = _f[0], setBookings = _f[1];
    var daySelected = hours.filter(function (e) { return e.dayOfWeek === new Date(date).getDay(); })[0];
    react_1.useEffect(function () {
        var fetchTime = function () { return __awaiter(void 0, void 0, void 0, function () {
            var startTime, endTime, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!business.id) return [3 /*break*/, 2];
                        startTime = new Date(moment_1.default(date).format('YYYY-MM-DD') + " 00:00:00").toISOString();
                        endTime = moment_1.default(new Date(moment_1.default(date).format('YYYY-MM-DD') + " 00:00:00")).add(1, 'day').toISOString();
                        return [4 /*yield*/, new businessService_1.BusinessService().getTime(business.id, { startTime: startTime, endTime: endTime })];
                    case 1:
                        response = _a.sent();
                        setBookings(response.bookings);
                        console.log('tiempo', response);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        if (!business.hasParallelBookings) {
            fetchTime();
        }
        else {
            setBookings([]);
        }
    }, []);
    react_1.useEffect(function () {
        if (bookings) {
            getHours();
        }
    }, [bookings]);
    react_1.useEffect(function () {
        if (hoursState.length > 0) {
            var indexSelected = hoursState.indexOf(time);
            if (indexSelected >= 0) {
                var nums = [];
                for (var x = indexSelected; x < (indexSelected + numElements); x++) {
                    nums.push(x);
                }
                setServicesSelected(nums);
                setServicesSelected([indexSelected]);
            }
        }
    }, [time, hoursState]);
    var getHours = function () {
        var timeFrom = moment_1.default(daySelected.openFrom, [moment_1.default.ISO_8601, 'HH:mm']).hour();
        var timeTill = moment_1.default(daySelected.openTill, [moment_1.default.ISO_8601, 'HH:mm']).hour();
        var arr = [], i, j;
        if (bookings) {
            for (i = timeFrom; i < timeTill; i++) {
                var _loop_1 = function () {
                    var time_1 = i + ":" + (j === 0 ? "00" : 15 * j);
                    var booking = bookings.filter(function (item) {
                        var startTime = moment_1.default(item.bookingDate, [moment_1.default.ISO_8601, 'HH:mm']).format('HH:mm');
                        var endTime = moment_1.default(item.bookingDate, [moment_1.default.ISO_8601, 'HH:mm']).add(item.totalTime, 'minutes').format('HH:mm');
                        return time_1 >= startTime && time_1 < endTime;
                    });
                    if (booking.length > 0) {
                        arr.push({ time: time_1, available: false });
                    }
                    else {
                        arr.push({ time: time_1, available: true });
                    }
                };
                for (j = 0; j < 4; j++) {
                    _loop_1();
                }
            }
        }
        setHoursState(arr);
    };
    var handleHover = function (index) {
        var nums = [];
        for (var x = index; x < (index + numElements); x++) {
            nums.push(x);
        }
        setHighlightDate(__spreadArrays([index], nums));
        // setHighlightDate([index]);
    };
    var isHover = function (index) {
        var isActive = highlightDate.filter(function (e) { return e === index; })[0];
        return isActive !== undefined;
    };
    var isActive = function (index) {
        var isActive = servicesSelected.filter(function (e) { return e === index; })[0];
        return isActive !== undefined;
    };
    var handleSelectedTime = function (item, index) {
        var isAvailable = hoursState[index + (numElements - 1)];
        if (isAvailable && isAvailable.available) {
            // setSelectedTime(item);
            setTime(item);
            var nums = [];
            for (var x = index; x < (index + numElements); x++) {
                nums.push(x);
            }
            setServicesSelected(nums);
            // setServicesSelected([index]);
        }
        else {
            toast({
                status: 'warning',
                title: 'Horario no disponible.',
                description: "Verifica que no haya horarios ocupados entre la hora que seleccionaste.",
                position: 'top',
            });
        }
    };
    if (hoursState.length === 0)
        return (<react_2.Flex alignItems='center' justify='center' direction='column' w='100%' h='200px'>
      <LoadingView_1.LoadingView />
    </react_2.Flex>);
    return (<react_2.Flex alignItems='center' justify='center' direction='column' w='100%'>
      <react_2.Text fontSize='lg' fontWeight='bold' py={2}>Selecciona la hora</react_2.Text>
      <react_2.Text fontSize='xs' color='subtext' mb={1}>Tiempo de servicio {formatTime_1.minutesToHour(totalTime)}</react_2.Text>
      {time &&
        <react_2.Text fontSize='xs' color='subtext' mb={2}>Horario de servicio {formatDate_1.formatTime(time)} - {formatDate_1.formatTimeAdd(time, totalTime)}</react_2.Text>}
      <react_2.SimpleGrid columns={4} spacing={1} w='100%'>
        {hoursState.map(function (item, index) {
        if (item.available) {
            return (<react_2.Box key={index} p={2} textAlign='center' borderWidth={1} borderColor='borders' cursor='pointer' onClick={function () { return handleSelectedTime(item.time, index); }} onMouseEnter={function (e) { return handleHover(index); }} _hover={{ bg: '#E9F9EF', opacity: 1 }} className={(isHover(index) ? 'service-selected' : '') + " " + (isActive(index) ? 'service-active' : '')}>
                <react_2.Text>{item.time}</react_2.Text>
              </react_2.Box>);
        }
        else {
            return (<react_2.Tooltip label="Reservada" aria-label="Reservada">
              <react_2.Box key={index} p={2} textAlign='center' borderWidth={1} borderColor='borders' cursor='pointer' bg='gray.300' backgroundImage='repeating-linear-gradient(60deg,transparent,transparent 2px,#eee 0,#eee 7px)' onMouseEnter={function (e) { return handleHover(index); }} className={(isHover(index) ? 'service-selected' : '') + " " + (isActive(index) ? 'service-active' : '')}>
                <react_2.Text>{item.time}</react_2.Text>
              </react_2.Box>
              </react_2.Tooltip>);
        }
    })}
      </react_2.SimpleGrid>
      <style>{"\n        .data-class:nth-child(5) ~ .data-class.apple ~ .data-class.apple {\n          background-color: #0ea;\n        }\n\n        .service-selected {\n          /* background-color: #3722d3; */\n          background-color: #E9F9EF;\n          border-color: #25CB67;\n          opacity: 0.6;\n          \n        }\n\n        .service-active {\n          /* background-color: #020621 !important; */\n          background-color: #25CB67;\n          color: #FFF;\n        }\n\n        .service:hover ~ .service:nth-child(1) {\n          background-color: red;\n        }\n      "}</style>
    </react_2.Flex>);
};
