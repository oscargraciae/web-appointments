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
        <title>Reserly - Encuentra servicios profesionales cerca de ti y reserva fácil, rápido y seguro.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4dAUayOWy12OKwc4WUnJNPfZsJnPgyIw&libraries=places"></script>
      </Head>
      <CSSReset />
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  )
}

export default MyApp
