import React from 'react';
import styled from 'styled-components';
import { playAnotherSongHandler } from '../util';

function LibrarySong({
	song,
	setCurrentSong,
	audioRef,
	isPlaying,
	songs,
	setSongs,
	setIsSwitched,
}) {
	async function songSelectHandler() {
		const filteredSong = songs.filter((state) => state.id === song.id);
		await setCurrentSong(filteredSong[0]);
		playAnotherSongHandler(
			isPlaying,
			audioRef,
			songs,
			setSongs,
			song,
			setIsSwitched,
		);
	}
	return (
		<LibrarySongStyled
			onClick={songSelectHandler}
			className='song-container'
			isActive={song.active}
		>
			<img alt={song.title} src={song.cover}></img>
			<div className='song-description'>
				<h2>{song.title}</h2>
				<h3>{song.artist}</h3>
			</div>
		</LibrarySongStyled>
	);
}

const LibrarySongStyled = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem 2.5rem;
	cursor: pointer;
	background: ${(props) => (props.isActive ? '#f3f2ffeb' : 'transparent')};
	:hover {
		background: #f3f2ffeb;
	}
	.song-description {
		padding-left: 1rem;
		h2 {
			font-size: 1rem;
			margin-bottom: 0.5rem;
		}
		h3 {
			font-size: 0.8rem;
		}
	}
	img {
		width: 30%;
	}
`;

export default LibrarySong;
