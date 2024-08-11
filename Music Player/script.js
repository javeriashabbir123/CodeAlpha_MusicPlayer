document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const songTitle = document.getElementById('song-title');
    const artistName = document.getElementById('artist-name');
    const coverImage = document.getElementById('cover-image');

    const songs = [
        { title: 'Dil Dil Pakistan', artist: 'Junaid Jamsheed', src: 'Media/Dil Dil Pakistan.mp3', cover: 'Media/image1.jpg' },
        { title: 'Jazba Junoon', artist: 'Junoon', src: 'Media/Jazba Junoon.mp3', cover: 'Media/image2.jpeg' },
        { title: 'Sohni Dharti', artist: 'Masroor Anwar', src: 'Media/Sohni Dharti.mp3', cover: 'Media/image3.jpg' }
    ];

    let currentSongIndex = 0;

    function loadSong(song) {
        audio.src = song.src;
        songTitle.textContent = song.title;
        artistName.textContent = song.artist;
        coverImage.src = song.cover;
    }

    function playPause() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }

    playPauseBtn.addEventListener('click', playPause);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    });

    progressBar.addEventListener('input', () => {
        const value = progressBar.value * audio.duration / 100;
        audio.currentTime = value;
    });

    // Load the first song on page load
    loadSong(songs[currentSongIndex]);
});
