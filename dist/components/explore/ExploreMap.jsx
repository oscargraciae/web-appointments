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
exports.ExploreMap = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var useGoogleMaps_1 = require("../../hooks/useGoogleMaps");
var exploreContext_1 = require("../../context/exploreContext");
exports.ExploreMap = function (_a) {
    var _b = react_1.useContext(exploreContext_1.ExploreContext), businesses = _b.businesses, coords = _b.coords, setCoords = _b.setCoords, centerMapCoords = _b.centerMapCoords;
    console.log('Coords explore map', coords);
    var _c = useGoogleMaps_1.useGoogleMaps({ coords: coords, setCoords: setCoords }), refContainer = _c.refContainer, addMarker = _c.addMarker, changeLocation = _c.changeLocation;
    react_1.useEffect(function () {
        businesses.map(function (business) {
            addMarker(business.businessAddress);
        });
    }, [businesses]);
    react_1.useEffect(function () {
        changeLocation(centerMapCoords);
    }, [centerMapCoords]);
    return (
    // <Box h='100vh' w='100%' pos='sticky' top='0px' right='0px' mt='-60px' pt='60px' >
    <react_2.Box h='100vh' w='100%' pos='sticky' top='0px' right='0px'>
      <react_2.Box ref={refContainer} h='100%' w='100%'/>
      <react_2.Box bg='surface' px={2} py={1} zIndex={4} pos='absolute' top='80px' right='20px' boxShadow='rgba(0, 0, 0, 0.12) 0px 6px 16px !important'>
        <react_2.Text fontSize='sm' fontWeight='600'>Desplaza el mapa para buscar en otra zona</react_2.Text>
      </react_2.Box>
    </react_2.Box>);
};
