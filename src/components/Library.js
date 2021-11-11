import React from 'react';
//importing styled-components
import styled from 'styled-components';
//importing components
import LibrarySong from './LibrarySong';

function Library({
	songs,
	setSongs,
	setCurrentSong,
	audioRef,
	isPlaying,
	isLibraryOpen,
	isSwitched,
	setIsSwitched,
}) {
	return (
		<LibraryStyled className='library' isLibraryOpen={isLibraryOpen}>
			<h2>Library</h2>
			<div className='library-songs'>
				{songs.map((song) => (
					<LibrarySong
						song={song}
						setCurrentSong={setCurrentSong}
						key={song.id}
						audioRef={audioRef}
						isPlaying={isPlaying}
						songs={songs}
						setSongs={setSongs}
						isSwitched={isSwitched}
						setIsSwitched={setIsSwitched}
					/>
				))}
			</div>
		</LibraryStyled>
	);
}

const LibraryStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 25%;
	height: 100vh;
	background: #fff;
	box-shadow: 2px 2px 50px rgb(204, 204, 204);
	overflow-y: scroll;
	overflow-x: hidden;
	transform: translateX(${(props) => (props.isLibraryOpen ? '-48%' : '-110%')});
	transition: all 0.75s ease;
	> h2 {
		padding: 2rem 2.5rem 0.75rem;
	}
	.library-songs {
		padding: 1rem 0rem;
	}
	@media screen and (max-width: 1099px) {
		width: 40%;
		transform: translateX(${(props) => (props.isLibraryOpen ? '0%' : '-110%')});
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
	@media screen and (max-width: 480px) {
	}
`;

export default Library;
