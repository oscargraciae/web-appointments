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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var head_1 = __importDefault(require("next/head"));
var react_2 = require("@chakra-ui/react");
var BookingsList_1 = require("../components/bookings/BookingsList");
var Wrapper_1 = require("../components/Wrapper");
var MenuLink = function (_a) {
    var title = _a.title, onClick = _a.onClick, isActive = _a.isActive;
    return (<react_2.Button bg={isActive ? 'primary' : ''} variant='ghost' fontWeight='bold' pr={6} onClick={onClick}>
    <react_2.Text color={isActive ? '#FFF' : ''} fontSize='md'>{title}</react_2.Text>
  </react_2.Button>);
};
var Bookings = function (_a) {
    var _b = react_1.useState(1), tab = _b[0], setTab = _b[1];
    return (<Wrapper_1.Wrapper>
      <head_1.default>
        <title>Reserly - Mis reservaciones</title>
      </head_1.default>
      <react_2.Box>
        <react_2.Heading>Mis reservaciones</react_2.Heading>
        <react_2.Box bg='surface' borderBottomWidth={1} borderColor='borders' py={3} minH='80vh'>
          <react_2.Box>
            <react_2.HStack mt={4} borderBottomWidth={1} borderColor='borders' p={3}>
              <MenuLink title='Proximas' onClick={function () { return setTab(1); }} isActive={tab === 1}/>
              <MenuLink title='Historial' onClick={function () { return setTab(2); }} isActive={tab === 2}/>
            </react_2.HStack>
            {tab === 1 && <BookingsList_1.BookingsList tab={tab}/>}
            {tab === 2 && <BookingsList_1.BookingsList tab={tab}/>}
          </react_2.Box>
        </react_2.Box>
      </react_2.Box>
    </Wrapper_1.Wrapper>);
};
exports.default = Bookings;
