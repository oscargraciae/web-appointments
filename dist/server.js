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
    server.get('/', function (req, res) {
        var ip = req.headers['x-real-ip'];
        if (!ip) {
            ip = '187.160.100.166';
        }
        var geo = geoip_lite_1.default.lookup(ip);
        return app.render(req, res, '/index', { geo: geo });
    });
    server.get('/explore/:category/:location', function (req, res) {
        var _a;
        var placeId = req.query.placeId ? (_a = req.query.placeId) === null || _a === void 0 ? void 0 : _a.toString() : '';
        return app.render(req, res, '/explore', __assign(__assign({}, req.params), { placeId: placeId }));
    });
    server.get('/explore/:category', function (req, res) {
        return app.render(req, res, '/explore', __assign({}, req.params));
    });
    server.get('/:name/:id', function (req, res) {
        return app.render(req, res, '/business', __assign({}, req.params));
    });
    server.get('*', function (req, res) {
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
