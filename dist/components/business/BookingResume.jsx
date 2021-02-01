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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingResume = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var bookingContext_1 = require("../../context/bookingContext");
var formatDate_1 = require("../../utils/formatDate");
var formatTime_1 = require("../../utils/formatTime");
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
exports.BookingResume = function (_a) {
    var _b = react_1.useContext(bookingContext_1.BookingContext), date = _b.date, time = _b.time, services = _b.services, totalTime = _b.totalTime, setMessage = _b.setMessage, message = _b.message;
    return (<react_2.Flex alignItems='center' justify='center' flex={1} direction='column'>
      <react_2.Text fontSize='lg' fontWeight='bold' py={2}>Confirmación</react_2.Text>

      <react_2.Box w='100%'>
        <react_2.Text fontSize='lg' fontWeight='bold' mb={3}>Día y hora</react_2.Text>
        <react_2.Flex justify='space-between' mb={1}>
          <react_2.Text fontWeight='semibold'>Fecha </react_2.Text>
          <react_2.Text>{formatDate_1.formatDate(date)}</react_2.Text>
        </react_2.Flex>
        <react_2.Flex justify='space-between'>
          <react_2.Text fontWeight='semibold'>Hora </react_2.Text>
          <react_2.Text>{time}</react_2.Text>
        </react_2.Flex>
        <react_2.Divider my={6} bg='tomato'/>
        <react_2.Text fontSize='lg' fontWeight='bold' mb={3}>Servicios</react_2.Text>
        {services.map(function (service) { return (<react_2.Flex justify='space-between'>
            <react_2.Text isTruncated fontWeight='semibold' fontSize='sm' w='70%'>{service.name}</react_2.Text>
            <react_2.Text fontSize='xs' w='30%'>{service.time ? formatTime_1.minutesToHour(service.time) : 0} / ${service.price}MXN</react_2.Text>
          </react_2.Flex>); })}
        <react_2.Flex justify='flex-end' alignItems='flex-end'>
          <react_2.Text fontWeight='semibold' fontSize='sm' my={3} textAlign='right'>Aproximado total: {formatTime_1.minutesToHour(totalTime)} </react_2.Text>
        </react_2.Flex>
        
        <react_2.Divider my={6} bg='tomato'/>
        

        <react_2.Box>
          <react_2.Text fontSize='lg' fontWeight='bold' mb={3}>Comentarios</react_2.Text>
          <react_2.Textarea variant='app' value={message} onChange={function (e) { return setMessage(e.target.value); }}/>
        </react_2.Box>
      </react_2.Box>
    </react_2.Flex>);
};
