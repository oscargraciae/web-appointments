"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSuccess = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@chakra-ui/react");
var ai_1 = require("react-icons/ai");
var router_1 = require("next/router");
exports.BookingSuccess = function (_a) {
    var router = router_1.useRouter();
    var handleConfimration = function () {
        router.push('/');
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
