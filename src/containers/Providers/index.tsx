import { FC, ReactNode } from 'react'


const Provider: FC<IProps> = p => {
	const { children } = p
	return <>{children}</>
}

interface IProps {
	children: ReactNode
}
export default Provider
