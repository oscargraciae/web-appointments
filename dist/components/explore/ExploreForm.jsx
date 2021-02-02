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
exports.ExploreForm = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var react_places_autocomplete_1 = __importStar(require("react-places-autocomplete"));
var exploreContext_1 = require("../../context/exploreContext");
var categoryService_1 = require("../../services/categoryService");
var bi_1 = require("react-icons/bi");
exports.ExploreForm = function (_a) {
    // context
    var _b = react_1.useContext(exploreContext_1.ExploreContext), setCoords = _b.setCoords, setCenterMapCoords = _b.setCenterMapCoords, addressMap = _b.addressMap, setCategoryId = _b.setCategoryId, categoryId = _b.categoryId;
    // states
    var _c = react_1.useState(addressMap ? addressMap : ''), geoAddress = _c[0], setGeoAddress = _c[1];
    var _d = react_1.useState([]), categories = _d[0], setCategories = _d[1];
    var _e = react_1.useState('Tipo de servicio'), nameCategory = _e[0], setNameCategory = _e[1];
    // const { changeLocation } = useGoogleMaps({ coords, setCoords });
    react_1.useEffect(function () {
        var fetchCategories = function () { return __awaiter(void 0, void 0, void 0, function () {
            var categories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new categoryService_1.CategoryService().getAll()];
                    case 1:
                        categories = (_a.sent()).categories;
                        setCategories(categories);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchCategories();
    }, []);
    react_1.useEffect(function () {
        var cat = categories.filter(function (item) { return item.id == categoryId; })[0];
        if (cat) {
            setNameCategory(cat.name);
            setCategoryId(Number(cat.id));
        }
    }, [categories, categoryId]);
    var handleSelect = function (address) { return __awaiter(void 0, void 0, void 0, function () {
        var results, latLng;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, react_places_autocomplete_1.geocodeByAddress(address)];
                case 1:
                    results = _a.sent();
                    return [4 /*yield*/, react_places_autocomplete_1.getLatLng(results[0])];
                case 2:
                    latLng = _a.sent();
                    // changeLocation(latLng)
                    setCenterMapCoords(latLng);
                    setCoords(latLng);
                    setGeoAddress(address);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCategory = function (value) {
        if (value != '0') {
            var cat = categories.filter(function (item) { return item.id == value; })[0];
            if (cat) {
                setNameCategory(cat.name);
                setCategoryId(Number(cat.id));
            }
        }
        else {
            setNameCategory('Tipo de servicio');
            setCategoryId(null);
        }
    };
    return (<react_2.Flex direction='column' pt={2} px={4}>
      <react_2.Flex direction="row" align='center' justify='flex-start'>
        <react_2.Heading as="h2" fontSize='md' pr={2}>Resultados en</react_2.Heading>
        <react_places_autocomplete_1.default value={geoAddress} onChange={function (geoaddress) { return setGeoAddress(geoaddress); }} onSelect={handleSelect} searchOptions={{ componentRestrictions: { country: ['mx'] } }}>
            {(function (_a) {
        var getInputProps = _a.getInputProps, suggestions = _a.suggestions, getSuggestionItemProps = _a.getSuggestionItemProps, loading = _a.loading;
        return (<react_2.Box w="70%">
                  <react_2.Input {...getInputProps()} placeholder='Dirección ' color='primary' size='md' variant="flushed-app" my={4} borderBottomColor='#DDD' fontWeight='semibold' pt='3px' border='0px' _hover={{ borderBottomWidth: 4, cursor: 'pointer' }}/>
                  <react_2.Box shadow='md' background='#FFFFFF' zIndex={10} pos="absolute">
                    {loading && <react_2.Progress size="xs" isIndeterminate colorScheme='green'/>}
                    {suggestions.map(function (suggestion) {
            return (<react_2.Box {...getSuggestionItemProps(suggestion, { key: suggestion.id })} textAlign='left' px={6} py={4}>
                          <react_2.Text>{suggestion.description}</react_2.Text>
                        </react_2.Box>);
        })}
                  </react_2.Box>
                </react_2.Box>);
    })}
          </react_places_autocomplete_1.default>
      </react_2.Flex>
      
      <react_2.Menu>
        <react_2.MenuButton as={react_2.Button} rightIcon={<bi_1.BiChevronDown />} w='230px' size="sm">
          {nameCategory}
        </react_2.MenuButton>
        <react_2.MenuList>
          <react_2.MenuOptionGroup defaultValue={String(categoryId)} type="radio" onChange={handleCategory}>
            <react_2.MenuItemOption value='0'>
              Todos
            </react_2.MenuItemOption>
            {categories.map(function (item, index) { return (<react_2.MenuItemOption key={item.id} value={String(item.id)}>
                {item.name}
              </react_2.MenuItemOption>); })}
            
          </react_2.MenuOptionGroup>
        </react_2.MenuList>
      </react_2.Menu>
    </react_2.Flex>);
};
