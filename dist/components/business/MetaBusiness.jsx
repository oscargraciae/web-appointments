"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaBusiness = void 0;
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("next/head"));
var generateName_1 = require("../../utils/generateName");
exports.MetaBusiness = function (_a) {
    var _b, _c, _d;
    var business = _a.business;
    return (<head_1.default>
      <title>{business.name} en {(_b = business.businessAddress) === null || _b === void 0 ? void 0 : _b.addressMap} - Reserly</title>
      <meta name="description" content={"Reserva con " + business.name + " en " + ((_c = business.businessAddress) === null || _c === void 0 ? void 0 : _c.addressMap) + " \u00A1en minutos!"}></meta>

      <meta property="og:url" content={"https://reserly.mx/b/" + generateName_1.generateName(business.name) + "/" + business.id}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={business.name}/>
      <meta property="og:description" content={"Reserva con " + business.name + " en " + ((_d = business.businessAddress) === null || _d === void 0 ? void 0 : _d.addressMap) + " \u00A1en minutos!"}/>
      <meta property="og:image" content={business.cover}/>
      <meta property="og:image" content={business.cover}/>
      <meta property="og:image:width" content="720"/>
      <meta property="og:image:height" content="480"/>
    </head_1.default>);
};
