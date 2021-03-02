"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var head_1 = __importDefault(require("next/head"));
var react_ga_1 = __importDefault(require("react-ga"));
var router_1 = require("next/router");
var Layout_1 = require("../components/Layout");
var theme_1 = __importDefault(require("../config/theme"));
var userContext_1 = require("../context/userContext");
require("react-datepicker/dist/react-datepicker.css");
var react_2 = require("react");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    var router = router_1.useRouter();
    react_2.useEffect(function () {
        console.log('Google analytics 1');
        var handleRouteChange = function (url) {
            console.log('Google analytics');
            react_ga_1.default.initialize('G-JK7QQ52ER9');
            react_ga_1.default.pageview(window.location.pathname + window.location.search);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return function () {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (<react_1.ChakraProvider theme={theme_1.default} resetCSS>
      <head_1.default>
        <title>Reserly - Encuentra servicios profesionales cerca de ti y reserva fácil, rápido y seguro.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png"/>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4dAUayOWy12OKwc4WUnJNPfZsJnPgyIw&libraries=places"></script>
      </head_1.default>
      
      <userContext_1.UserProvider>
        <Layout_1.Layout>
          <Component {...pageProps}/>
        </Layout_1.Layout>
      </userContext_1.UserProvider>
    </react_1.ChakraProvider>);
}
exports.default = MyApp;
