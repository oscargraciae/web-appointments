// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
var geoip = require('geoip-lite');
var os = require('os');

var networkInterfaces = os.networkInterfaces();

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/search') {
      console.log('Rerquest ip', req.headers['X-Forwarded-For']);
      var ip = req.headers['x-real-ip'] || req.connection.remoteAddress
      console.log('mi ip', ip);
      // var ip = "192.168.0.3";
      var geo = geoip.lookup(ip);
      console.log('networkInterfaces', networkInterfaces);
      app.render(req, res, '/search', {...query, localidad: geo, networkInterfaces, ip: req.connection.remoteAddress})
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(8000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:8000')
  })
})
