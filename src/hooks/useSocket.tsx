import { useEffect, useMemo, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { API_DOMAIN } from '../config/constants';


export const useSocket = () => {
    
    const socket : Socket = io(API_DOMAIN, { transports: ['websocket'] });
    const [ online, setOnline ] = useState(false);
    console.log('Socket id', socket.id);
    

    // useEffect(() => {
    //     setOnline( socket.connected );
    // }, [socket])

    // useEffect(() => {
    //     socket.on('connect', () => {
    //       console.log('Socket conectado');
          
    //     });
    // }, [ socket ])

    // useEffect(() => {
    //     socket.on('disconnect', () => setOnline( false ));
    // }, [ socket ])

    return {
        socket,
        online
    }
}