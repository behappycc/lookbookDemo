export const API_URL = process.env.API_URL || 'http://52.14.156.74:8000/upload/'

export const FRONTEND_PRODUCTION_URL = 'http://52.14.156.74:8080/'

export const FRONTEND_URL = 
	process.env.ENV === 'production' ? FRONTEND_PRODUCTION_URL : 'http://localhost:3000/'