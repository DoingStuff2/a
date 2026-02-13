const songs = [
  {
    title: "Love On The Brain",
    artist: "Rihanna",
    src: "audio/Love-On-The-Brain.mp3",
    cover: "images/Love-On-The-Brain.jpg"
  },
  {
    title: "Marry You",
    artist: "Bruno Mars",
    src: "audio/Marry-You.mp3",
    cover: "images/Marry-You.jpg"
  },
  {
    title: "Just The Way You Are",
    artist: "Bruno Mars",
    src: "audio/Just-The-Way-You-Are.mp3",
    cover: "images/Just-The-Way-You-Are.jpg"
  },
  {
    title: "Replay",
    artist: "Iyaz",
    src: "audio/Replay.mp3",
    cover: "images/Replay.jpg"
  },
  {
    title: "Every Breath You Take",
    artist: "The Police",
    src: "audio/Every-Breath-You-Take.mp3",
    cover: "images/Every-Breath-You-Take.jpg"
  },
  {
    title: "Die For You",
    artist: "The Weeknd",
    src: "audio/Die-For-You.mp3",
    cover: "images/Die-For-You.jpg"
  },
  {
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    src: "audio/I-Wanna-Be-Yours.mp3",
    cover: "images/I-Wanna-Be-Yours.jpg"
  },
  {
    title: "Here With Me",
    artist: "d4vd",
    src: "audio/Here-With-Me.mp3",
    cover: "images/Here-With-Me.jpg"
  }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");

function loadSong(i) {
  audio.src = songs[i].src;
  title.textContent = songs[i].title;
  artist.textContent = songs[i].artist;
  cover.src = songs[i].cover;
}

loadSong(index);

playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
};

document.getElementById("next").onclick = () => {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
  playBtn.textContent = "⏸";
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
  playBtn.textContent = "⏸";
};
