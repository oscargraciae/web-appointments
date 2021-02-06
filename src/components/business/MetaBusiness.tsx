import React from 'react'
import Head from 'next/head';

import { IBusiness } from '../../types/IBusiness';

interface MetaBusinessProps {
  business: IBusiness
}

export const MetaBusiness: React.FC<MetaBusinessProps> = ({ business }) => {
  return (
    <Head>
      <title>{business.name} en {business.businessAddress?.addressMap} - Reserly</title>
      <meta name="description" content={`Reserva con ${business.name} en ${business.businessAddress?.addressMap} ¡en minutos!`}></meta>

      <meta property="og:url"                content={`https://reserly.mx/`} />
      <meta property="og:type"               content="website" />
      <meta property="og:title"              content={business.name} />
      <meta property="og:description"        content={`Reserva con ${business.name} en ${business.businessAddress?.addressMap} ¡en minutos!`} />
      {/* <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" /> */}
    </Head>
  );
}