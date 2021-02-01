import { useEffect, useState } from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import Head from 'next/head'
import { Layout } from '../components/Layout';
import theme from '../config/theme';
import { SocketProvider } from '../context/socketContext';
import { UserProvider } from '../context/userContext';

import "react-datepicker/dist/react-datepicker.css";

function MyApp({ Component, pageProps }: any) {

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Reserly prubea</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4dAUayOWy12OKwc4WUnJNPfZsJnPgyIw&libraries=places"></script>
        {/* <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v<YOUR_MAPBOX_VERSION>/mapbox-gl.css' rel='stylesheet' /> */}
      </Head>
      <CSSReset />
      <UserProvider>
        <Layout>
          {/* <SocketProvider>
            <Component {...pageProps} />
          </SocketProvider> */}
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp
