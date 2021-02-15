import { useEffect, useRef } from "react";

const icon = {
  path:
    // "M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z",
    'M24 12.4286C24 19.2927 12 29 12 29C12 29 0 19.2927 0 12.4286C0 5.56446 5.37258 0 12 0C18.6274 0 24 5.56446 24 12.4286Z',
  // fillColor: "#003580",
  // fillColor: '#25CB67',
  // fillColor: '#020621',
  fillColor: '#3722d3',
  fillOpacity: 1,
  scale: 1,
  strokeColor: "#FFF",
  strokeWeight: 3,
};

export const useGoogleMaps = ({ coords, setCoords } : any) : any => {

  const refContainer = useRef<any>();
  const refMap = useRef<google.maps.Map>();
  
  useEffect(() => {
    const uluru = { lat: coords.lat, lng: coords.lng };
    const map = new google.maps.Map(refContainer.current, {
      center: uluru,
      zoom: 14,
      scrollwheel: false,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      zoomControl: true,
      disableDoubleClickZoom: true,
      zoomControlOptions: { position: google.maps.ControlPosition.TOP_LEFT }
    });

    // const cityCircle = new google.maps.Circle({
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.35,
    //   map,
    //   center: uluru,
    //   radius: 4000,
    //   // radius: Math.sqrt(citymap[city].population) * 100,
    // });


      refMap.current = map;

    // const marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map,
    //   icon,
    // });

      map.addListener('dragend', () => {
        const { lat, lng } = map.getCenter();
        setCoords({ lat: lat(), lng: lng() });
      });

      // map.addListener('click', function({ latLng,  }) {
      //   const lat = latLng.lat();
      //   const lng = latLng.lng()
      //   new google.maps.Marker({ position: { lat, lng }, map: map, icon: '/marcador-30.png' })
      // });

      // return () => map.re
  }, []);

  // useEffect(() => {
  //   if (refMap.current) {
  //     refMap.current.setCenter(coords);
  //   }
  // }, [coords]);

  // useEffect(() => {
  //   refMap.current?.addListener('click', function({ latLng }) {
  //     console.log('Nuevo marcador');
      
  //     const lat = latLng.lat();
  //     const lng = latLng.lng()
  //     new google.maps.Marker({ position: { lat, lng }, map: refMap.current, icon: '/marcador-60.png' })
  //   });
  //  }, []);

  const addMarker = ({ lat, lng } : any) => {
    if (refMap.current) {
      new google.maps.Marker({ position: { lat, lng }, map: refMap.current, icon })
    } 
  }

  const changeLocation = (coords :any) => {
    if (refMap.current) {
      refMap.current.setCenter(coords);
    }
  }

  return {
    refContainer,
    addMarker,
    changeLocation,
  }
}