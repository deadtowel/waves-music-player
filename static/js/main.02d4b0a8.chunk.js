(this["webpackJsonpwave-music-player"]=this["webpackJsonpwave-music-player"]||[]).push([[0],{33:function(t,n,e){"use strict";e.r(n);var i,r,a=e(1),s=e.n(a),c=e(18),o=e.n(c),d=e(3),l=e(6),p=e.n(l),u=e(9),m=e(5),h=e(8),f=e(4),b=e(0);var g=Object(f.b)(i||(i=Object(d.a)(["\n  0% {\n    transform: rotate(0deg)\n  }\n  100% {\n    transform: rotate(360deg)\n  }\n"]))),j=f.a.div(r||(r=Object(d.a)(["\n\tmin-height: 65vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\n\t.cover-wrapper {\n\t\twidth: 20rem;\n\t\theight: 20rem;\n\t\tborder-radius: 50%;\n\t\toverflow: hidden;\n\t}\n\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t\tanimation-name: ",";\n\t\tanimation-duration: 50s;\n\t\tanimation-iteration-count: infinite;\n\t\tanimation-timing-function: linear;\n\t\tanimation-play-state: ",";\n\t}\n\th2 {\n\t\tpadding: 3rem 1rem 1rem 1rem;\n\t\tfont-size: 1.75rem;\n\t}\n\th3 {\n\t\tfont-size: 1.25rem;\n\t}\n\t@media screen and (max-width: 480px) {\n\t\t.cover-wrapper {\n\t\t\twidth: 15rem;\n\t\t\theight: 15rem;\n\t\t}\n\t}\n"])),(function(t){return t.isSwitched?" ":g}),(function(t){return t.isPlaying?"running":"paused"})),x=function(t){var n=t.currentSong,e=t.isPlaying,i=t.isSwitched,r=t.setIsSwitched;return Object(b.jsxs)(j,{className:"song-container",isPlaying:e,resetCover:function(){var t=i;return r(!i),t},isSwitched:i,setIsSwitched:r,children:[Object(b.jsx)("div",{className:"cover-wrapper",children:Object(b.jsx)("img",{alt:n.title,src:n.cover})}),Object(b.jsx)("h2",{children:n.title}),Object(b.jsx)("h3",{children:n.artist})]})};function v(t,n,e,i,r,a){t&&n.current.play(),i(e.map((function(t){return t.id===r.id?Object(m.a)(Object(m.a)({},t),{},{active:!0}):Object(m.a)(Object(m.a)({},t),{},{active:!1})}))),a(!0),setTimeout((function(){a(!1)}),300)}var O,w=e(10),y=e(7);var S,k=f.a.div(O||(O=Object(d.a)(["\n\tmin-height: 20vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\n\t.time-controls {\n\t\twidth: 50%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t\t-webkit-appearance: none;\n\t\t\tbackground: transparent;\n\t\t\tcursor: pointer;\n\t\t}\n\t\tspan {\n\t\t\tdisplay: inline-block;\n\t\t\tpadding: 1rem;\n\t\t\tmin-width: 4rem;\n\t\t}\n\t}\n\n\t.play-controls {\n\t\twidth: 30%;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tpadding: 1rem;\n\n\t\tsvg {\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n\n\tinput[type='range']:focus {\n\t\toutline: none;\n\t\tborder: none;\n\t}\n\tinput[type='range']::-webkit-slider-thumb {\n\t\t-webkit-appearance: none;\n\t\theight: 12px;\n\t\twidth: 12px;\n\t}\n\tinput[type='range']::-moz-range-thumb {\n\t\t-moz-appearance: none;\n\t\tbackground: transparent;\n\t\tborder: none;\n\t\toutline: none;\n\t\theight: 12px;\n\t\twidth: 12px;\n\t}\n\n\t.track {\n\t\tbackground: lightgreen;\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\toverflow: hidden;\n\t\theight: 12px;\n\t\tborder-radius: 1rem;\n\t\tmargin: 0 1.5rem;\n\t\tbackground: linear-gradient(\n\t\t\tto right,\n\t\t\t",",\n\t\t\t","\n\t\t);\n\t}\n\n\t.animate-track {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground: rgb(204, 204, 204);\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\ttransform: translateX(","%);\n\t\tpointer-events: none;\n\t}\n\n\t@media screen and (max-width: 768px) {\n\t\t.time-controls {\n\t\t\twidth: 80%;\n\t\t\tspan {\n\t\t\t\tpadding: 0;\n\t\t\t\tmin-width: 0;\n\t\t\t}\n\t\t\tmargin-bottom: 1.5rem;\n\t\t}\n\t\t.play-controls {\n\t\t\twidth: 50%;\n\t\t}\n\t}\n\t@media screen and (max-width: 480px) {\n\t\t.track {\n\t\t\theight: 16px;\n\t\t\tmargin: 0 0.7rem 0 1rem;\n\t\t}\n\t\t.play-controls {\n\t\t\twidth: 70%;\n\t\t}\n\t}\n"])),(function(t){return t.gradientColors[0]}),(function(t){return t.gradientColors[1]}),(function(t){return t.animationOffset})),I=function(t){var n=t.isPlaying,e=t.setIsPlaying,i=t.audioRef,r=t.songInfo,a=t.setSongInfo,s=t.songs,c=t.setSongs,o=t.setCurrentSong,d=t.currentSong,l=t.setIsSwitched;function h(t){return Math.floor(t/60)+":"+("0"+Math.floor(t%60)).slice(-2)}function f(t){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(p.a.mark((function t(e){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=s.findIndex((function(t){return t.id===d.id})),"skip-forward"!==e){t.next=5;break}return r===s.length-1&&(r=-1),t.next=5,o(s[r+1]);case 5:if("skip-back"!==e){t.next=9;break}return 0===r&&(r=s.length),t.next=9,o(s[r-1]);case 9:v(n,i,s,c,d,l);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsxs)(k,{className:"player",animationOffset:r.animationPlayedPercentage,gradientColors:d.colors,children:[Object(b.jsxs)("div",{className:"time-controls",children:[Object(b.jsx)("span",{className:"start-time",children:h(r.currentTime)}),Object(b.jsxs)("div",{className:"track",children:[Object(b.jsx)("input",{type:"range",min:"0",max:r.duration||0,value:r.currentTime,step:r.duration/1e3||0,onChange:function(t){i.current.currentTime=t.target.value,a(Object(m.a)(Object(m.a)({},r),{},{currentTime:t.target.value}))},className:"time-range"}),Object(b.jsx)("div",{className:"animate-track"})]}),Object(b.jsx)("span",{className:"end-time",children:r.duration?h(r.duration):"0:00"})]}),Object(b.jsxs)("div",{className:"play-controls",children:[Object(b.jsx)(w.a,{onClick:function(){return f("skip-back")},className:"skip-back",size:"2x",icon:y.a}),Object(b.jsx)(w.a,{onClick:function(){n?(i.current.pause(),e(!1)):(i.current.play(),e(!0))},className:"play",size:"2x",icon:n?y.d:y.e}),Object(b.jsx)(w.a,{onClick:function(){return f("skip-forward")},className:"skip-forward",size:"2x",icon:y.b})]})]})};var N,z=f.a.div(S||(S=Object(d.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 1rem 2.5rem;\n\tcursor: pointer;\n\tbackground: ",";\n\t:hover {\n\t\tbackground: #f3f2ffeb;\n\t}\n\t.song-description {\n\t\tpadding-left: 1rem;\n\t\th2 {\n\t\t\tfont-size: 1rem;\n\t\t\tmargin-bottom: 0.5rem;\n\t\t}\n\t\th3 {\n\t\t\tfont-size: 0.8rem;\n\t\t}\n\t}\n\timg {\n\t\twidth: 30%;\n\t}\n"])),(function(t){return t.isActive?"#f3f2ffeb":"transparent"})),P=function(t){var n=t.song,e=t.setCurrentSong,i=t.audioRef,r=t.isPlaying,a=t.songs,s=t.setSongs,c=t.setIsSwitched;function o(){return(o=Object(u.a)(p.a.mark((function t(){var o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=a.filter((function(t){return t.id===n.id})),t.next=3,e(o[0]);case 3:v(r,i,a,s,n,c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsxs)(z,{onClick:function(){return o.apply(this,arguments)},className:"song-container",isActive:n.active,children:[Object(b.jsx)("img",{alt:n.title,src:n.cover}),Object(b.jsxs)("div",{className:"song-description",children:[Object(b.jsx)("h2",{children:n.title}),Object(b.jsx)("h3",{children:n.artist})]})]})};var L,C=f.a.div(N||(N=Object(d.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 25%;\n\theight: 100vh;\n\tbackground: #fff;\n\tbox-shadow: 2px 2px 50px rgb(204, 204, 204);\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\ttransform: translateX(",");\n\ttransition: all 0.75s ease;\n\t> h2 {\n\t\tpadding: 2rem 2.5rem 0.75rem;\n\t}\n\t.library-songs {\n\t\tpadding: 1rem 0rem;\n\t}\n\t@media screen and (max-width: 1099px) {\n\t\twidth: 40%;\n\t\ttransform: translateX(",");\n\t}\n\t@media screen and (max-width: 768px) {\n\t\twidth: 100%;\n\t}\n\t@media screen and (max-width: 480px) {\n\t}\n"])),(function(t){return t.isLibraryOpen?"-48%":"-110%"}),(function(t){return t.isLibraryOpen?"0%":"-110%"})),R=function(t){var n=t.songs,e=t.setSongs,i=t.setCurrentSong,r=t.audioRef,a=t.isPlaying,s=t.isLibraryOpen,c=t.isSwitched,o=t.setIsSwitched;return Object(b.jsxs)(C,{className:"library",isLibraryOpen:s,children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("div",{className:"library-songs",children:n.map((function(t){return Object(b.jsx)(P,{song:t,setCurrentSong:i,audioRef:r,isPlaying:a,songs:n,setSongs:e,isSwitched:c,setIsSwitched:o},t.id)}))})]})};var M=f.a.nav(L||(L=Object(d.a)(["\n\twidth: 60vw;\n\tmin-height: 5vh;\n\tmargin: 0 auto;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 1rem 0;\n\talign-items: center;\n\tbutton {\n\t\tcursor: pointer;\n\t\tbackground: transparent;\n\t\tfont-family: 'Montserrat', sans-serif;\n\t\tborder: none;\n\t\tborder: 2px solid #3f3f3f;\n\t\tfont-size: 1rem;\n\t\tfont-weight: 500;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tpadding: 0.4rem 0.75rem;\n\t\ttransition: all 0.5s ease;\n\t\t&:hover {\n\t\t\tbackground-color: #3f3f3f;\n\t\t\tcolor: white;\n\t\t}\n\t}\n\th1 {\n\t\tfont-weight: 500;\n\t\tfont-size: 3rem;\n\t}\n\t@media screen and (max-width: 768px) {\n\t\th1 {\n\t\t\tfont-size: 2rem;\n\t\t}\n\t\tbutton {\n\t\t\tz-index: 10;\n\t\t}\n\t}\n\t@media screen and (max-width: 480px) {\n\t\twidth: 80vw;\n\t\tbutton {\n\t\t\tz-index: 10;\n\t\t\t&:hover {\n\t\t\t\tbackground-color: white;\n\t\t\t\tcolor: #3f3f3f;\n\t\t\t}\n\t\t}\n\t}\n"]))),T=function(t){var n=t.isLibraryOpen,e=t.setIsLibraryOpen;return Object(b.jsxs)(M,{isLibraryOpen:n,children:[Object(b.jsx)("h1",{children:"WAVES"}),Object(b.jsxs)("button",{onClick:function(){e(!n)},children:["Library",Object(b.jsx)(w.a,{style:{marginLeft:"0.4rem"},icon:y.c})]})]})},A=e(35);var X,E=function(){return[{title:"I Main Samus Now",artist:"Sleepy Fish",cover:"https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",colors:["#fcebe3","#15437c"],audio:"https://mp3.chillhop.com/serve.php/?mp3=24822",id:Object(A.a)(),active:!0},{title:"Rowengartner",artist:"Smile High, Teddy Roxpin",cover:"https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",colors:["#428991","#0e1448"],audio:"https://mp3.chillhop.com/serve.php/?mp3=23346",id:Object(A.a)(),active:!1},{title:"Falling Short",artist:"Hanz",cover:"https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",colors:["#81a8e8","#2a3748"],audio:"https://mp3.chillhop.com/serve.php/?mp3=24643",id:Object(A.a)(),active:!1},{title:"From Afar",artist:"Hanz",cover:"https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",colors:["#81a8e8","#2a3748"],audio:"https://mp3.chillhop.com/serve.php/?mp3=24644",id:Object(A.a)(),active:!1},{title:"The Real Slim Shady",artist:"Eminem",cover:"https://img.discogs.com/yXfBdnxQyA3zJmA7Uxkndj4a28o=/fit-in/600x603/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2481745-1426494100-5980.jpeg.jpg",colors:["#81a8e8","#2a3748"],audio:"https://s4.xn--41a.wiki/0/3493_82887112fc083c01db6562ab34f82a56.mp3",id:Object(A.a)(),active:!1},{title:"Rap God",artist:"Eminem",cover:"https://i1.sndcdn.com/artworks-9e22tUQwxN7pVVFR-BJVxAg-t500x500.jpg",colors:["#81a8e8","#2a3748"],audio:"http://muzovichkoff.com/uploads/files/2021-04/1617898502821_1617898502.mp3",id:Object(A.a)(),active:!1},{title:"Where Is My Mind?",artist:"Pixies",cover:"https://fringster.com/content/images/19070.jpg",colors:["#81a8e8","#2a3748"],audio:"https://mp3minusovki.com/music/fhvndfjwserjgt/247bab1c312b2335afe3f5c9b496a3d3/fe51b815b77078d7dd04360a5544925e.mp3",id:Object(A.a)(),active:!1},{title:"Love Will Tear Us Apart",artist:"Joy Division",cover:"https://i.pinimg.com/originals/d3/e3/88/d3e38850a36f3663cfedff0b3eb71dc2.jpg",colors:["#cfd6dc","#11120d"],audio:"https://converterlizard.com/music/fhvndfjwserjgt/4e38e5b12d07f2e48375f2b694bdb910/a326e5693a01cdb17732896c9a1ec8bd.mp3",id:Object(A.a)(),active:!1}]};var J=f.a.div(X||(X=Object(d.a)(["\n\tfont-family: 'Montserrat', sans-serif;\n\tcolor: #3f3f3f;\n\ttransition: all 1s ease;\n\ttransform: translateX(","%);\n\t@media screen and (max-width: 1099px) {\n\t\ttransform: translateX(0);\n\t}\n"])),(function(t){return t.isLibraryOpen?"12":"0"})),F=function(){var t=Object(a.useRef)(null),n=Object(a.useState)(E()),e=Object(h.a)(n,2),i=e[0],r=e[1],s=Object(a.useState)(i[0]),c=Object(h.a)(s,2),o=c[0],d=c[1],l=Object(a.useState)(!1),f=Object(h.a)(l,2),g=f[0],j=f[1],v=Object(a.useState)({currentTime:0,duration:0,animationPlayedPercentage:0}),O=Object(h.a)(v,2),w=O[0],y=O[1],S=Object(a.useState)(!1),k=Object(h.a)(S,2),N=k[0],z=k[1],P=Object(a.useState)(!1),L=Object(h.a)(P,2),C=L[0],M=L[1];function A(t){var n=t.target.currentTime,e=t.target.duration,i=Math.round(n),r=Math.round(e),a=Math.round(100*i/r);y(Object(m.a)(Object(m.a)({},w),{},{currentTime:n,duration:e,animationPlayedPercentage:a}))}function X(){return(X=Object(u.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=i.findIndex((function(t){return t.id===o.id})))===i.length-1&&(n=-1),t.next=4,d(i[n+1]);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(b.jsxs)(J,{className:"App",isLibraryOpen:C,children:[Object(b.jsx)(T,{isLibraryOpen:C,setIsLibraryOpen:M}),Object(b.jsx)(x,{currentSong:o,isPlaying:g,isSwitched:N,setIsSwitched:z}),Object(b.jsx)(I,{currentSong:o,isPlaying:g,setIsPlaying:j,audioRef:t,songInfo:w,setSongInfo:y,songs:i,setCurrentSong:d,setSongs:r,setIsSwitched:z}),Object(b.jsx)(R,{songs:i,setSongs:r,setCurrentSong:d,isPlaying:g,isLibraryOpen:C,isSwitched:N,setIsSwitched:z,audioRef:t}),Object(b.jsx)("audio",{onTimeUpdate:A,onLoadedMetadata:A,src:o.audio,ref:t,onEnded:function(){return X.apply(this,arguments)}})]})};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.02d4b0a8.chunk.js.map