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
  
  server.get('/', (req: Request, res: Response) => {
    let ip :any = req.headers['x-real-ip']
    if (!ip) {
      ip = '187.160.100.166';
    }
    
    const geo :any = geoip.lookup(ip);
    
    return app.render(req, res, '/index', { geo: geo });
  })

  server.get('/explore/:category/:location', (req: Request, res: Response) => {
    const placeId : string = req.query.placeId ? req.query.placeId?.toString() : '';
    return app.render(req, res, '/explore', {
      ...req.params,
      placeId,
    });
  })

  server.get('/explore/:category', (req: Request, res: Response) => {
    return app.render(req, res, '/explore', { ...req.params });
  })

  server.get('/b/:name/:id', (req: Request, res: Response) => {
    return app.render(req, res, '/business', { ...req.params });
  })

  server.get('/change-password/:token', (req: Request, res: Response) => {
    console.log('req.params', req.params);
    
    return app.render(req, res, '/changePassword', { ...req.params });
  })

  server.get('/bookings', (req: Request, res: Response) => {
    return app.render(req, res, '/bookings');
  })

  server.get('/negocios', (req: Request, res: Response) => {
    return app.render(req, res, '/business-landing');
  })

  server.get('/terminos-y-condiciones', (req: Request, res: Response) => {
    return app.render(req, res, '/terms');
  })

  server.get('/aviso-de-privacidad', (req: Request, res: Response) => {
    return app.render(req, res, '/privacy');
  })

  server.get('*', (req: Request, res: Response) => {
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