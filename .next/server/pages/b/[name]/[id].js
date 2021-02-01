module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "2FnJ":
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4COj");


/***/ }),

/***/ "4COj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: ./src/services/businessService.tsx + 1 modules
var businessService = __webpack_require__("8vme");

// EXTERNAL MODULE: ./src/components/Wrapper.tsx
var Wrapper = __webpack_require__("uHth");

// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__("2FnJ");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__("ZTWx");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);

// EXTERNAL MODULE: external "date-fns/locale/es/index"
var index_ = __webpack_require__("ZY4h");
var index_default = /*#__PURE__*/__webpack_require__.n(index_);

// EXTERNAL MODULE: external "moment/locale/es-mx"
var es_mx_ = __webpack_require__("JXOt");

// CONCATENATED MODULE: ./src/context/bookingContext.tsx
var __jsx = external_react_default.a.createElement;

const BookingContext = /*#__PURE__*/external_react_default.a.createContext(null);
const BookingProvider = ({
  children
}) => {
  const {
    0: date,
    1: setDate
  } = Object(external_react_["useState"])(new Date());
  const {
    0: time,
    1: setTime
  } = Object(external_react_["useState"])('');
  const {
    0: step,
    1: setStep
  } = Object(external_react_["useState"])(1);
  const {
    0: services,
    1: setServices
  } = Object(external_react_["useState"])([]);
  const {
    0: totalTime,
    1: setTotalTime
  } = Object(external_react_["useState"])(0);
  const {
    0: message,
    1: setMessage
  } = Object(external_react_["useState"])('');
  return __jsx(BookingContext.Provider, {
    value: {
      date,
      setDate,
      step,
      setStep,
      services,
      setServices,
      totalTime,
      setTotalTime,
      time,
      setTime,
      message,
      setMessage
    }
  }, children);
};
// CONCATENATED MODULE: ./src/components/business/CalendarDate.tsx
var CalendarDate_jsx = external_react_default.a.createElement;







external_moment_default.a.locale('es-mx');
const CalendarDate = ({
  hours
}) => {
  // hooks
  const {
    date,
    setDate,
    setStep,
    setTime
  } = Object(external_react_["useContext"])(BookingContext);
  index_default.a.options = {
    weekStartsOn: 1
  };
  Object(external_react_datepicker_["registerLocale"])("es", index_);

  const isWeekday = date => {
    const day = new Date(date).getDay();
    return hours[day].isOpen;
  };

  const onChangeDate = date => {
    setDate(date);
    setTime('');
  };

  return CalendarDate_jsx(react_["Flex"], {
    alignItems: "center",
    justify: "center",
    flex: 1,
    direction: "column"
  }, CalendarDate_jsx(react_["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    py: 2
  }, "Selecciona el d\xEDa"), CalendarDate_jsx(external_react_datepicker_default.a, {
    selected: date,
    onChange: date => onChangeDate(date),
    inline: true,
    minDate: new Date(),
    locale: "es-mx",
    filterDate: isWeekday
  }));
};
// CONCATENATED MODULE: ./src/utils/formatTime.tsx
const minutesToHour = minutes => {
  const hour = minutes / 60; // const hourWuthoutDecimal = Number(hour.toFixed(0));

  const decimals = hour % 1;
  const min = decimals * 60;

  if (min === 0) {
    return `${hour.toFixed(0)} hrs`;
  } else if (hour < 1) {
    return `${min} mins`;
  } else {
    return `${hour.toFixed(0)}:${min} hrs`;
  }
};
// CONCATENATED MODULE: ./src/components/business/CalendarTime.tsx
var CalendarTime_jsx = external_react_default.a.createElement;





const CalendarTime = ({
  hours
}) => {
  // context
  const {
    date,
    totalTime,
    setTime,
    time
  } = Object(external_react_["useContext"])(BookingContext);
  const numElements = totalTime / 15; // states

  const {
    0: hoursState,
    1: setHoursState
  } = Object(external_react_["useState"])([]);
  const {
    0: highlightDate,
    1: setHighlightDate
  } = Object(external_react_["useState"])([]);
  const {
    0: servicesSelected,
    1: setServicesSelected
  } = Object(external_react_["useState"])([]);
  const daySelected = hours.filter(e => e.dayOfWeek === new Date(date).getDay())[0]; // const [selectedTime, setSelectedTime] = useState('');

  Object(external_react_["useEffect"])(() => {
    getHours();
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (hoursState.length > 0) {
      const indexSelected = hoursState.indexOf(time);

      if (indexSelected >= 0) {
        let nums = [];

        for (let x = indexSelected; x < indexSelected + numElements; x++) {
          nums.push(x);
        }

        setServicesSelected(nums);
      }
    }
  }, [time, hoursState]);

  const getHours = () => {
    const timeFrom = external_moment_default()(daySelected.openFrom, [external_moment_default.a.ISO_8601, 'HH:mm']).hour();
    const timeTill = external_moment_default()(daySelected.openTill, [external_moment_default.a.ISO_8601, 'HH:mm']).hour();
    var arr = [],
        i,
        j;

    for (i = timeFrom; i < timeTill; i++) {
      for (j = 0; j < 4; j++) {
        arr.push(i + ":" + (j === 0 ? "00" : 15 * j));
      }
    }

    setHoursState(arr);
  };

  const handleSelect = index => {
    let nums = [];

    for (let x = index; x < index + numElements; x++) {
      nums.push(x);
    }

    setHighlightDate([index, ...nums]);
  };

  const isSelected = index => {
    const isActive = highlightDate.filter(e => e === index)[0];
    return isActive !== undefined;
  };

  const isActive = index => {
    const isActive = servicesSelected.filter(e => e === index)[0];
    return isActive !== undefined;
  };

  const handleSelectedTime = (item, index) => {
    const isAvailable = hoursState[index + (numElements - 1)];

    if (isAvailable) {
      // setSelectedTime(item);
      setTime(item);
      let nums = [];

      for (let x = index; x < index + numElements; x++) {
        nums.push(x);
      }

      setServicesSelected(nums);
    } else {
      console.log('NO DISPONIBLE');
    }
  };

  return CalendarTime_jsx(react_["Flex"], {
    alignItems: "center",
    justify: "center",
    direction: "column",
    w: "100%"
  }, CalendarTime_jsx(react_["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    py: 2
  }, "Selecciona la hora"), CalendarTime_jsx(react_["Text"], null, "Tiempo de servicio aproximado ", minutesToHour(totalTime)), CalendarTime_jsx(react_["SimpleGrid"], {
    columns: 4,
    spacing: 1,
    w: "100%"
  }, hoursState.map((item, index) => CalendarTime_jsx(react_["Box"], {
    key: index,
    p: 2,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "borders",
    cursor: "pointer",
    onClick: () => handleSelectedTime(item, index),
    onMouseEnter: e => handleSelect(index),
    className: `${isSelected(index) ? 'service-selected' : ''} ${isActive(index) ? 'service-active' : ''}`
  }, CalendarTime_jsx(react_["Text"], null, item)))), CalendarTime_jsx("style", null, `
        .data-class:nth-child(5) ~ .data-class.apple ~ .data-class.apple {
          background-color: #0ea;
        }

        .service-selected {
          background-color: #25CB67;
          color: #FFF;
        }

        .service-active {
          background-color: #020621 !important;
          color: #FFF;
        }

        .service:hover ~ .service:nth-child(1) {
          background-color: red;
        }
      `));
};
// CONCATENATED MODULE: ./src/utils/formatDate.tsx

const formatTime = time => {
  return external_moment_default()(time, [external_moment_default.a.ISO_8601, 'HH:mm']).format('H:mm a');
};
const formatDate = date => {
  return external_moment_default()(date).format('DD MMMM YYYY');
};
// CONCATENATED MODULE: ./src/components/business/BookingResume.tsx
var BookingResume_jsx = external_react_default.a.createElement;






/*
  Nombre del negocio
  Dirección
  Telefono

  Hora - 
  Fecha - 23 de diciembre 2021

  Servicios
    - Corte para hombre 15min $59
    - Corte para dama 30min $59

  Mensaje

  Confirmación-
*/
const BookingResume = ({}) => {
  const {
    date,
    time,
    services,
    totalTime,
    setMessage,
    message
  } = Object(external_react_["useContext"])(BookingContext);
  return BookingResume_jsx(react_["Flex"], {
    alignItems: "center",
    justify: "center",
    flex: 1,
    direction: "column"
  }, BookingResume_jsx(react_["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    py: 2
  }, "Confirmaci\xF3n"), BookingResume_jsx(react_["Box"], {
    w: "100%"
  }, BookingResume_jsx(react_["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    mb: 3
  }, "D\xEDa y hora"), BookingResume_jsx(react_["Flex"], {
    justify: "space-between",
    mb: 1
  }, BookingResume_jsx(react_["Text"], {
    fontWeight: "semibold"
  }, "Fecha "), BookingResume_jsx(react_["Text"], null, formatDate(date))), BookingResume_jsx(react_["Flex"], {
    justify: "space-between"
  }, BookingResume_jsx(react_["Text"], {
    fontWeight: "semibold"
  }, "Hora "), BookingResume_jsx(react_["Text"], null, time)), BookingResume_jsx(react_["Divider"], {
    my: 6,
    bg: "tomato"
  }), BookingResume_jsx(react_["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    mb: 3
  }, "Servicios"), services.map(service => BookingResume_jsx(react_["Flex"], {
    justify: "space-between"
  }, BookingResume_jsx(react_["Text"], {
    isTruncated: true,
    fontWeight: "semibold",
    fontSize: "sm",
    w: "70%"
  }, service.name), BookingResume_jsx(react_["Text"], {
    fontSize: "xs",
    w: "30%"
  }, service.time ? minutesToHour(service.time) : 0, " / $", service.price, "MXN"))), BookingResume_jsx(react_["Flex"], {
    justify: "flex-end",
    alignItems: "flex-end"
  }, BookingResume_jsx(react_["Text"], {
    fontWeight: "semibold",
    fontSize: "sm",
    my: 3,
    textAlign: "right"
  }, "Aproximado total: ", minutesToHour(totalTime), " ")), BookingResume_jsx(react_["Divider"], {
    my: 6,
    bg: "tomato"
  }), BookingResume_jsx(react_["Box"], null, BookingResume_jsx(react_["Text"], {
    fontSize: "lg",
    fontWeight: "bold",
    mb: 3
  }, "Comentarios"), BookingResume_jsx(react_["Textarea"], {
    variant: "app",
    value: message,
    onChange: e => setMessage(e.target.value)
  }))));
};
// EXTERNAL MODULE: ./src/config/constants.tsx
var constants = __webpack_require__("7OMa");

// EXTERNAL MODULE: ./src/services/HttpClient.tsx
var HttpClient = __webpack_require__("n1X7");

// CONCATENATED MODULE: ./src/services/bookingService.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class bookingService_BookingService extends HttpClient["a" /* default */] {
  constructor() {
    super(constants["a" /* URL_API */]);

    _defineProperty(this, "create", booking => this.instance.post('/booking', booking));
  }

}
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__("/WcL");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/components/business/BookingSuccess.tsx
var BookingSuccess_jsx = external_react_default.a.createElement;




const BookingSuccess = ({}) => {
  const router = Object(router_["useRouter"])();

  const handleConfimration = () => {
    router.push('/');
  };

  return BookingSuccess_jsx(react_["Flex"], {
    justify: "center",
    align: "center",
    spacing: 4,
    direction: "column",
    mt: 6
  }, BookingSuccess_jsx(ai_["AiFillCheckCircle"], {
    size: 70,
    color: "#3BCF75"
  }), BookingSuccess_jsx(react_["Text"], {
    my: 4,
    fontWeight: "bold",
    fontSize: "lg"
  }, "RESERVACI\xD3N CONFIRMADA"), BookingSuccess_jsx(react_["Text"], {
    fontSize: "sm",
    my: 4,
    textAlign: "center"
  }, "Tu reservaci\xF3n se realiz\xF3 correctamente, mantente al pendiente por si el negocio quiere comunicarse contigo o ocurri\xF3 alguna actualizaci\xF3n de la reservaci\xF3n."), BookingSuccess_jsx(react_["Button"], {
    my: 4,
    size: "lg",
    isFullWidth: true,
    variant: "primary",
    color: "#FFF",
    onClick: handleConfimration
  }, "Aceptar"));
};
// CONCATENATED MODULE: ./src/components/business/ModalBooking.tsx
var ModalBooking_jsx = external_react_default.a.createElement;









const ModalBooking = ({
  business,
  isOpen,
  onClose
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    step,
    setStep,
    time,
    date,
    message,
    services,
    totalTime
  } = Object(external_react_["useContext"])(BookingContext);

  const submitBooking = async () => {
    setIsLoading(true);
    console.log('FEcha de reserva', date);
    const d = external_moment_default()(date).format('YYYY-MM-DD').toString();
    console.log('Fecha d', d);
    const dateB = external_moment_default()(`${d} ${time}`).toDate();
    console.log('Fecha dateB', dateB);
    const response = await new bookingService_BookingService().create({
      // bookingDate: moment(date).format('YYYY-MM-DD').toString(),
      bookingDate: dateB,
      bookingTime: time,
      message,
      businessId: business.id,
      businessServices: services,
      totalTime
    });

    if (response.success) {
      setStep(4);
    }

    setIsLoading(false);
  };

  return ModalBooking_jsx(react_["Modal"], {
    isOpen: isOpen,
    onClose: onClose
  }, ModalBooking_jsx(react_["ModalOverlay"], null), ModalBooking_jsx(react_["ModalContent"], null, ModalBooking_jsx(react_["ModalCloseButton"], null), ModalBooking_jsx(react_["ModalBody"], null, ModalBooking_jsx(react_["Flex"], {
    direction: "column"
  }, step === 1 && ModalBooking_jsx(CalendarDate, {
    hours: business.hours
  }), step === 2 && ModalBooking_jsx(CalendarTime, {
    hours: business.hours
  }), step === 3 && ModalBooking_jsx(BookingResume, null), step === 4 && ModalBooking_jsx(BookingSuccess, null))), ModalBooking_jsx(react_["ModalFooter"], null, ModalBooking_jsx(react_["Flex"], {
    justify: "space-between",
    w: "100%"
  }, step > 1 && step < 4 && ModalBooking_jsx(react_["Button"], {
    variant: "outline",
    onClick: () => setStep(step - 1)
  }, "Atr\xE1s"), ModalBooking_jsx(react_["Spacer"], null), step < 3 && ModalBooking_jsx(react_["Button"], {
    alignSelf: "flex-end",
    variant: "primary",
    onClick: () => setStep(step + 1)
  }, "Siguiente"), step === 3 && ModalBooking_jsx(react_["Button"], {
    alignSelf: "flex-end",
    variant: "primary",
    onClick: submitBooking,
    isLoading: isLoading
  }, "Confirmar reserva")))), ModalBooking_jsx("style", null, `
        .react-datepicker__header {
          background-color: #FFF;
          border-bottom: none;
        }

        .react-datepicker__current-month {
          padding-bottom: 20px;
        }

        .react-datepicker {
          font-size: 14px;
          border: none;
        }

        .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-weight: bold;
        }

        .react-datepicker__day-name {
          color: red;
          font-size: 12px;
          color: rgb(113, 113, 113) !important;
        }

        .react-datepicker__day--selected {
          background-color: #325CB67;
        }
        

      `));
};
// CONCATENATED MODULE: ./src/components/business/BookingBox.tsx
var BookingBox_jsx = external_react_default.a.createElement;


 // types


const BookingBox = ({
  handleBooking
}) => {
  const {
    setServices,
    services,
    setTotalTime,
    totalTime
  } = Object(external_react_["useContext"])(BookingContext);
  console.log('Servicios en store4', services);

  const deleteService = index => {
    setServices([...services.slice(0, index), ...services.slice(index + 1)]);
  };

  return BookingBox_jsx(external_react_default.a.Fragment, null, BookingBox_jsx(react_["Box"], null, BookingBox_jsx(react_["Box"], {
    mt: 4,
    w: "100%",
    maxHeight: "330px",
    overflow: "scroll",
    shadow: "rgba(0, 0, 0, 0.12) 0px 6px 16px"
  }, BookingBox_jsx(react_["Stack"], {
    mb: 3
  }, services.map((item, index) => BookingBox_jsx(react_["Stack"], {
    isInline: true,
    align: "center",
    borderBottomWidth: 1,
    borderColor: "borders",
    key: index,
    px: 4,
    py: 3
  }, BookingBox_jsx(react_["Flex"], {
    align: "center",
    justify: "space-evenly",
    flex: "100%"
  }, BookingBox_jsx(react_["Text"], {
    fontSize: "md",
    fontWeight: "semibold",
    noOfLines: 2,
    pr: 2
  }, item.name), BookingBox_jsx(react_["Spacer"], null), BookingBox_jsx(react_["Flex"], {
    alignSelf: "center"
  }, BookingBox_jsx(react_["Flex"], {
    direction: "column"
  }, BookingBox_jsx(react_["Text"], {
    fontSize: "xs",
    pr: "10px"
  }, "$", item.price, "MXN"), BookingBox_jsx(react_["Text"], {
    fontSize: "xs",
    pr: "10px"
  }, " ", item.time, "min"))), BookingBox_jsx(react_["IconButton"], {
    "aria-label": "Eliminar",
    icon: BookingBox_jsx(ai_["AiOutlineClose"], null),
    variant: "ghost",
    onClick: () => deleteService(index)
  })))))), BookingBox_jsx(react_["Tooltip"], {
    label: "Selecciona un servicio para reservar",
    isDisabled: true
  }, BookingBox_jsx(react_["Button"], {
    onClick: handleBooking,
    variant: "primary",
    isFullWidth: true,
    size: "lg",
    isDisabled: services.length === 0
  }, "Reservar"))));
};
// CONCATENATED MODULE: ./src/components/business/BusinessHours.tsx
var BusinessHours_jsx = external_react_default.a.createElement;



const nameDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const BusinessHours = ({
  hours
}) => {
  return BusinessHours_jsx(react_["Box"], null, BusinessHours_jsx(react_["Heading"], {
    as: "h3",
    size: "lg",
    mb: 4
  }, "Horarios"), BusinessHours_jsx(react_["Stack"], {
    mt: 3,
    width: "50%"
  }, hours.map(item => {
    if (!item.isOpen) {
      return BusinessHours_jsx(react_["Stack"], {
        isInline: true,
        py: 1,
        justify: "space-between",
        key: item.id
      }, BusinessHours_jsx(react_["Text"], {
        fontSize: "sm"
      }, nameDays[item.dayOfWeek]), BusinessHours_jsx(react_["Text"], {
        fontSize: "sm"
      }, "Cerrado"));
    }

    return BusinessHours_jsx(react_["Stack"], {
      isInline: true,
      py: 1,
      justify: "space-between",
      key: item.id
    }, BusinessHours_jsx(react_["Text"], {
      fontSize: "sm"
    }, nameDays[item.dayOfWeek]), BusinessHours_jsx(react_["Text"], {
      fontSize: "sm"
    }, formatTime(item.openFrom), " - ", formatTime(item.openTill)));
  })));
};
// CONCATENATED MODULE: ./src/components/business/BusinessServices.tsx
var BusinessServices_jsx = external_react_default.a.createElement;




const BusinessServices = ({
  businessServices
}) => {
  const {
    setServices,
    setTotalTime,
    totalTime,
    services
  } = Object(external_react_["useContext"])(BookingContext);

  const handleSelectService = (item, index) => {
    let servicesTmp = [...services];
    servicesTmp = [...services, item];
    setServices(servicesTmp); // Eliminar servoicx
    // const eIndex = services.indexOf(item)
    // servicesTmp = [
    //   ...services.slice(0, eIndex),
    //   ...services.slice(eIndex + 1)
    // ];
    // setServices(servicesTmp)

    const totalT = servicesTmp.reduce((total, service) => total + service.time, 0);
    setTotalTime(totalT);
  };

  return BusinessServices_jsx(react_["Box"], null, BusinessServices_jsx(react_["Heading"], {
    as: "h3",
    size: "lg",
    mb: 6
  }, "Servicios"), BusinessServices_jsx(react_["SimpleGrid"], {
    columns: 2,
    spacing: 2
  }, businessServices.map((item, index) => BusinessServices_jsx(react_["Box"], {
    px: 5,
    py: 4,
    borderWidth: 1,
    borderColor: "borders",
    borderRadius: 3
  }, BusinessServices_jsx(react_["Text"], {
    noOfLines: 2,
    fontWeight: "bold",
    mb: 2,
    h: "48px"
  }, item.name), BusinessServices_jsx(react_["Flex"], {
    alignItems: "flex-end"
  }, BusinessServices_jsx(react_["Text"], {
    color: "subtext",
    fontSize: "sm",
    fontWeight: "500",
    mr: 4
  }, "$", item.price, "MXN"), BusinessServices_jsx(react_["Text"], {
    color: "subtext",
    fontSize: "sm",
    fontWeight: "500"
  }, item.time ? minutesToHour(item.time) : 0), BusinessServices_jsx(react_["Spacer"], null), BusinessServices_jsx(react_["Button"], {
    variant: "primary-outline",
    size: "sm",
    onClick: () => handleSelectService(item, index)
  }, "Reservar"))))));
};
// EXTERNAL MODULE: ./src/context/userContext.tsx
var userContext = __webpack_require__("e9ux");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/components/business/MetaBusiness.tsx
var MetaBusiness_jsx = external_react_default.a.createElement;


const MetaBusiness = ({
  business
}) => {
  var _business$businessAdd, _business$businessAdd2, _business$businessAdd3;

  console.log('Business meta', business);
  return MetaBusiness_jsx(head_default.a, null, MetaBusiness_jsx("title", null, business.name, " en ", (_business$businessAdd = business.businessAddress) === null || _business$businessAdd === void 0 ? void 0 : _business$businessAdd.addressMap, " - Reserly"), MetaBusiness_jsx("meta", {
    name: "description",
    content: `Reserva con ${business.name} en ${(_business$businessAdd2 = business.businessAddress) === null || _business$businessAdd2 === void 0 ? void 0 : _business$businessAdd2.addressMap} ¡en minutos!`
  }), MetaBusiness_jsx("meta", {
    property: "og:url",
    content: `https://reserly.mx/`
  }), MetaBusiness_jsx("meta", {
    property: "og:type",
    content: "website"
  }), MetaBusiness_jsx("meta", {
    property: "og:title",
    content: business.name
  }), MetaBusiness_jsx("meta", {
    property: "og:description",
    content: `Reserva con ${business.name} en ${(_business$businessAdd3 = business.businessAddress) === null || _business$businessAdd3 === void 0 ? void 0 : _business$businessAdd3.addressMap} ¡en minutos!`
  }));
};
// CONCATENATED MODULE: ./src/components/business/BusinessPhotos.tsx
var BusinessPhotos_jsx = external_react_default.a.createElement;




const BusinessPhotos = ({
  businessId
}) => {
  const {
    0: photos,
    1: setPhotos
  } = Object(external_react_["useState"])([]);
  const {
    user
  } = Object(external_react_["useContext"])(userContext["a" /* UserContext */]);
  Object(external_react_["useEffect"])(() => {
    const fetch = async () => {
      const response = await new businessService["a" /* BusinessService */]().getPhotos(businessId);
      console.log('Respuestas', response);

      if (response.success) {
        console.log('response.photos', response.photos);
        setPhotos(response.photos);
      }
    };

    fetch();
  }, []);
  return BusinessPhotos_jsx(react_["Flex"], {
    direction: "column",
    flex: 1
  }, BusinessPhotos_jsx(react_["Heading"], {
    as: "h3",
    size: "lg",
    mb: 3
  }, "Fotos"), BusinessPhotos_jsx(react_["SimpleGrid"], {
    columns: 3,
    mt: 4
  }, photos.slice(0, 6).map((photo, index) => BusinessPhotos_jsx(react_["Box"], {
    p: 2,
    key: index,
    role: "group"
  }, BusinessPhotos_jsx(react_["Image"], {
    w: "200px",
    h: "133px",
    objectFit: "cover",
    src: photo.file
  })))));
};
// CONCATENATED MODULE: ./src/pages/b/[name]/[id].tsx
var _id_jsx = external_react_default.a.createElement;



// local components










const getServerSideProps = async ({
  params
}) => {
  var _response;

  let response = null;

  if (params !== null && params !== void 0 && params.id) {
    response = await new businessService["a" /* BusinessService */]().getById(Number(params.id));
  }

  return {
    props: {
      id: 1,
      business: (_response = response) === null || _response === void 0 ? void 0 : _response.business
    }
  };
};

const Business = ({
  business
}) => {
  const {
    businessAddress,
    businessCategory,
    hours,
    id
  } = business; // context

  const {
    user,
    isLogged
  } = Object(external_react_["useContext"])(userContext["a" /* UserContext */]); // hooks

  const {
    isOpen,
    onOpen,
    onClose
  } = Object(react_["useDisclosure"])();

  const handleBooking = () => onOpen();

  const handleContact = () => {
    if (isLogged) {
      alert(`Hola ${user.firstName}`);
    } else {
      alert('No hay usuairo en sesion');
    }
  };

  return _id_jsx(BookingProvider, null, _id_jsx(MetaBusiness, {
    business: business
  }), _id_jsx(ModalBooking, {
    business: business,
    isOpen: isOpen,
    onClose: onClose
  }), _id_jsx(Wrapper["a" /* Wrapper */], null, _id_jsx(react_["Flex"], {
    mb: 6
  }, business.cover && _id_jsx(react_["Image"], {
    objectFit: "cover",
    w: "250px",
    h: "166px",
    rounded: "md",
    src: business.cover
  }), _id_jsx(react_["Box"], {
    pl: 6,
    pr: 24
  }, _id_jsx(react_["Heading"], {
    mt: 4,
    mb: 4
  }, business.name), _id_jsx(react_["Text"], {
    my: 2,
    textTransform: "uppercase",
    fontSize: "sm",
    fontWeight: "bold",
    color: "primary"
  }, businessCategory === null || businessCategory === void 0 ? void 0 : businessCategory.name), _id_jsx(react_["Text"], {
    fontSize: "xs",
    color: "grey",
    mb: 2,
    display: "flex",
    alignItems: "center"
  }, _id_jsx(ti_["TiLocation"], null), businessAddress === null || businessAddress === void 0 ? void 0 : businessAddress.addressMap), _id_jsx(react_["Text"], {
    fontSize: "xs",
    color: "grey",
    mb: 2,
    display: "flex",
    alignItems: "center"
  }, _id_jsx(ti_["TiDevicePhone"], null), business.phone))), _id_jsx(react_["Flex"], {
    mb: 10,
    direction: "row"
  }, _id_jsx(react_["Box"], {
    w: "58.33%"
  }, _id_jsx(react_["Box"], null, _id_jsx(react_["Heading"], {
    as: "h3",
    size: "lg",
    mb: 3
  }, "Informaci\xF3n"), _id_jsx(react_["Text"], {
    py: 3,
    color: "subtext"
  }, business.description)), _id_jsx(react_["Divider"], {
    my: 8
  }), business.businessService && _id_jsx(BusinessServices, {
    businessServices: business.businessService
  }), _id_jsx(react_["Divider"], {
    my: 8
  }), id && _id_jsx(BusinessPhotos, {
    businessId: id
  }), _id_jsx(react_["Divider"], {
    my: 8
  }), _id_jsx(BusinessHours, {
    hours: hours
  }), _id_jsx(react_["Divider"], {
    my: 8
  })), _id_jsx(react_["Box"], {
    w: "36.33%",
    ml: "4.33%",
    p: 4
  }, _id_jsx(react_["Box"], {
    pos: "sticky",
    top: "70px",
    right: "0px",
    h: "100vh"
  }, _id_jsx(BookingBox, {
    handleBooking: handleBooking
  }))))));
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Business);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7OMa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export API_DOMAIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_API; });
/* unused harmony export APP_NAME */
/* unused harmony export TOKEN_MAPBOX */
// export const API_DOMAIN =  process.browser ? 'http://localhost:8001' : 'http://api:8001'
const API_DOMAIN = 'http://localhost:8001'; // export const API_DOMAIN = 'http://api:8001'

const URL_API = `${API_DOMAIN}/api/v1`;
const APP_NAME = 'Reserly';
const TOKEN_MAPBOX = 'pk.eyJ1Ijoib2dyYWNpYSIsImEiOiJfdmpwaktNIn0.h9MNtUvMtDA2UxWbnMIh_g';

/***/ }),

/***/ "8vme":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ businessService_BusinessService; });

// EXTERNAL MODULE: ./src/config/constants.tsx
var constants = __webpack_require__("7OMa");

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// CONCATENATED MODULE: ./src/utils/propsToParams.tsx

const propsToParams = params => {
  return external_query_string_default.a.stringify(params, {
    skipNull: true,
    skipEmptyString: true,
    strict: true
  });
};
// EXTERNAL MODULE: ./src/services/HttpClient.tsx
var HttpClient = __webpack_require__("n1X7");

// CONCATENATED MODULE: ./src/services/businessService.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class businessService_BusinessService extends HttpClient["a" /* default */] {
  constructor() {
    super(constants["a" /* URL_API */]);

    _defineProperty(this, "get", params => this.instance.get(`/businesses?${propsToParams(params)}`));

    _defineProperty(this, "getById", id => this.instance.get(`/businesses/${id}`));

    _defineProperty(this, "getPhotos", id => this.instance.get(`/businesses/${id}/photos`));
  }

}

/***/ }),

/***/ "JXOt":
/***/ (function(module, exports) {

module.exports = require("moment/locale/es-mx");

/***/ }),

/***/ "LZ34":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "ZY4h":
/***/ (function(module, exports) {

module.exports = require("date-fns/locale/es/index");

/***/ }),

/***/ "bQ0D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("n1X7");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7OMa");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class UserService extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
  constructor() {
    super(_config_constants__WEBPACK_IMPORTED_MODULE_1__[/* URL_API */ "a"]);

    _defineProperty(this, "login", data => this.instance.post('/users/auth', data));

    _defineProperty(this, "signup", data => this.instance.post('/users', data));

    _defineProperty(this, "logout", () => this.instance.get('/users/auth/logout'));

    _defineProperty(this, "getMe", () => this.instance.get('/users'));
  }

}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "e9ux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProvider; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_general_LoadingView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eyCa");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bQ0D");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const UserContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);
const UserProvider = ({
  children
}) => {
  // hooks
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])(); // state

  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: isLogged,
    1: setIsLogged
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const fetchMeUser = async () => {
    const response = await new _services_userService__WEBPACK_IMPORTED_MODULE_3__[/* UserService */ "a"]().getMe();

    if (response.success && response.user) {
      setUser(response.user);
      setIsLogged(true);
    }

    setIsLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetchMeUser();
  }, []);

  const reloadUser = () => {
    fetchMeUser();
  };

  const logout = async () => {
    await new _services_userService__WEBPACK_IMPORTED_MODULE_3__[/* UserService */ "a"]().logout();
    fetchMeUser(); // router.push('/');

    location.href = '/';
  };

  if (isLoading) {
    return __jsx(_components_general_LoadingView__WEBPACK_IMPORTED_MODULE_2__[/* LoadingView */ "a"], null);
  }

  return __jsx(UserContext.Provider, {
    value: {
      user,
      isLogged,
      reloadUser,
      logout
    }
  }, children);
};

/***/ }),

/***/ "eyCa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingView; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const LoadingView = () => {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Flex"], {
    direction: "column",
    justify: "center",
    align: "center",
    flex: 1,
    w: "100%",
    height: "100vh"
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Spinner"], {
    size: "md",
    color: "primary"
  }));
};

/***/ }),

/***/ "n1X7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class HttpClient {
  constructor(baseURL) {
    _defineProperty(this, "instance", void 0);

    _defineProperty(this, "_initializeResponseInterceptor", () => {
      this.instance.interceptors.response.use(this._handleResponse, this._handleError);
    });

    _defineProperty(this, "_handleResponse", ({
      data
    }) => data);

    _defineProperty(this, "_handleError", error => Promise.reject(error));

    // /axios.defaults.withCredentials = true;
    this.instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL,
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    this._initializeResponseInterceptor();
  }

}

/***/ }),

/***/ "uHth":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = ({
  children,
  variant = "regular"
}) => {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 8,
    mx: "auto",
    maxW: variant === 'regular' ? "1180px" : "400px",
    w: "100%"
  }, children);
};

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });