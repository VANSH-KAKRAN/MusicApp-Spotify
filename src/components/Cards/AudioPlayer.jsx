import React, { useState, useEffect, useRef } from "react";
import "./Singer.css";

// const AudioPlayer = ({ songs }) => {
//   const [currentTrack, setCurrentTrack] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [currentTime, setCurrentTime] = useState("0:00");
//   const [duration, setDuration] = useState("0:00");
//   const audioRef = React.useRef();

//   // Load the current track when currentTrack changes
//   useEffect(() => {
//     if (songs.length > 0) {
//       audioRef.current.src = songs[currentTrack].src;
//       audioRef.current.load();
//       updateDuration();
//     }
//   }, [currentTrack, songs]);

//   // Play or pause the audio
//   const togglePlay = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   // Go to the next track
//   const nextTrack = () => {
//     const newIndex = (currentTrack + 1) % songs.length;

//     setCurrentTrack(newIndex);

//     if (isPlaying) {
//       audioRef.current.play();
//     } else {
//       audioRef.current.play();
//     }
//   };

//   // Go to the previous track
//   const prevTrack = () => {
//     const newIndex = (currentTrack - 1 + songs.length) % songs.length;
//     setCurrentTrack(newIndex);

//     if (isPlaying) {
//       audioRef.current.play();
//     }
//   };

//   // Update the current time of the audio
//   const updateTime = () => {
//     const currentMinutes = Math.floor(audioRef.current.currentTime / 60);
//     const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
//     setCurrentTime(
//       `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`
//     );
//     const newProgress =
//       (audioRef.current.currentTime / audioRef.current.duration) * 100;
//     setProgress(newProgress);
//   };

//   // Update the duration of the audio
//   const updateDuration = () => {
//     const durationMinutes = Math.floor(audioRef.current.duration / 60);
//     const durationSeconds = Math.floor(audioRef.current.duration % 60);
//     setDuration(
//       `${durationMinutes}:${durationSeconds < 10 ? "0" : ""}${durationSeconds}`
//     );
//   };
function AudioPlayer({ songs }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Track current song index
  const [isPlaying, setIsPlaying] = useState(false); // Play/pause state
  const [duration, setDuration] = useState(0); // Song duration
  const [currentTime, setCurrentTime] = useState(0); // Current playback time
  const [volume, setVolume] = useState(1); // Volume level

  const audioRef = useRef(null); // Reference to the audio element

  // Load metadata like song duration and handle events like time update and song end
  useEffect(() => {
    const audio = audioRef.current;
    audio.load(); // Load the current song
    audio.onloadedmetadata = () => setDuration(audio.duration); // Set duration when song metadata loads
    audio.ontimeupdate = () => setCurrentTime(audio.currentTime); // Update current time as the song plays
    audio.onended = () => nextSong(); // Automatically play next song when current ends
  }, [currentSongIndex]);

  // Play the current song
  const playSong = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  // Pause the current song
  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // Go to the next song and play it
  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  // Go to the previous song and play it
  const previousSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(true);
  };

  // Seek through the song using the range input
  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Handle volume change with the range input
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  // Format the time for display (mm:ss)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Handle click on a song in the playlist to play it
  const handleSongClick = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  // Auto-play when switching songs after clicking Next or Previous
  useEffect(() => {
    if (isPlaying) {
      playSong();
    }
  }, [currentSongIndex]);

  return (
    <div className="Background-all">
      <div className="Play-follow3d">
        <li>
          <svg
            style={{
              backgroundColor: "white",
              color: "green",
              borderRadius: "50%",
              border: " 1px solid green",
            }}
            id="PLayButton"
            className=" PLayButton"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
          </svg>
        </li>
        <li>
          <button className="followBtn">Folllow</button>
        </li>
        <li>
          <div class="dropdown">
            <button
              class="btn bg-transparent"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </li>
      </div>
      <div className="Popular-text">Popular</div>

      {/* <ul className="playlist">
        <div>
          <ul className="TitleNav">
            <li>#</li>
            <li id="title-text">Title</li>
            <li className="popuarity">Popularity</li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
                style={{ backgroundColor: "black" }}
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
            </li>
          </ul>
          <hr id="hr" />
        </div>
      </ul> */}

      <div className="App">
        

        {/* Audio element */}
        <audio ref={audioRef} src={songs[currentSongIndex].src} />

        {/* Controls */}
        <div className="bottom-nav">

        <div className="all-control">
        <h2>{songs[currentSongIndex].title}</h2>

        <div className="controls">
          <button onClick={previousSong}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-skip-start-fill" viewBox="0 0 16 16">
            <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z"/>
          </svg></button>
          {isPlaying ? (
            <button onClick={pauseSong}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z"/>
          </svg></button>
          ) : (
            <button onClick={playSong}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
          </svg></button>
          )}
          <button onClick={nextSong}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 16 16">
  <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z"/>
</svg></button>
        </div>

        {/* Time and seek bar */}
        {/* <div className="time-controls">
          <span>{formatTime(currentTime)}</span>
          <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          />
          <span>{formatTime(duration)}</span>
          </div> */}

        {/* Volume controls */}
        <div className="volume-controls">
          <label><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>
</svg></label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
            />
        </div>
            </div>
               {/* Time and seek bar */}
        <div className="time-controls">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
            />
          <span>{formatTime(duration)}</span>
        </div>
          </div>

        {/* Playlist */}
        <div className="playlist">
          {songs.map((song, index) => (
            <ul
            key={index}
            className={index === currentSongIndex ? "active" : ""}
              onClick={() => handleSongClick(index)}
            >
              <li>{song.Snumber}</li>
              <li>{song.title}</li>
              <li>{song.popularity}</li>
            </ul>
          ))}

          <ul>
            <li>{}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
