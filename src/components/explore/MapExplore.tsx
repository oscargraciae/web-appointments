import React, { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { TiLocation } from 'react-icons/ti';

import { IBusiness } from '../../types/IBusiness';

// mapboxgl.accessToken = 'pk.eyJ1Ijoib3NjYXJncmFjaWFlIiwiYSI6ImNqaDN6YW05cDBoY3gyeG8zMjRyM3F3czMifQ.lkeUhKGCrTLzI7PgePDRQA';

// import 'mapbox-gl/dist/mapbox-gl.css';

interface MapExploreProps {
  businesses?: IBusiness[]
  coords: any
}

export const MapExplore: React.FC<MapExploreProps> = ({ businesses, coords }) => {
  
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: coords.lat,
    longitude: coords.lng,
    zoom: 8
  });

  // initialize map when component mounts
  // useEffect(() => {
  //   const map = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [coords.lng, coords.lat],
  //     zoom: 12.5,
  //   });

  //   if (businesses) {
  //     businesses.map((business) => {
  //       const { lat, lng } = business.businessAddress;
  //       if (lat && lng) {
  //         console.log('Negocios item', lat);
  //         new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  //       }
                
        
  //     })
  //   }
    

  //   // add navigation control (the +/- zoom buttons)
  //   // map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

  //   return () => map.remove();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  
  return (
    <Flex h='100vh' w='100%' pos='sticky' top='0px' right='0px' mt='-80px' pt='80px' >
      {/* <Box w='100%' ref={el => (mapContainer.current = el)} /> */}
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken='pk.eyJ1Ijoib3NjYXJncmFjaWFlIiwiYSI6ImNqaDN6YW05cDBoY3gyeG8zMjRyM3F3czMifQ.lkeUhKGCrTLzI7PgePDRQA'
        onViewportChange={(nextViewport : any) => setViewport(nextViewport)}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        scrollZoom={false}
      >
        <Box pos='absolute' right='0px' top='0px' mr='24px' mt='24px'>
          <NavigationControl showCompass={false}  />
        </Box>
        
       { businesses?.map((business) => {
         if (business.businessAddress) {
          return (
            <Marker latitude={business.businessAddress.lat} longitude={business.businessAddress.lng} >
              <TiLocation size={30} />
            </Marker>
           )
         }
         return null;
       }) }
      </ReactMapGL>
    </Flex>
  );
}