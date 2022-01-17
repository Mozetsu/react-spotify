import { getProviders, signIn } from 'next-auth/react';

function Login({ providers }) {
	return (
		<div>
			<img
				className="w-100 mb-5"
				src="https://raw.githubusercontent.com/Mozetsu/react-spotify/main/public/spotify.svg"
				alt=""
			></img>
			{Object.values(providers).map((provider) => (
				<div>
					<button>Login with {provider.name}</button>
				</div>
			))}
			console.log(providers);
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
