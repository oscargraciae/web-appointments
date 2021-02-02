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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessServices = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var formatTime_1 = require("../../utils/formatTime");
var bookingContext_1 = require("../../context/bookingContext");
exports.BusinessServices = function (_a) {
    var businessServices = _a.businessServices;
    var _b = react_1.useContext(bookingContext_1.BookingContext), setServices = _b.setServices, setTotalTime = _b.setTotalTime, totalTime = _b.totalTime, services = _b.services;
    var handleSelectService = function (item, index) {
        var servicesTmp = __spreadArrays(services);
        servicesTmp = __spreadArrays(services, [item]);
        setServices(servicesTmp);
        // Eliminar servoicx
        // const eIndex = services.indexOf(item)
        // servicesTmp = [
        //   ...services.slice(0, eIndex),
        //   ...services.slice(eIndex + 1)
        // ];
        // setServices(servicesTmp)
        var totalT = servicesTmp.reduce(function (total, service) { return total + service.time; }, 0);
        setTotalTime(totalT);
    };
    return (<react_2.Box>
      <react_2.Heading as="h2" fontSize="24px" mb={6}>Servicios</react_2.Heading>
      <react_2.SimpleGrid columns={2} spacing={2}>
      {businessServices.map(function (item, index) { return (<react_2.Box px={5} py={4} borderWidth={1} borderColor='borders' borderRadius={3}>
          <react_2.Text noOfLines={2} fontWeight='bold' mb={2} h='48px'>{item.name}</react_2.Text>
          
          <react_2.Flex alignItems='flex-end'>
            <react_2.Text color='subtext' fontSize='sm' fontWeight='500' mr={4}>${item.price}MXN</react_2.Text>
            <react_2.Text color='subtext' fontSize='sm' fontWeight='500'>{item.time ? formatTime_1.minutesToHour(item.time) : 0}</react_2.Text>
            <react_2.Spacer />
            <react_2.Button variant='primary-outline' size='sm' onClick={function () { return handleSelectService(item, index); }}>
              Reservar
            </react_2.Button>
          </react_2.Flex>
        </react_2.Box>); })}
    </react_2.SimpleGrid>
    </react_2.Box>);
};
