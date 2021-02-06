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
exports.BookingBoxMobile = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var BookingBox_1 = require("./BookingBox");
var bookingContext_1 = require("../../context/bookingContext");
exports.BookingBoxMobile = function (_a) {
    var handleBooking = _a.handleBooking;
    var _b = react_1.useContext(bookingContext_1.BookingContext), setServices = _b.setServices, services = _b.services, setTotalTime = _b.setTotalTime, totalTime = _b.totalTime;
    var _c = react_1.useState(false), showServices = _c[0], setShowServices = _c[1];
    return (<react_2.Box display={{ base: services.length > 0 ? 'block' : 'none', md: 'none' }} bg='#FFF' pos='fixed' bottom='0px' p={4} w='100%' boxShadow='10px -4px 8px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)'>
      <react_2.Box top='70px' right='0px' display={{ base: showServices ? 'block' : 'none', md: 'none' }}>
        <BookingBox_1.BookingBox handleBooking={handleBooking}/>
      </react_2.Box>
      <react_2.Button isFullWidth variant={showServices ? 'gray' : 'primary'} mt={1} onClick={function () { return setShowServices(!showServices); }}>
        {!showServices ? "Ver servicios para reservar (" + services.length + ")" : 'Ocultar'}
      </react_2.Button>
    </react_2.Box>);
};
