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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSearch = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var react_places_autocomplete_1 = __importStar(require("react-places-autocomplete"));
var router_1 = require("next/router");
var stringToUrl_1 = require("../../utils/stringToUrl");
exports.InputSearch = function (_a) {
    // hooks
    var router = router_1.useRouter();
    // states
    var _b = react_1.useState(''), geoAddress = _b[0], setGeoAddress = _b[1];
    var _c = react_1.useState(''), geoAddressSelected = _c[0], setGeoAddressSelected = _c[1];
    var _d = react_1.useState(''), placeId = _d[0], setPlaceId = _d[1];
    // const { changeLocation } = useGoogleMaps({ coords, setCoords });
    var handleSelect = function (address) { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, react_places_autocomplete_1.geocodeByAddress(address)];
                case 1:
                    results = _a.sent();
                    if (results) {
                        setPlaceId(results[0].place_id);
                    }
                    setGeoAddress(address);
                    setGeoAddressSelected(address);
                    return [2 /*return*/];
            }
        });
    }); };
    var onSubmit = function (e) {
        e.preventDefault();
        router.push("/explore/todo/" + stringToUrl_1.stringToUrl(geoAddressSelected) + "?placeId=" + placeId);
    };
    return (<form onSubmit={onSubmit}>
    <react_2.Stack mt={0} isInline bg='#FFF' px={2} py={2} boxShadow='0px 5px 10px rgba(0,0,0,.08)' borderRadius={6}>
      
      
      <react_places_autocomplete_1.default value={geoAddress} onChange={function (geoaddress) {
        setGeoAddress(geoaddress);
        setGeoAddressSelected('');
    }} onSelect={handleSelect} searchOptions={{ componentRestrictions: { country: ['mx'] } }}>
          {(function (_a) {
        var getInputProps = _a.getInputProps, suggestions = _a.suggestions, getSuggestionItemProps = _a.getSuggestionItemProps, loading = _a.loading;
        return (<react_2.Box w="100%">
                
                <react_2.Input {...getInputProps()} placeholder="Ubicación" size="lg" border='0px' fontWeight='600'/> 
                <react_2.Box shadow='md' background='#FFFFFF' zIndex={10} pos="absolute" _hover={{ cursor: 'pointer' }}>
                  {loading && <react_2.Progress size="xs" isIndeterminate colorScheme='green'/>}
                  {suggestions.map(function (suggestion, index) { return (<react_2.Box {...getSuggestionItemProps(suggestion)} textAlign='left' px={6} py={4} _hover={{ background: 'primaryLight' }}>
                      <react_2.Text>{suggestion.description}</react_2.Text>
                    </react_2.Box>); })}
                </react_2.Box>
              </react_2.Box>);
    })}
        </react_places_autocomplete_1.default>
      <react_2.Button variant='primary' size="lg" isDisabled={(!geoAddressSelected && !placeId)} type='submit'>
        Buscar
      </react_2.Button>
    </react_2.Stack>
    </form>);
};
