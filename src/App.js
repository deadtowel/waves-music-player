import React, { useState, useRef } from 'react';
import styled from 'styled-components';
//import components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';
//import out data(songs)
import getData from './getData';

function App() {
	//Refs
	const audioRef = useRef(null);
	//States
	const [songs, setSongs] = useState(getData());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPlayedPercentage: 0,
	});
	const [isSwitched, setIsSwitched] = useState(false);
	const [isLibraryOpen, setIsLibraryOpen] = useState(false);
	//Event handlers
	function timeUpdateHandler(e) {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		//Calculate played percentage
		const roundedCurrentTime = Math.round(currentTime);
		const roundedDuration = Math.round(duration);
		const animationPlayedPercentage = Math.round(
			(roundedCurrentTime * 100) / roundedDuration,
		);
		setSongInfo({
			...songInfo,
			currentTime,
			duration,
			animationPlayedPercentage,
		});
	}
	async function songEndedHandler() {
		let currentSongIndex = songs.findIndex(
			(song) => song.id === currentSong.id,
		);
		if (currentSongIndex === songs.length - 1) currentSongIndex = -1;
		await setCurrentSong(songs[currentSongIndex + 1]);
	}
	return (
		<AppStyled className='App' isLibraryOpen={isLibraryOpen}>
			<Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />
			<Song
				currentSong={currentSong}
				isPlaying={isPlaying}
				isSwitched={isSwitched}
				setIsSwitched={setIsSwitched}
			/>
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				songs={songs}
				setCurrentSong={setCurrentSong}
				setSongs={setSongs}
				setIsSwitched={setIsSwitched}
			/>
			<Library
				songs={songs}
				setSongs={setSongs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
				isLibraryOpen={isLibraryOpen}
				isSwitched={isSwitched}
				setIsSwitched={setIsSwitched}
				audioRef={audioRef}
			/>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				src={currentSong.audio}
				ref={audioRef}
				onEnded={songEndedHandler}
			></audio>
		</AppStyled>
	);
}

const AppStyled = styled.div`
	font-family: 'Montserrat', sans-serif;
	color: #3f3f3f;
	transition: all 1s ease;
	transform: translateX(${(props) => (props.isLibraryOpen ? '12' : '0')}%);
	@media screen and (max-width: 1099px) {
		transform: translateX(0);
	}
`;

export default App;
