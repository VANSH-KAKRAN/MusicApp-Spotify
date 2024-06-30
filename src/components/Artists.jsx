import React from 'react'
import './Toggle.css'
import singer1 from "/images/singer1.jpg";
import singer2 from "/images/singer2.jpg";
import singer3 from "/images/singer3.jpg";
import singer4 from "/images/singer4.jpg";
import singer5 from "/images/singer5.jpg";
import singer6 from "/images/singer6.jpg";
import singer7 from "/images/singer7.jpg";
import singer8 from "/images/singer8himeshreshmiya.webp";
import singer9 from "/images/singer9.webp";
import singer10 from "/images/singer10.webp";
import singer11 from "/images/singer11.jpg";
import singer12 from "/images/singer12.jpg";
export default function Artists({card1}) {

  return (
    <div>
      <div className="tog-popart">
        Popular Artist
      </div>
     
     
      <div>
      <div className=" tog-singers">
              <li onClick={card1} className="singer-box">
                <div className="image">
                  <img className="singer" src={singer1} alt="" />
                  <br />

                  <span className="name">Arigit Singh</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer2} alt="" />
                  <br />

                  <span className="name">Krishna kumar</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer3} alt="" />
                  <br />

                  <span className="name">Neha Kakkar</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer4} alt="" />
                  <br />

                  <span className="name">Guru Randhava</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer5} alt="" />
                  <br />

                  <span className="name">Darshan Raval</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer6} alt="" />
                  <br />

                  <span className="name">Jubin Nautiyal</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer7} alt="" />
                  <br />

                  <span className="name">A R Rahman</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img
                    className="singer"
                    src={singer8}
                    alt=""
                  />
                  <br />

                  <span className="name">Himesh Reshmiya</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer9} alt="" />
                  <br />

                  <span className="name">Diljeet Dusanjh</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer10} alt="" />
                  <br />

                  <span className="name">Ammy Virk</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer11} alt="" />
                  <br />

                  <span className="name">Siddhu </span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="singer-box">
                <div className="image">
                  <img className="singer" src={singer12} alt="" />
                  <br />

                  <span className="name">Jassi Gill</span>

                  <span className="artist">Artist</span>
                </div>
                <div class="middle">
                  <div class="text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </li>
            </div>
      </div>
     
    </div>
  )
}
