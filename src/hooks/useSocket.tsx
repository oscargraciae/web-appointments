import { useEffect, useMemo, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { API_DOMAIN } from '../config/constants';


export const useSocket = () => {  
	const socket : Socket = io(API_DOMAIN, { transports: ['websocket'] });
	const [ online, setOnline ] = useState(false);

	return {
			socket,
			online
	}
}