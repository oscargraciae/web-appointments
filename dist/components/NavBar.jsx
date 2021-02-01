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
exports.NavBar = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var link_1 = __importDefault(require("next/link"));
var fi_1 = require("react-icons/fi");
var userContext_1 = require("../context/userContext");
// Router.onRouteChangeStart = () => {
//   return NProgress.start();
// };
// Router.onRouteChangeComplete = () => {
//   return NProgress.done();
// };
// Router.onRouteChangeError = () => {
//   return NProgress.done();
// };
exports.NavBar = function (_a) {
    var _b = react_1.useContext(userContext_1.UserContext), user = _b.user, isLogged = _b.isLogged;
    console.log('isLopgged', isLogged);
    // useEffect(() => {
    //   Router.events.on("routeChangeStart", () => {
    //     console.log('Cambiando de pagina');
    //     nProgress.start();
    //   });
    //   Router.events.on("routeChangeComplete", nProgress.done);
    //   Router.events.on("routeChangeError", nProgress.done);
    // }, []);
    var menuAuth = function () {
        return (<react_2.Flex bg='tomato' w='100%'>
        <react_2.Menu>
          <react_2.MenuButton as={react_2.Link} rightIcon={fi_1.FiChevronDown({})}>
            <react_2.HStack>
              <react_2.Avatar bg="teal.500" size='sm'/>
              {user.firstName} 
            </react_2.HStack>
          </react_2.MenuButton>
          <react_2.MenuList>
            <react_2.MenuItem>Perfil</react_2.MenuItem>
            <react_2.MenuItem>Salir</react_2.MenuItem>
          </react_2.MenuList>
        </react_2.Menu>
        <react_2.Button variant="link">logout</react_2.Button>
      </react_2.Flex>);
    };
    var menuGuest = function () {
        return (<react_2.Flex>
        <link_1.default href="/manager/login">
          <react_2.Link as={react_2.Button}>Inicio de sesion</react_2.Link>
        </link_1.default>
        <link_1.default href="/manager/login">
          <react_2.Link>Perfil</react_2.Link>
        </link_1.default>
        <link_1.default href="/manager/register">
          <react_2.Link>Salir</react_2.Link>
        </link_1.default>
      </react_2.Flex>);
    };
    return (<react_2.Flex w='100%' h='60px' shadow="md" p={4} borderBottomWidth={1} borderColor='borders' zIndex={99} pos='fixed' bg='white'>
      <react_2.Stack isInline justifyContent="space-between" flex={1} align='center'>
        <react_2.Box>
          <link_1.default href="/explore">
            <react_2.Image src="/reserly-logo.png" height='32px'/>
          </link_1.default>
        </react_2.Box>
        <react_2.Box ml={'auto'}>
          {isLogged ? menuAuth() : menuGuest()}
        </react_2.Box>
      </react_2.Stack>
    </react_2.Flex>);
};
