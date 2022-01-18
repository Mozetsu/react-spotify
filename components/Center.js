import { ChevronDownIcon } from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistState, playlistIdState } from '../atoms/playlistAtom';
import spotifyApi from '../lib/spotify';
import Songs from './Songs';

const colors = [
	'from-indigo-500',
	'from-blue-500',
	'from-purple-500',
	'from-green-500',
	'from-orange-500',
	'from-pink-500',
	'from-red-500',
];

function Center() {
	const { data: session, status } = useSession();
	const [color, setColor] = useState(null);
	const playlistId = useRecoilValue(playlistIdState);
	const [playlist, setPlaylist] = useRecoilState(playlistState);

	useEffect(() => {
		setColor(shuffle(colors).pop());
	}, [playlistId]);

	useEffect(() => {
		spotifyApi
			.getPlaylist(playlistId)
			.then((data) => {
				setPlaylist(data.body);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [spotifyApi, playlistId]);
	// console.log(playlist);
	return (
		<div className="flex-grow text-white h-screen overflow-y-scroll scrollbar-hide">
			<header className="absolute top-5 right-8">
				<div
					onClick={signOut}
					className="flex items-center space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 bg-black"
				>
					<img className="rounded-full w-10 h-10" src={session?.user.image} alt=""></img>
					<h2>{session?.user.name}</h2>
					<ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
				</div>
			</header>
			{/* playlist header */}
			<section className={`flex items-end space-x-7 bg-gradient-to-b ${color} to-black h-80 text-white p-8`}>
				<img className="h-44 w-44 shadow-2xl" src={playlist?.images?.[0]?.url} alt=""></img>
				<div>
					<p>PLAYLIST</p>
					<h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{playlist?.name}</h1>
				</div>
			</section>
			{/* playlist tracks */}
			<div>
				<Songs />
			</div>
		</div>
	);
}

export default Center;
