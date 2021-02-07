import React from 'react'
import Head from 'next/head';

import { IBusiness } from '../../types/IBusiness';
import { generateName } from '../../utils/generateName';

interface MetaBusinessProps {
  business: IBusiness
}

export const MetaBusiness: React.FC<MetaBusinessProps> = ({ business }) => {
  return (
    <Head>
      <title>{business.name} en {business.businessAddress?.addressMap} - Reserly</title>
      <meta name="description" content={`Reserva con ${business.name} en ${business.businessAddress?.addressMap} ¡en minutos!`}></meta>

      <meta property="og:url"                content={`https://reserly.mx/b/${generateName(business.name)}/${business.id}`} />
      <meta property="og:type"               content="website" />
      <meta property="og:title"              content={business.name} />
      <meta property="og:description"        content={`Reserva con ${business.name} en ${business.businessAddress?.addressMap} ¡en minutos!`} />
      <meta property="og:image"              content={business.cover} />
      <meta property="og:image"              content={business.cover} />
      <meta property="og:image:width"        content="720" />
      <meta property="og:image:height"        content="423" />
    </Head>
  );
}