import React, { useState, useEffect } from "react";
import "./Singer.css";

const AudioPlayer = ({ songs }) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const audioRef = React.useRef();

  // Load the current track when currentTrack changes
  useEffect(() => {
    if (songs.length > 0) {
      audioRef.current.src = songs[currentTrack].src;
      audioRef.current.load();
      updateDuration();
    }
  }, [currentTrack, songs]);

  // Play or pause the audio
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Go to the next track
  const nextTrack = () => {
    const newIndex = (currentTrack + 1) % songs.length;
    setCurrentTrack(newIndex);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  // Go to the previous track
  const prevTrack = () => {
    const newIndex = (currentTrack - 1 + songs.length) % songs.length;
    setCurrentTrack(newIndex);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  // Update the current time of the audio
  const updateTime = () => {
    const currentMinutes = Math.floor(audioRef.current.currentTime / 60);
    const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
    setCurrentTime(
      `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`
    );
    const newProgress =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(newProgress);
  };

  // Update the duration of the audio
  const updateDuration = () => {
    const durationMinutes = Math.floor(audioRef.current.duration / 60);
    const durationSeconds = Math.floor(audioRef.current.duration % 60);
    setDuration(
      `${durationMinutes}:${durationSeconds < 10 ? "0" : ""}${durationSeconds}`
    );
  };

  return (
    <div>
      <div className="Play-follow3d">
        <li>
          <svg style={{backgroundColor: "wheat", color:"white",borderRadius:"50%"
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
      <ul className="playlist">
        {songs.map((song, index) => (
          //   <li key={index} onClick={() => setCurrentTrack(index)}>
          //     {song.title} {song.popularity}{song.time}
          //   </li>
          <ul
            className="Listing"
            key={index}
            onClick={() => setCurrentTrack(index)}
          >
            <li>{song.title}</li>
            <li>{song.popularity}</li>
            <li>{song.time}</li>
          </ul>
        ))}
      </ul>

      <div className="audio-player">
        <div className="player-controls">
          <button onClick={prevTrack} className="control-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-skip-start-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z" />
            </svg>
          </button>
          <button onClick={togglePlay} className="control-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
            </svg>
          </button>
          <button onClick={nextTrack} className="control-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-skip-end-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z" />
            </svg>
          </button>
        </div>
        <div className="PlayPause">

        <div className="">{currentTime}</div>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
          {/* <div className="">{duration}</div> */}
          <div className="">{duration}</div>
        </div>

        <div className="time-container">
          {/* <span className="current-time">{currentTime}</span> /{" "}
          <span className="duration">{duration}</span> */}
        </div>
        <audio ref={audioRef} onTimeUpdate={updateTime}></audio>
      </div>
    </div>
  );
};

export default AudioPlayer;