import React from 'react';
import styled, { keyframes } from 'styled-components';

function Song({ currentSong, isPlaying, isSwitched, setIsSwitched }) {
	function resetCover() {
		const state = isSwitched;
		setIsSwitched(!isSwitched);
		return state;
	}
	return (
		<SongStyled
			className='song-container'
			isPlaying={isPlaying}
			resetCover={resetCover}
			isSwitched={isSwitched}
			setIsSwitched={setIsSwitched}
		>
			<div className='cover-wrapper'>
				<img alt={currentSong.title} src={currentSong.cover}></img>
			</div>
			<h2>{currentSong.title}</h2>
			<h3>{currentSong.artist}</h3>
		</SongStyled>
	);
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

const SongStyled = styled.div`
	min-height: 65vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.cover-wrapper {
		width: 20rem;
		height: 20rem;
		border-radius: 50%;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation-name: ${(props) => (props.isSwitched ? ' ' : rotate)};
		animation-duration: 50s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-play-state: ${(props) =>
			props.isPlaying ? 'running' : 'paused'};
	}
	h2 {
		padding: 3rem 1rem 1rem 1rem;
		font-size: 1.75rem;
	}
	h3 {
		font-size: 1.25rem;
	}
	@media screen and (max-width: 480px) {
		.cover-wrapper {
			width: 15rem;
			height: 15rem;
		}
	}
`;

export default Song;
