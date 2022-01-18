import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

function Login({ providers }) {
	return (
		<div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
			<Image
				src="https://raw.githubusercontent.com/Mozetsu/react-spotify/main/public/spotify.svg"
				alt=""
				width={180}
				height={50}
			></Image>
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button
						onClick={() => signIn(provider.id, { callbackUrl: '/' })}
						className="bg-[#18D860] text-base mt-10 font-bold text-white p-4 rounded"
					>
						Login with {provider.name}
					</button>
				</div>
			))}
		</div>
	);
}

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
