module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "/mjN":
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

// EXTERNAL MODULE: ./src/services/businessService.tsx
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
// EXTERNAL MODULE: ./src/utils/formatTime.tsx
var formatTime = __webpack_require__("4Co3");

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
  }, "Selecciona la hora"), CalendarTime_jsx(react_["Text"], null, "Tiempo de servicio aproximado ", Object(formatTime["a" /* minutesToHour */])(totalTime)), CalendarTime_jsx(react_["SimpleGrid"], {
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
// EXTERNAL MODULE: ./src/utils/formatDate.tsx
var formatDate = __webpack_require__("5gGA");

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
  }, "Fecha "), BookingResume_jsx(react_["Text"], null, Object(formatDate["a" /* formatDate */])(date))), BookingResume_jsx(react_["Flex"], {
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
  }, service.time ? Object(formatTime["a" /* minutesToHour */])(service.time) : 0, " / $", service.price, "MXN"))), BookingResume_jsx(react_["Flex"], {
    justify: "flex-end",
    alignItems: "flex-end"
  }, BookingResume_jsx(react_["Text"], {
    fontWeight: "semibold",
    fontSize: "sm",
    my: 3,
    textAlign: "right"
  }, "Aproximado total: ", Object(formatTime["a" /* minutesToHour */])(totalTime), " ")), BookingResume_jsx(react_["Divider"], {
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
// EXTERNAL MODULE: ./src/services/bookingService.tsx
var bookingService = __webpack_require__("7kPd");

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__("/WcL");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/components/business/BookingSuccess.tsx
var BookingSuccess_jsx = external_react_default.a.createElement;





const BookingSuccess = ({}) => {
  const router = Object(router_["useRouter"])();
  const {
    setStep
  } = Object(external_react_["useContext"])(BookingContext);

  const handleConfimration = () => {
    router.push('/bookings');
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
    setServices,
    totalTime
  } = Object(external_react_["useContext"])(BookingContext);

  const submitBooking = async () => {
    setIsLoading(true);
    const d = external_moment_default()(date).format('YYYY-MM-DD').toString();
    const dateB = external_moment_default()(`${d} ${time}`).toDate();
    const response = await new bookingService["a" /* BookingService */]().create({
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
      setServices([]);
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

  const deleteService = index => {
    setServices([...services.slice(0, index), ...services.slice(index + 1)]);
  };

  return BookingBox_jsx(external_react_default.a.Fragment, null, BookingBox_jsx(react_["Box"], null, BookingBox_jsx(react_["Box"], {
    mt: 0,
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
    fontSize: "24px",
    mb: 4
  }, "Horario"), BusinessHours_jsx(react_["Stack"], {
    mt: 3,
    width: {
      base: '100%',
      md: '50%'
    }
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
    }, Object(formatDate["b" /* formatTime */])(item.openFrom), " - ", Object(formatDate["b" /* formatTime */])(item.openTill)));
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
    setServices(servicesTmp);
    const totalT = servicesTmp.reduce((total, service) => total + service.time, 0);
    setTotalTime(totalT);
  };

  return BusinessServices_jsx(react_["Box"], null, BusinessServices_jsx(react_["Heading"], {
    as: "h2",
    fontSize: "24px",
    mb: 6
  }, "Servicios"), BusinessServices_jsx(react_["SimpleGrid"], {
    columns: {
      base: 1,
      md: 2
    },
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
  }, item.time ? Object(formatTime["a" /* minutesToHour */])(item.time) : 0), BusinessServices_jsx(react_["Spacer"], null), BusinessServices_jsx(react_["Button"], {
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

// EXTERNAL MODULE: ./src/utils/generateName.tsx
var generateName = __webpack_require__("cwhE");

// CONCATENATED MODULE: ./src/components/business/MetaBusiness.tsx
var MetaBusiness_jsx = external_react_default.a.createElement;



const MetaBusiness = ({
  business
}) => {
  var _business$businessAdd, _business$businessAdd2, _business$businessAdd3;

  return MetaBusiness_jsx(head_default.a, null, MetaBusiness_jsx("title", null, business.name, " en ", (_business$businessAdd = business.businessAddress) === null || _business$businessAdd === void 0 ? void 0 : _business$businessAdd.addressMap, " - Reserly"), MetaBusiness_jsx("meta", {
    name: "description",
    content: `Reserva con ${business.name} en ${(_business$businessAdd2 = business.businessAddress) === null || _business$businessAdd2 === void 0 ? void 0 : _business$businessAdd2.addressMap} ¡en minutos!`
  }), MetaBusiness_jsx("meta", {
    property: "og:url",
    content: `https://reserly.mx/b/${Object(generateName["a" /* generateName */])(business.name)}/${business.id}`
  }), MetaBusiness_jsx("meta", {
    property: "og:type",
    content: "website"
  }), MetaBusiness_jsx("meta", {
    property: "og:title",
    content: business.name
  }), MetaBusiness_jsx("meta", {
    property: "og:description",
    content: `Reserva con ${business.name} en ${(_business$businessAdd3 = business.businessAddress) === null || _business$businessAdd3 === void 0 ? void 0 : _business$businessAdd3.addressMap} ¡en minutos!`
  }), MetaBusiness_jsx("meta", {
    property: "og:image",
    content: business.cover
  }), MetaBusiness_jsx("meta", {
    property: "og:image",
    content: business.cover
  }), MetaBusiness_jsx("meta", {
    property: "og:image:width",
    content: "720"
  }), MetaBusiness_jsx("meta", {
    property: "og:image:height",
    content: "423"
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
  }, photos.length > 0 && BusinessPhotos_jsx(react_["Box"], null, BusinessPhotos_jsx(react_["Divider"], {
    my: 8
  }), BusinessPhotos_jsx(react_["Heading"], {
    as: "h3",
    fontSize: "24px",
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
  }))))));
};
// CONCATENATED MODULE: ./src/components/business/BookingBoxMobile.tsx
var BookingBoxMobile_jsx = external_react_default.a.createElement;




const BookingBoxMobile = ({
  handleBooking
}) => {
  const {
    setServices,
    services,
    setTotalTime,
    totalTime
  } = Object(external_react_["useContext"])(BookingContext);
  const {
    0: showServices,
    1: setShowServices
  } = Object(external_react_["useState"])(false);
  return BookingBoxMobile_jsx(react_["Box"], {
    display: {
      base: services.length > 0 ? 'block' : 'none',
      md: 'none'
    },
    bg: "#FFF",
    pos: "fixed",
    bottom: "0px",
    p: 4,
    w: "100%",
    boxShadow: "10px -4px 8px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  }, BookingBoxMobile_jsx(react_["Box"], {
    top: "70px",
    right: "0px",
    display: {
      base: showServices ? 'block' : 'none',
      md: 'none'
    }
  }, BookingBoxMobile_jsx(BookingBox, {
    handleBooking: handleBooking
  })), BookingBoxMobile_jsx(react_["Button"], {
    isFullWidth: true,
    variant: showServices ? 'gray' : 'primary',
    mt: 1,
    onClick: () => setShowServices(!showServices)
  }, !showServices ? `Ver servicios para reservar (${services.length})` : 'Ocultar'));
};
// CONCATENATED MODULE: ./src/pages/business.tsx
var business_jsx = external_react_default.a.createElement;


// local libraries

// local components












const getServerSideProps = async ({
  query
}) => {
  var _response;

  let response = null;

  if (query !== null && query !== void 0 && query.id) {
    response = await new businessService["a" /* BusinessService */]().getById(Number(query.id));
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
  var _business$businessAdd, _business$businessAdd2;

  const {
    businessAddress,
    businessCategory,
    hours,
    id
  } = business; // context

  const {
    user,
    isLogged,
    setOpenModalLogin,
    openModalLogin
  } = Object(external_react_["useContext"])(userContext["a" /* UserContext */]); // hooks

  const {
    isOpen,
    onOpen,
    onClose
  } = Object(react_["useDisclosure"])();

  const handleBooking = () => {
    if (isLogged) {
      onOpen();
    } else {
      console.log('No logeado', openModalLogin);
      setOpenModalLogin(true);
    }
  };

  return business_jsx(BookingProvider, null, business_jsx(head_default.a, null, business_jsx("title", null, business.name, " en ", (_business$businessAdd = business.businessAddress) === null || _business$businessAdd === void 0 ? void 0 : _business$businessAdd.addressMap, " - Reserly"), business_jsx("meta", {
    name: "description",
    content: `Reserva con ${business.name} en ${(_business$businessAdd2 = business.businessAddress) === null || _business$businessAdd2 === void 0 ? void 0 : _business$businessAdd2.addressMap} ¡en minutos!`
  })), business_jsx(MetaBusiness, {
    business: business
  }), business_jsx(ModalBooking, {
    business: business,
    isOpen: isOpen,
    onClose: onClose
  }), business_jsx(Wrapper["a" /* Wrapper */], null, business_jsx(react_["Flex"], {
    mb: 6,
    pb: 4,
    borderBottomWidth: 2,
    borderColor: "borders",
    justifyContent: "space-between"
  }, business_jsx(react_["Box"], {
    pl: 0,
    pr: {
      base: 0,
      md: 24
    },
    w: {
      base: '100%',
      md: '880px'
    },
    textAlign: {
      base: 'center',
      md: 'left'
    }
  }, business_jsx(react_["Heading"], {
    mt: 4,
    mb: 4,
    fontSize: "44px"
  }, business.name), business_jsx(react_["Text"], {
    my: 2,
    textTransform: "uppercase",
    fontSize: "sm",
    fontWeight: "bold",
    color: "primary"
  }, businessCategory === null || businessCategory === void 0 ? void 0 : businessCategory.name), business_jsx(react_["Text"], {
    fontSize: "sm",
    color: "grey",
    mb: 2,
    display: "flex",
    justifyContent: {
      base: 'center',
      md: 'flex-start'
    }
  }, business_jsx(ti_["TiLocation"], {
    style: {
      marginBottom: '2px',
      marginRight: '4px'
    },
    size: "18px"
  }), businessAddress === null || businessAddress === void 0 ? void 0 : businessAddress.addressMap), business.phone && business_jsx(react_["Text"], {
    fontSize: "sm",
    color: "grey",
    mb: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: {
      base: 'center',
      md: 'flex-start'
    }
  }, business_jsx(ti_["TiDevicePhone"], {
    style: {
      marginBottom: '2px',
      marginRight: '4px'
    },
    size: "18px"
  }), business.phone), business_jsx(react_["Text"], {
    py: 3,
    color: "subtext"
  }, business.description)), business.cover && business_jsx(react_["Box"], {
    w: "300px",
    display: {
      base: 'none',
      md: 'block'
    }
  }, business_jsx(react_["Image"], {
    objectFit: "cover",
    htmlWidth: "300px",
    htmlHeight: "200px",
    w: "300px",
    h: "200px",
    rounded: "md",
    src: business.cover
  }))), business_jsx(react_["Flex"], {
    mb: 10,
    direction: {
      base: 'column',
      md: 'row'
    }
  }, business_jsx(react_["Box"], {
    w: {
      base: '99%',
      md: '58.33%'
    },
    px: {
      base: 3,
      md: 0
    }
  }, business.businessService && business_jsx(BusinessServices, {
    businessServices: business.businessService
  }), id && business_jsx(BusinessPhotos, {
    businessId: id
  }), business_jsx(react_["Divider"], {
    my: 8
  }), business_jsx(BusinessHours, {
    hours: hours
  }), business_jsx(react_["Divider"], {
    my: 8
  })), business_jsx(react_["Box"], {
    w: "36.33%",
    ml: "4.33%",
    px: 4,
    display: {
      base: 'none',
      md: 'block'
    }
  }, business_jsx(react_["Box"], {
    pos: "sticky",
    top: "70px",
    right: "0px",
    h: "100vh"
  }, business_jsx(BookingBox, {
    handleBooking: handleBooking
  })))), business_jsx(BookingBoxMobile, {
    handleBooking: handleBooking
  })));
};

/* harmony default export */ var pages_business = __webpack_exports__["default"] = (Business);

/***/ }),

/***/ "2FnJ":
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ }),

/***/ "4Co3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return minutesToHour; });
const minutesToHour = minutes => {
  const hour = minutes / 60;
  const min = hour % 1 * 60;

  if (min === 0) {
    return `${Math.trunc(hour)} hrs`;
  } else if (hour < 1) {
    return `${min} mins`;
  } else {
    return `${Math.trunc(hour)}:${min} hrs`;
  }
};

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/mjN");


/***/ }),

/***/ "5gGA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const formatTime = time => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(time, [moment__WEBPACK_IMPORTED_MODULE_0___default.a.ISO_8601, 'HH:mm']).format('H:mm a');
};
const formatDate = date => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD MMMM YYYY');
};

/***/ }),

/***/ "7OMa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export API_DOMAIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_API; });
/* unused harmony export APP_NAME */
/* unused harmony export TOKEN_MAPBOX */
// export const API_DOMAIN =  process.browser ? 'http://localhost:8001' : 'http://api:8001'
const API_DOMAIN = "https://api.reserly.mx" || false; // export const API_DOMAIN = 'https://api.reserly.mx';
// export const API_DOMAIN = 'http://api:8001'

const URL_API = `${API_DOMAIN}/api/v1`;
const APP_NAME = 'Reserly';
const TOKEN_MAPBOX = 'pk.eyJ1Ijoib2dyYWNpYSIsImEiOiJfdmpwaktNIn0.h9MNtUvMtDA2UxWbnMIh_g';

/***/ }),

/***/ "7kPd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingService; });
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7OMa");
/* harmony import */ var _utils_propsToParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b+UU");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("n1X7");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class BookingService extends _HttpClient__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"] {
  constructor() {
    super(_config_constants__WEBPACK_IMPORTED_MODULE_0__[/* URL_API */ "a"]);

    _defineProperty(this, "create", booking => this.instance.post('/bookings', booking));

    _defineProperty(this, "getAll", params => this.instance.get(`/bookings?${Object(_utils_propsToParams__WEBPACK_IMPORTED_MODULE_1__[/* propsToParams */ "a"])(params)}`));
  }

}

/***/ }),

/***/ "8vme":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessService; });
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7OMa");
/* harmony import */ var _utils_propsToParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b+UU");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("n1X7");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class BusinessService extends _HttpClient__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"] {
  constructor() {
    super(_config_constants__WEBPACK_IMPORTED_MODULE_0__[/* URL_API */ "a"]);

    _defineProperty(this, "get", params => this.instance.get(`/businesses?${Object(_utils_propsToParams__WEBPACK_IMPORTED_MODULE_1__[/* propsToParams */ "a"])(params)}`));

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

/***/ "b+UU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return propsToParams; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Lc87");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);

const propsToParams = params => {
  return query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(params, {
    skipNull: true,
    skipEmptyString: true,
    strict: true
  });
};

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

    _defineProperty(this, "forgotPasword", data => this.instance.post('/users/forgot-password', data));

    _defineProperty(this, "changePasword", data => this.instance.post('/users/change-password', data));

    _defineProperty(this, "logout", () => this.instance.get('/users/auth/logout'));

    _defineProperty(this, "getMe", () => this.instance.get('/users'));
  }

}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cwhE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateName; });
const generateName = name => {
  return name.replace(/ /g, '-').toLocaleLowerCase();
};

/***/ }),

/***/ "e9ux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bQ0D");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
const UserProvider = ({
  children
}) => {
  // state
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: isLogged,
    1: setIsLogged
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: openModalLogin,
    1: setOpenModalLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const fetchMeUser = async () => {
    const response = await new _services_userService__WEBPACK_IMPORTED_MODULE_1__[/* UserService */ "a"]().getMe();

    if (response.success && response.user) {
      console.log('Usuario cargado', response);
      setUser(response.user);
      setIsLogged(true);
    }

    setIsLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchMeUser();
  }, []);

  const reloadUser = () => {
    fetchMeUser();
  };

  const logout = async () => {
    await new _services_userService__WEBPACK_IMPORTED_MODULE_1__[/* UserService */ "a"]().logout();
    fetchMeUser();
    location.href = '/';
  }; // if(isLoading) {
  //   return <LoadingView />
  // }


  return __jsx(UserContext.Provider, {
    value: {
      user,
      isLogged,
      reloadUser,
      logout,
      setOpenModalLogin,
      openModalLogin
    }
  }, children);
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