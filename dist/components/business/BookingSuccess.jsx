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
exports.BookingSuccess = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var ai_1 = require("react-icons/ai");
var router_1 = require("next/router");
var bookingContext_1 = require("../../context/bookingContext");
exports.BookingSuccess = function (_a) {
    var router = router_1.useRouter();
    var setStep = react_1.useContext(bookingContext_1.BookingContext).setStep;
    var handleConfimration = function () {
        router.push('/bookings');
    };
    return (<react_2.Flex justify="center" align="center" spacing={4} direction='column' mt={6}>
      <ai_1.AiFillCheckCircle size={70} color="#3BCF75"/>
      <react_2.Text my={4} fontWeight="bold" fontSize="lg">RESERVACIÓN CONFIRMADA</react_2.Text>
      <react_2.Text fontSize="sm" my={4} textAlign='center'>
        Tu reservación se realizó correctamente, mantente al pendiente por si el negocio quiere comunicarse contigo o ocurrió alguna actualización de la reservación.
      </react_2.Text>
      <react_2.Button my={4} size="lg" isFullWidth variant='primary' color="#FFF" onClick={handleConfimration}>
        Aceptar
      </react_2.Button>
    </react_2.Flex>);
};
