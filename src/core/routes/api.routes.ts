import { serverURI } from '@/config'

export const postAPIRoutes = {
	show: (id: number) => `${serverURI}/post/${id}`,
	all: () => `${serverURI}/posts`,
	destroy: (id: number) => `${serverURI}/post/${id}`,
	patch: (id: number) => `${serverURI}/post/${id}`,
	create: () => `${serverURI}/post/`,
}

export const authAPIRoutes = {
	login: () => `${serverURI}/login`,
	register: () => `${serverURI}/register`,
}

export const userAPIRoutes = {
	show: (id: number) => `${serverURI}/user/${id}`,
}
