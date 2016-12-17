export const API_URL = 'http://140.109.135.165:8000/upload/'

export const PRODUCTION_URL = ''

export const FRONTEND_URL = 
	process.env.ENV === 'production' ? PRODUCTION_URL : 'http://localhost:3000/'