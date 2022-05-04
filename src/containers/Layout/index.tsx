import { FC, ReactNode } from 'react'
import Footer from '@/simple/Footer'
import Header from '@/simple/Header'
import Main from '@/simple/Main'
import MyHead from '../MyHead'
import Provider from '../Providers'


const Layout: FC<IProps> = p => {
	const { children } = p
	return (
		<Provider>
			<MyHead />
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Provider>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout
