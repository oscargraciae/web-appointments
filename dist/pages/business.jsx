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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
// local libraries
var businessService_1 = require("../services/businessService");
// local components
var Wrapper_1 = require("../components/Wrapper");
var ti_1 = require("react-icons/ti");
var ModalBooking_1 = require("../components/business/ModalBooking");
var bookingContext_1 = require("../context/bookingContext");
var BookingBox_1 = require("../components/business/BookingBox");
var BusinessHours_1 = require("../components/business/BusinessHours");
var BusinessServices_1 = require("../components/business/BusinessServices");
var userContext_1 = require("../context/userContext");
var MetaBusiness_1 = require("../components/business/MetaBusiness");
var BusinessPhotos_1 = require("../components/business/BusinessPhotos");
var BookingBoxMobile_1 = require("../components/business/BookingBoxMobile");
var head_1 = __importDefault(require("next/head"));
exports.getServerSideProps = function (_a) {
    var query = _a.query;
    return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    response = null;
                    if (!(query === null || query === void 0 ? void 0 : query.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, new businessService_1.BusinessService().getById(Number(query.id))];
                case 1:
                    response = _b.sent();
                    _b.label = 2;
                case 2: return [2 /*return*/, {
                        props: {
                            id: 1,
                            business: response === null || response === void 0 ? void 0 : response.business,
                        },
                    }];
            }
        });
    });
};
var Business = function (_a) {
    var _b, _c;
    var business = _a.business;
    var businessAddress = business.businessAddress, businessCategory = business.businessCategory, hours = business.hours, id = business.id;
    // context
    var _d = react_1.useContext(userContext_1.UserContext), user = _d.user, isLogged = _d.isLogged, setOpenModalLogin = _d.setOpenModalLogin, openModalLogin = _d.openModalLogin;
    // hooks
    var _e = react_2.useDisclosure(), isOpen = _e.isOpen, onOpen = _e.onOpen, onClose = _e.onClose;
    var handleBooking = function () {
        if (isLogged) {
            onOpen();
        }
        else {
            console.log('No logeado', openModalLogin);
            setOpenModalLogin(true);
        }
    };
    return (<bookingContext_1.BookingProvider>
      <head_1.default>
        <title>{business.name} en {(_b = business.businessAddress) === null || _b === void 0 ? void 0 : _b.addressMap} - Reserly</title>
        <meta name="description" content={"Reserva con " + business.name + " en " + ((_c = business.businessAddress) === null || _c === void 0 ? void 0 : _c.addressMap) + " \u00A1en minutos!"}></meta>
      </head_1.default>
      <MetaBusiness_1.MetaBusiness business={business}/>
      <ModalBooking_1.ModalBooking business={business} isOpen={isOpen} onClose={onClose}/>
      <Wrapper_1.Wrapper>
        <react_2.Flex mb={6} pb={4} borderBottomWidth={2} borderColor='borders' justifyContent='space-between'>
          <react_2.Box pl={0} pr={{ base: 0, md: 24 }} w={{ base: '100%', md: '880px' }} textAlign={{ base: 'center', md: 'left' }}>
            <react_2.Heading mt={4} mb={4} fontSize='44px'>{business.name}</react_2.Heading>
            <react_2.Text my={2} textTransform="uppercase" fontSize="sm" fontWeight="bold" color="primary">
            {businessCategory === null || businessCategory === void 0 ? void 0 : businessCategory.name}
            </react_2.Text>
            <react_2.Text fontSize="sm" color='grey' mb={2} display='flex' justifyContent={{ base: 'center', md: 'flex-start' }}>
              <ti_1.TiLocation style={{ marginBottom: '2px', marginRight: '4px' }} size='18px'/>
              {businessAddress === null || businessAddress === void 0 ? void 0 : businessAddress.addressMap}
            </react_2.Text>
            {business.phone &&
        <react_2.Text fontSize="sm" color='grey' mb={2} display='flex' alignItems='center' justifyContent={{ base: 'center', md: 'flex-start' }}>
                <ti_1.TiDevicePhone style={{ marginBottom: '2px', marginRight: '4px' }} size='18px'/>
                {business.phone}
              </react_2.Text>}
            <react_2.Text py={3} color='subtext'>{business.description}</react_2.Text>
          </react_2.Box>
          {business.cover &&
        <react_2.Box w='300px' display={{ base: 'none', md: 'block' }}>
              <react_2.Image objectFit="cover" htmlWidth="300px" htmlHeight='200px' w="300px" h='200px' rounded="md" src={business.cover}/>
            </react_2.Box>}
        </react_2.Flex>
        <react_2.Flex mb={10} direction={{ base: 'column', md: 'row' }}>
          <react_2.Box w={{ base: '99%', md: '58.33%' }} px={{ base: 3, md: 0 }}>
            {business.businessService && <BusinessServices_1.BusinessServices businessServices={business.businessService}/>} 
            {id && <BusinessPhotos_1.BusinessPhotos businessId={id}/>}
            <react_2.Divider my={8}/>
            <BusinessHours_1.BusinessHours hours={hours}/>
            <react_2.Divider my={8}/>
          </react_2.Box>

          <react_2.Box w='36.33%' ml='4.33%' px={4} display={{ base: 'none', md: 'block' }}>
            <react_2.Box pos='sticky' top='70px' right='0px' h='100vh'>
              
              <BookingBox_1.BookingBox handleBooking={handleBooking}/>
            </react_2.Box>
          </react_2.Box>
        </react_2.Flex>
          
        <BookingBoxMobile_1.BookingBoxMobile handleBooking={handleBooking}/>
        

      </Wrapper_1.Wrapper>
    </bookingContext_1.BookingProvider>);
};
exports.default = Business;
