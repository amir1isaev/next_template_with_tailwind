import { FC, ReactNode } from 'react'


const Main: FC<IProps> = p => {
	const { children } = p
	return <main className="flex-1">{children}</main>
}

interface IProps {
	children: ReactNode
}
export default Main
