import Center from '../components/Center';
import Sidebar from '../components/Sidebar';
import { getSession } from 'next-auth/react';
import PLayer from '../components/PLayer';

export default function Home() {
	return (
		<div className="bg-black h-screen overflow-hidden">
			<main className="flex">
				<Sidebar />
				<Center />
			</main>
			<div className="sticky bottom-0">
				<PLayer />
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);
	return {
		props: { session },
	};
}
