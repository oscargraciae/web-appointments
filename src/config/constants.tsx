// export const API_DOMAIN =  process.browser ? 'http://localhost:8001' : 'http://api:8001'
export const API_DOMAIN = process.env.NEXT_PUBLIC_API_URL || 'https://api.reserly.mx';
// export const API_DOMAIN = 'https://api.reserly.mx';
// export const API_DOMAIN = 'http://api:8001'
export const URL_API = `${API_DOMAIN}/api/v1`;
export const APP_NAME = 'Reserly';
export const TOKEN_MAPBOX = 'pk.eyJ1Ijoib2dyYWNpYSIsImEiOiJfdmpwaktNIn0.h9MNtUvMtDA2UxWbnMIh_g';
