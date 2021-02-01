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
exports.MapExplore = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var react_map_gl_1 = __importStar(require("react-map-gl"));
var ti_1 = require("react-icons/ti");
exports.MapExplore = function (_a) {
    var businesses = _a.businesses, coords = _a.coords;
    var _b = react_1.useState({
        width: '100%',
        height: '100%',
        latitude: coords.lat,
        longitude: coords.lng,
        zoom: 8
    }), viewport = _b[0], setViewport = _b[1];
    // initialize map when component mounts
    // useEffect(() => {
    //   const map = new mapboxgl.Map({
    //     container: mapContainer.current,
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     center: [coords.lng, coords.lat],
    //     zoom: 12.5,
    //   });
    //   if (businesses) {
    //     businesses.map((business) => {
    //       const { lat, lng } = business.businessAddress;
    //       if (lat && lng) {
    //         console.log('Negocios item', lat);
    //         new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    //       }
    //     })
    //   }
    //   // add navigation control (the +/- zoom buttons)
    //   // map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    //   return () => map.remove();
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (<react_2.Flex h='100vh' w='100%' pos='sticky' top='0px' right='0px' mt='-80px' pt='80px'>
      
      <react_map_gl_1.default {...viewport} mapboxApiAccessToken='pk.eyJ1Ijoib3NjYXJncmFjaWFlIiwiYSI6ImNqaDN6YW05cDBoY3gyeG8zMjRyM3F3czMifQ.lkeUhKGCrTLzI7PgePDRQA' onViewportChange={function (nextViewport) { return setViewport(nextViewport); }} mapStyle='mapbox://styles/mapbox/streets-v11' scrollZoom={false}>
        <react_2.Box pos='absolute' right='0px' top='0px' mr='24px' mt='24px'>
          <react_map_gl_1.NavigationControl showCompass={false}/>
        </react_2.Box>
        
       {businesses === null || businesses === void 0 ? void 0 : businesses.map(function (business) {
        if (business.businessAddress) {
            return (<react_map_gl_1.Marker latitude={business.businessAddress.lat} longitude={business.businessAddress.lng}>
              <ti_1.TiLocation size={30}/>
            </react_map_gl_1.Marker>);
        }
        return null;
    })}
      </react_map_gl_1.default>
    </react_2.Flex>);
};
