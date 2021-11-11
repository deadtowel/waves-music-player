import React from 'react';
import { playAnotherSongHandler } from '../util';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faPause,
	faAngleLeft,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

function Player({
	isPlaying,
	setIsPlaying,
	audioRef,
	songInfo,
	setSongInfo,
	songs,
	setSongs,
	setCurrentSong,
	currentSong,
	setIsSwitched,
}) {
	// Additional functions
	function getFormattedTime(time) {
		return (
			Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
		);
	}
	//Event handlers
	function playSongHandler() {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else {
			audioRef.current.play();
			setIsPlaying(true);
		}
	}
	function dragHandler(e) {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	}
	async function skipSongHandler(direction) {
		let currentSongIndex = songs.findIndex(
			(song) => song.id === currentSong.id,
		);
		if (direction === 'skip-forward') {
			if (currentSongIndex === songs.length - 1) currentSongIndex = -1;
			await setCurrentSong(songs[currentSongIndex + 1]);
		}
		if (direction === 'skip-back') {
			if (currentSongIndex === 0) currentSongIndex = songs.length;
			await setCurrentSong(songs[currentSongIndex - 1]);
		}
		playAnotherSongHandler(
			isPlaying,
			audioRef,
			songs,
			setSongs,
			currentSong,
			setIsSwitched,
		);
	}
	return (
		<PlayerStyled
			className='player'
			animationOffset={songInfo.animationPlayedPercentage}
			gradientColors={currentSong.colors}
		>
			<div className='time-controls'>
				<span className='start-time'>
					{getFormattedTime(songInfo.currentTime)}
				</span>
				<div className='track'>
					<input
						type='range'
						min='0'
						max={songInfo.duration || 0}
						value={songInfo.currentTime}
						step={songInfo.duration / 1000 || 0}
						onChange={dragHandler}
						className='time-range'
					/>
					<div className='animate-track'></div>
				</div>
				<span className='end-time'>
					{songInfo.duration ? getFormattedTime(songInfo.duration) : '0:00'}
				</span>
			</div>
			<div className='play-controls'>
				<FontAwesomeIcon
					onClick={() => skipSongHandler('skip-back')}
					className='skip-back'
					size='2x'
					icon={faAngleLeft}
				/>
				<FontAwesomeIcon
					onClick={playSongHandler}
					className='play'
					size='2x'
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon
					onClick={() => skipSongHandler('skip-forward')}
					className='skip-forward'
					size='2x'
					icon={faAngleRight}
				/>
			</div>
		</PlayerStyled>
	);
}

const PlayerStyled = styled.div`
	min-height: 20vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.time-controls {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		input {
			width: 100%;
			-webkit-appearance: none;
			background: transparent;
			cursor: pointer;
		}
		span {
			display: inline-block;
			padding: 1rem;
			min-width: 4rem;
		}
	}

	.play-controls {
		width: 30%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;

		svg {
			cursor: pointer;
		}
	}

	input[type='range']:focus {
		outline: none;
		border: none;
	}
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 12px;
		width: 12px;
	}
	input[type='range']::-moz-range-thumb {
		-moz-appearance: none;
		background: transparent;
		border: none;
		outline: none;
		height: 12px;
		width: 12px;
	}

	.track {
		background: lightgreen;
		position: relative;
		width: 100%;
		overflow: hidden;
		height: 12px;
		border-radius: 1rem;
		margin: 0 1.5rem;
		background: linear-gradient(
			to right,
			${(props) => props.gradientColors[0]},
			${(props) => props.gradientColors[1]}
		);
	}

	.animate-track {
		width: 100%;
		height: 100%;
		background: rgb(204, 204, 204);
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(${(props) => props.animationOffset}%);
		pointer-events: none;
	}

	@media screen and (max-width: 768px) {
		.time-controls {
			width: 80%;
			span {
				padding: 0;
				min-width: 0;
			}
			margin-bottom: 1.5rem;
		}
		.play-controls {
			width: 50%;
		}
	}
	@media screen and (max-width: 480px) {
		.track {
			height: 16px;
			margin: 0 0.7rem 0 1rem;
		}
		.play-controls {
			width: 70%;
		}
	}
`;

export default Player;
