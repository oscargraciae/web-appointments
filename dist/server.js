"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_1 = __importDefault(require("next"));
var express_1 = __importDefault(require("express"));
var geoip_lite_1 = __importDefault(require("geoip-lite"));
var os_1 = __importDefault(require("os"));
var networkInterfaces = os_1.default.networkInterfaces();
var dev = process.env.NODE_ENV !== 'production';
var app = next_1.default({ dev: dev });
var handle = app.getRequestHandler();
var server = express_1.default();
app.prepare().then(function () {
    console.log('Custom server');
    // server.all("*", (req: Request, res: Response) => {
    //   return handle(req, res);
    // });
    // server.get('/', (req, res) => app.render(req, res, '/index'));
    server.get('/', function (req, res) {
        console.log('Ejecutando ruta inicial');
        var ip = req.headers['x-real-ip'];
        var ip2 = req.connection.remoteAddress; // Este es el bueno
        console.log('IP', ip);
        // if (!ip) {
        //   ip = '187.160.100.166';
        // }
        console.log('REQ HEADERS REAL IP', ip);
        console.log('REQ remote address', ip2);
        console.log('IP2', ip);
        var geo = geoip_lite_1.default.lookup(ip);
        console.log('Geo data', geo);
        return app.render(req, res, '/index', { geo: geo });
    });
    server.get('/explore/:category/:location', function (req, res) {
        var _a, _b;
        console.log('Query', req.query);
        var cat = req.query.cat ? (_a = req.query.cat) === null || _a === void 0 ? void 0 : _a.toString() : '';
        var placeId = req.query.placeId ? (_b = req.query.placeId) === null || _b === void 0 ? void 0 : _b.toString() : '';
        return app.render(req, res, '/explore', __assign(__assign({}, req.params), { cat: cat,
            placeId: placeId }));
    });
    server.get('/explore/:category', function (req, res) {
        return app.render(req, res, '/explore', __assign({}, req.params));
    });
    server.get('*', function (req, res) {
        console.log('Server get handle');
        return handle(req, res);
    });
    server.listen(8000, function () {
        console.log('server ready on port 8000');
    });
});
// Be sure to pass `true` as the second argument to `url.parse`.
// This tells it to parse the query portion of the URL.
// const parsedUrl = parse(req.url, true)
// const { pathname, query } = parsedUrl
// if (pathname === '/search') {
//   console.log('Rerquest ip', req.headers['X-Forwarded-For']);
//   var iotra = req.headers['X-Forwarded-For'] || 'sin datos';
//   var ipe = req.headers['x-real-ip'] || req.connection.remoteAddress // Este es el bueno
//   // console.log('mi ip', ip);
//   // var ip = "192.168.0.3";
//   var geo = geoip.lookup(ipe);
//   console.log('networkInterfaces', networkInterfaces);
//   app.render(req, res, '/search', {
//     ...query,
//     localidad: geo, networkInterfaces, 
//     ip: req.connection.remoteAddress,
//     ipe: ipe,
//     iotra: iotra
//   })
// } else if (pathname === '/b') {
//   app.render(req, res, '/b', query)
// } else {
//   handle(req, res, parsedUrl)
// }
