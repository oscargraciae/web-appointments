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
exports.BookingBox = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var ai_1 = require("react-icons/ai");
var bookingContext_1 = require("../../context/bookingContext");
exports.BookingBox = function (_a) {
    var handleBooking = _a.handleBooking;
    var _b = react_1.useContext(bookingContext_1.BookingContext), setServices = _b.setServices, services = _b.services, setTotalTime = _b.setTotalTime, totalTime = _b.totalTime;
    console.log('Servicios en store4', services);
    var deleteService = function (index) {
        setServices(__spreadArrays(services.slice(0, index), services.slice(index + 1)));
    };
    return (<>
      <react_2.Box>
        <react_2.Box mt={4} w='100%' maxHeight='330px' overflow='scroll' shadow="rgba(0, 0, 0, 0.12) 0px 6px 16px">
          <react_2.Stack mb={3}>
            {services.map(function (item, index) { return (<react_2.Stack isInline align='center' borderBottomWidth={1} borderColor='borders' key={index} px={4} py={3}>
              <react_2.Flex align='center' justify='space-evenly' flex='100%'>
                <react_2.Text fontSize='md' fontWeight='semibold' noOfLines={2} pr={2}>{item.name}</react_2.Text>
                <react_2.Spacer />
                
                <react_2.Flex alignSelf='center'>
                  <react_2.Flex direction='column'>
                    <react_2.Text fontSize='xs' pr='10px'>${item.price}MXN</react_2.Text>
                    <react_2.Text fontSize='xs' pr='10px'> {item.time}min</react_2.Text>
                  </react_2.Flex>
                </react_2.Flex>
                <react_2.IconButton aria-label='Eliminar' icon={<ai_1.AiOutlineClose />} variant='ghost' onClick={function () { return deleteService(index); }}/>
              </react_2.Flex>
            </react_2.Stack>); })}
          </react_2.Stack>
        </react_2.Box>
        <react_2.Tooltip label='Selecciona un servicio para reservar' isDisabled>
          <react_2.Button onClick={handleBooking} variant='primary' isFullWidth size='lg' isDisabled={services.length === 0}>
              Reservar
              
            </react_2.Button>
        </react_2.Tooltip>
      </react_2.Box>
    </>);
};
