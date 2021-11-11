export function playAnotherSongHandler(
	isPlaying,
	audioRef,
	songs,
	setSongs,
	currentSong,
	setIsSwitched,
) {
	if (isPlaying) {
		audioRef.current.play();
	}
	const newSongs = songs.map((state) => {
		if (state.id === currentSong.id) {
			return {
				...state,
				active: true,
			};
		} else {
			return {
				...state,
				active: false,
			};
		}
	});
	setSongs(newSongs);
	//reset rotate animation in shitty way
	setIsSwitched(true);
	setTimeout(() => {
		setIsSwitched(false);
	}, 300);
}
