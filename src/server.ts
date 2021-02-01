// server.js
import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';
import express, { Request, Response } from 'express';

import geoip from 'geoip-lite';
import os from 'os';

var networkInterfaces = os.networkInterfaces();

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express();


app.prepare().then(() => {
  console.log('Custom server');
  
  // server.all("*", (req: Request, res: Response) => {
  //   return handle(req, res);
  // });

  // server.get('/', (req, res) => app.render(req, res, '/index'));
  server.get('/', (req: Request, res: Response) => {
    console.log('Ejecutando ruta inicial');
    let ip :any = req.headers['x-real-ip']
    let ip2 = req.connection.remoteAddress // Este es el bueno
    console.log('IP', ip);
    if (!ip) {
      ip = '187.160.100.166';
    }

    console.log('REQ HEADERS REAL IP', ip);
    console.log('REQ remote address', ip2);
    
    console.log('IP2', ip);
    
    const geo :any = geoip.lookup(ip);
    console.log('Geo data', geo);
    
    return app.render(req, res, '/index', { geo: geo });
  })

  server.get('/explore/:category/:location', (req: Request, res: Response) => {
    console.log('Query', req.query);
    const cat : string = req.query.cat ? req.query.cat?.toString() : '';
    const placeId : string = req.query.placeId ? req.query.placeId?.toString() : '';
    return app.render(req, res, '/explore', {
      ...req.params,
      cat,
      placeId,
    });
  })

  server.get('/explore/:category', (req: Request, res: Response) => {
    return app.render(req, res, '/explore', { ...req.params });
  })

  server.get('/search', (req: Request, res: Response) => {
    console.log('Ejecutando ruta inicial');
    
    return app.render(req, res, '/search');
  })

  server.get('*', (req: Request, res: Response) => {
    console.log('Server get handle');
    
    return handle(req, res);
  });

  server.listen(8000, () => {
    console.log('server ready on port 8000');
  });
})


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