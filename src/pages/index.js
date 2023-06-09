import Head from 'next/head';
import Featured from '../components/Featured';
import Menu from '../components/Menu';
import ListMenu from '../components/ListMenu';
import Accordion from '../components/Accordion';

export default function Home() {
	return (
		<>
			<Head>
				<title>Restaurant</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<div
				style={{
					width: '56%',
					margin: '0 auto',
				}}
			>
				<Featured />
				<Menu />
				<ListMenu />
				
			</div>
		</>
	);
}
