import { v4 as uuidv4 } from 'uuid';

function chillHop() {
	return [
		{
			title: 'I Main Samus Now',
			artist: 'Sleepy Fish',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg',
			colors: ['#fcebe3', '#15437c'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=24822',
			id: uuidv4(),
			active: true,
		},
		{
			title: 'Rowengartner',
			artist: 'Smile High, Teddy Roxpin',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg',
			colors: ['#428991', '#0e1448'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=23346',
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Falling Short',
			artist: 'Hanz',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg',
			colors: ['#81a8e8', '#2a3748'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=24643',
			id: uuidv4(),
			active: false,
		},
		{
			title: 'From Afar',
			artist: 'Hanz',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg',
			colors: ['#81a8e8', '#2a3748'],
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=24644',
			id: uuidv4(),
			active: false,
		},
		{
			title: 'The Real Slim Shady',
			artist: 'Eminem',
			cover:
				'https://img.discogs.com/yXfBdnxQyA3zJmA7Uxkndj4a28o=/fit-in/600x603/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2481745-1426494100-5980.jpeg.jpg',
			colors: ['#81a8e8', '#2a3748'],
			audio:
				'https://s4.xn--41a.wiki/0/3493_82887112fc083c01db6562ab34f82a56.mp3',
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Rap God',
			artist: 'Eminem',
			cover:
				'https://i1.sndcdn.com/artworks-9e22tUQwxN7pVVFR-BJVxAg-t500x500.jpg',
			colors: ['#81a8e8', '#2a3748'],
			audio:
				'http://muzovichkoff.com/uploads/files/2021-04/1617898502821_1617898502.mp3',
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Where Is My Mind?',
			artist: 'Pixies',
			cover: 'https://fringster.com/content/images/19070.jpg',
			colors: ['#81a8e8', '#2a3748'],
			audio:
				'https://mp3minusovki.com/music/fhvndfjwserjgt/247bab1c312b2335afe3f5c9b496a3d3/fe51b815b77078d7dd04360a5544925e.mp3',
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Love Will Tear Us Apart',
			artist: 'Joy Division',
			cover:
				'https://i.pinimg.com/originals/d3/e3/88/d3e38850a36f3663cfedff0b3eb71dc2.jpg',
			colors: ['#cfd6dc', '#11120d'],
			audio:
				'https://converterlizard.com/music/fhvndfjwserjgt/4e38e5b12d07f2e48375f2b694bdb910/a326e5693a01cdb17732896c9a1ec8bd.mp3',
			id: uuidv4(),
			active: false,
		},
	];
}

export default chillHop;
