import Head from 'next/head'
import React, { FC } from 'react'

const MyHead: FC<IProps> = () => {
	return (
		<Head>
			<title>Template</title>
			<meta name='description' content='Next TypeScript Template' />
		</Head>
	)
}

interface IProps {}
export default MyHead
