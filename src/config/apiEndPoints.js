export const API_URL = process.env.API_URL || 'http://140.109.135.165:8000/upload/'

export const FRONTEND_PRODUCTION_URL = 'http://hangee.me:8080/'

export const FRONTEND_URL = 
	process.env.ENV === 'production' ? FRONTEND_PRODUCTION_URL : 'http://localhost:3000/'