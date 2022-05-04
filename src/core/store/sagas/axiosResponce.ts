import axios, { Method } from 'axios'

const axiosResponse = (method: Method, url: string, data?: any) =>
	axios({ method: method, url: url, data })
		.then(res => res)
		.catch(err => err.message)

export { axiosResponse }
