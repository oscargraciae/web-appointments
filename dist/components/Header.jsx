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
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
var router_1 = require("next/router");
var fi_1 = require("react-icons/fi");
var userContext_1 = require("../context/userContext");
var MenuItems = function (_a) {
    var children = _a.children;
    return (<react_2.Box mt={{ base: 4, md: 0 }} mx={3} display="block">
    {children}
  </react_2.Box>);
};
var Header = function (_a) {
    var handleAuthModal = _a.handleAuthModal;
    // context
    var _b = react_1.useContext(userContext_1.UserContext), user = _b.user, isLogged = _b.isLogged, logout = _b.logout, isLoading = _b.isLoading;
    // hooks
    var router = router_1.useRouter();
    // state
    var _c = react_1.useState(false), show = _c[0], setShow = _c[1];
    var currentRoute = router.pathname;
    var handleToggle = function () { return setShow(!show); };
    var menuGuest = function () { return (<>
      <react_2.Box display={{ base: show ? 'block' : 'none', md: 'flex' }} width={{ base: 'full', sm: 'full', md: 'auto' }} alignItems="center" flexGrow={1}>
        <react_2.Spacer />
        <MenuItems>
          <react_2.Link href='/negocios' fontWeight="bold" variant="primary">
            Publica tu negocio
          </react_2.Link>
        </MenuItems>
        <MenuItems>
          <react_2.Link variant="primary" onClick={function () { return handleAuthModal(1); }}>
            Iniciar sesión
          </react_2.Link>
        </MenuItems>
        <MenuItems>
          <react_2.Link variant="primary-btn" onClick={function () { return handleAuthModal(2); }}>
            Regístrate
          </react_2.Link>
        </MenuItems>
      </react_2.Box>

        <react_2.Box display={{ base: show ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
      </react_2.Box>
    </>); };
    var menuAuth = function () {
        return (<>
        
        <react_2.Box display={{ base: show ? 'block' : 'none', md: 'none' }} width={{ base: '100%', sm: 'full', md: 'auto' }} alignItems="center" flexGrow={1}>
          <MenuItems>
            <react_2.Link href="/orders">
              Mis compras
            </react_2.Link>
          </MenuItems>
          <MenuItems>
            <react_2.Link onClick={logout}>
              Salir
            </react_2.Link>
          </MenuItems>

          <react_2.Box display={{ base: show ? 'block' : 'none', md: 'block' }} mt={{ base: 4, md: 0 }}>
            {isLogged ? <react_2.Link href='/' size="sm" variant="link" ml={4}>Administrar mi tienda</react_2.Link>
            : <react_2.Button size="sm" variant="link" ml={4}>Publica tu tienda</react_2.Button>}
          </react_2.Box>
        </react_2.Box>

        
        <react_2.Flex flex={1} justify="flex-end" align="center" display={{ base: 'none', md: 'flex' }}>
          <react_2.Menu variant='primary'>
            <react_2.MenuButton as={react_2.Button} rightIcon={<fi_1.FiChevronDown />} mx={3} variant='ghost'>
              Mi cuenta
            </react_2.MenuButton>
            <react_2.MenuList zIndex={3} borderColor="#DDD">
              <react_2.MenuItem onClick={function () { return router.push('/bookings'); }}>Mis reservas</react_2.MenuItem>
              <react_2.MenuItem onClick={logout}>Cerrar sesión</react_2.MenuItem>
              <react_2.MenuDivider />
                {user.businessUser
            ? <react_2.Link mt={{ base: 4, md: 0 }} mx={3} display="block" variant='primary-btn' href={"" + process.env.NEXT_PUBLIC_MANAGER_URL}>Administrar mi negocio</react_2.Link>
            : <react_2.Link mt={{ base: 4, md: 0 }} mx={3} display="block" variant='primary-btn' href='/negocios'>Publica tu negocio</react_2.Link>}
            </react_2.MenuList>
          </react_2.Menu>
        </react_2.Flex>
      </>);
    };
    if (isLoading) {
        return null;
    }
    return (<react_2.Flex as="nav" align="center" justify="space-between" wrap="wrap" 
    // padding="1.5rem"
    bg="#FFFFFF" color="#333" boxShadow="md" w='100%' h='66px' shadow="md" alignItems='center' borderBottomWidth={1} borderColor='borders' zIndex={99} 
    // pos='absolute' 
    px={6}>
      <react_2.Flex align='center'>
        <react_2.Link href="/">
          <img src="/logo-reserly-2.png" alt="uorder" width="120" height="90"/>
        </react_2.Link>
      </react_2.Flex>

      <react_2.Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg fill="#333" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </react_2.Box>
      
      {isLogged ? menuAuth() : menuGuest()}

    </react_2.Flex>);
};
exports.default = Header;
