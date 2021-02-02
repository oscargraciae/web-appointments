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
exports.getServerSideProps = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var ti_1 = require("react-icons/ti");
var Wrapper_1 = require("../components/Wrapper");
var InputSearch_1 = require("../components/home/InputSearch");
var categoryService_1 = require("../services/categoryService");
var stringToUrl_1 = require("../utils/stringToUrl");
// geo: {
//   range: [ 3147849728, 3147851775 ],
//   country: 'MX',
//   region: 'NLE',
//   eu: '0',
//   timezone: 'America/Monterrey',
//   city: 'Apodaca',
//   ll: [ 25.7657, -100.2159 ],
//   metro: 0,
//   area: 5
// }
exports.getServerSideProps = function (_a) {
    var query = _a.query;
    return __awaiter(void 0, void 0, void 0, function () {
        var address;
        return __generator(this, function (_b) {
            address = query.geo.city;
            // let placeId;
            // if (!query.geo) {
            //   address = 'Monterrey, Nuevo León';
            //   placeId = 'ChIJ9fg3tDGVYoYRlJjIasrT06M';
            // }
            console.log('Parametros', query);
            return [2 /*return*/, {
                    props: {
                        id: 1,
                        data: query,
                        address: address,
                        geo: query.geo,
                    },
                }];
        });
    });
};
var Index = function (_a) {
    var address = _a.address, geo = _a.geo;
    // state
    var _b = react_1.useState([]), categories = _b[0], setCategories = _b[1];
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
    return (<react_2.Flex justify="center" align="center" w="100%" bgSize="cover" direction='column'>
      <react_2.Flex w='100%' h='340px' alignItems='center' bg='linear-gradient(90deg,rgba(47,45,65,.7),rgba(47,45,65,.7)),url(/bg-main.jpg);' bgSize='cover' bgRepeat='no-repeat'>
        <react_2.Text mx='auto' pt={10} width="800px" mt={2} fontSize="4xl" fontWeight="semibold" lineHeight="short" textAlign='center' color='#FFF' zIndex={20}>
          Encuentra servicios profesionales cerca de ti y reserva fácil, rápido y seguro.
        </react_2.Text>
      </react_2.Flex>
      
      <react_2.Box width="700px" bg="transparent" p="16px" rounded="sm" zIndex={10} mt='-50px'>
        <InputSearch_1.InputSearch />

        <react_2.Wrap spacing={4} mt={4} justify='center'>
          {categories.map(function (item) { return (<react_2.WrapItem>
              <react_2.Link borderRadius={3} w="144px" textAlign='center' py={2} bg="secondary" color='#FFF' href={"/explore/" + item.name + "/" + stringToUrl_1.stringToUrl(address)}>
                {item.name}
              </react_2.Link>
            </react_2.WrapItem>); })}
        </react_2.Wrap>
      </react_2.Box>

      <Wrapper_1.Wrapper>
        <react_2.Flex zIndex={10}>
          <react_2.HStack justify='space-between'>
            <react_2.Box w='32%'>
              <react_2.HStack alignItems='center'>
                <ti_1.TiLocation size={24}/>
                <react_2.Text fontWeight='bold' fontSize='lg'>Ubicación</react_2.Text>
              </react_2.HStack>
              <react_2.Text color='subtext'>Reserly te permite localizar negocios cercanos a tu ubicación.</react_2.Text>
            </react_2.Box>
            <react_2.Box w='32%'>
              <react_2.HStack>
                <ti_1.TiStar size={24}/>
                <react_2.Text fontWeight='bold' fontSize='lg'>Mayor confianza</react_2.Text>
              </react_2.HStack>
              <react_2.Text color='subtext'>Elige el negocio que se adapte a lo que tu necesitas, comparando los servicios, precio y comentarios.</react_2.Text>
            </react_2.Box>
            <react_2.Box w='32%'>
              <react_2.HStack>
                <ti_1.TiCalendar size={24}/>
                <react_2.Text fontWeight='bold' fontSize='lg'>Reservaciones</react_2.Text>
              </react_2.HStack>
              <react_2.Text color='subtext'>Selecciona los servicios que necesitas y reserva de manera segura, disponible las 24 horas del día.</react_2.Text>
            </react_2.Box>
          </react_2.HStack>
        </react_2.Flex>
      </Wrapper_1.Wrapper>

    </react_2.Flex>);
};
exports.default = Index;
