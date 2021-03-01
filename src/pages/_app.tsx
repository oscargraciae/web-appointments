import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head'
import ReactGA from 'react-ga';
import { useRouter } from 'next/router'

import { Layout } from '../components/Layout';
import theme from '../config/theme';
import { UserProvider } from '../context/userContext';

import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from 'react';



function MyApp({ Component, pageProps }: any) {
  
  const router = useRouter()
    useEffect(() => {
      console.log('Google A');
      
      ReactGA.initialize('G-JK7QQ52ER9');
      ReactGA.pageview(window.location.pathname + window.location.search);
  }, [router.events]);

  return (
    <ChakraProvider theme={theme} resetCSS >
      <Head>
        <title>Reserly - Encuentra servicios profesionales cerca de ti y reserva fácil, rápido y seguro.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4dAUayOWy12OKwc4WUnJNPfZsJnPgyIw&libraries=places"></script>
      </Head>
      {/* <Fonts /> */}
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ChakraProvider>
  )
}

export default MyApp
