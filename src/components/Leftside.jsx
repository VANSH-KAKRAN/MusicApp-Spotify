import React from 'react'
import './Menu.css'

export default function Leftside() {
  return (
    <div>
      
        <div className="mainss">
          <div className="Mains-in-1">
            <div className="left-1">
              <div className="">
                <a className="navbar-brand fw-bold" href="#">
                  &nbsp;
                  <img
                    src="images/spotify_in_black-removebg-preview.png"
                    alt="Logo"
                    width="25"
                    height="25"
                    className="d-inline-block align-text-center "
                  />
                  &nbsp;Spotify
                </a>
              </div>
              <div>
                &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  fill="currentColor"
                  className="bi bi-house-door-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
              </div>
              <div>
                &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search
              </div>
            </div>
          </div>

          <div className="main-in-2">
            <div className="left-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-music-note-list"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
                  <path fill-rule="evenodd" d="M12 3v10h-1V3z" />
                  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
                  />
                </svg>
                &nbsp;&nbsp;&nbsp;Find Your Intrust
              </div>

              <div className="left-2-2">
                <li>Artist</li>
                <li>Album</li>
                <li>Radio</li>
                <li>Charts</li>
                <li>PLaylist</li>
                <li>Episodes</li>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
  )
}
