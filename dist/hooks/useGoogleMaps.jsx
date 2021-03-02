"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGoogleMaps = void 0;
var react_1 = require("react");
var icon = {
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
var icon2 = {
    path: 
    // "M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z",
    'M24 12.4286C24 19.2927 12 29 12 29C12 29 0 19.2927 0 12.4286C0 5.56446 5.37258 0 12 0C18.6274 0 24 5.56446 24 12.4286Z',
    // fillColor: "#003580",
    fillColor: '#25CB67',
    // fillColor: '#020621',
    fillOpacity: 1,
    scale: 1,
    strokeColor: "#FFF",
    strokeWeight: 3,
};
exports.useGoogleMaps = function (_a) {
    var coords = _a.coords, setCoords = _a.setCoords, setZoom = _a.setZoom;
    var _b = react_1.useState([]), marketsState = _b[0], setMarketsState = _b[1];
    var markers = [];
    var refContainer = react_1.useRef();
    var refMap = react_1.useRef();
    react_1.useEffect(function () {
        var uluru = { lat: coords.lat, lng: coords.lng };
        var map = new google.maps.Map(refContainer.current, {
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
        refMap.current = map;
        // 40000 / 2**14 * 2
        map.addListener('zoom_changed', function () {
            setZoom(map.getZoom());
            var _a = map.getCenter(), lat = _a.lat, lng = _a.lng;
            setCoords({ lat: lat(), lng: lng() });
        });
        map.addListener('dragend', function () {
            var _a = map.getCenter(), lat = _a.lat, lng = _a.lng;
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
    var addMarker = function (_a, id) {
        var lat = _a.lat, lng = _a.lng;
        if (refMap.current) {
            var mrk = new google.maps.Marker({ position: { lat: lat, lng: lng }, map: refMap.current, icon: icon });
            markers.push({ id: id, mrk: mrk });
            setMarketsState(markers);
        }
    };
    var handleIconMarket = function (id, isHover) {
        if (marketsState.length > 0) {
            var mrk = marketsState.filter(function (item) { return item.id == id; })[0].mrk;
            if (isHover) {
                mrk.setIcon(icon2);
            }
            else {
                console.log('Eliminando');
                mrk.setIcon(icon);
            }
        }
    };
    var changeLocation = function (coords) {
        if (refMap.current) {
            refMap.current.setCenter(coords);
        }
    };
    return {
        refContainer: refContainer,
        addMarker: addMarker,
        changeLocation: changeLocation,
        handleIconMarket: handleIconMarket,
    };
};
