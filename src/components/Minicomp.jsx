import React from "react";
import "./Menu.css";
import "./Toggle.css";
import { useState } from "react";

export default function Minicomp({ togglee,card1,card2 }) {
 

  return (
    <div>
      <div className="popular-show">
        <li className="popular-artists">Popular Artist</li>
        <button onClick={togglee} className="showall">
          Show More
        </button>
      </div>
      {/* <div id="Singers1" className={`singers${active}`}> */}
      <div id="Singers1" className={`singers`}>
        <li onClick={card1} id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer1.jpg" alt="" />
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
        <li onClick={card2} id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer2.jpg" alt="" />
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
        <li id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer3.jpg" alt="" />
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
        <li id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer4.jpg" alt="" />
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
        <li id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer5.jpg" alt="" />
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
        <li id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer6.jpg" alt="" />
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
        <li id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer7.jpg" alt="" />
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
        <li id="singer-box">
          <div className="image">
            <img
              className="singer"
              src="src/images/singer8himeshreshmiya.webp"
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
        <li id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer9.webp" alt="" />
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
        <li id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer10.webp" alt="" />
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
        <li id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer11.jpg" alt="" />
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
        <li id="singer-box">
          <div className="image">
            <img className="singer" src="src/images/singer12.jpg" alt="" />
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

      <div></div>
    </div>
  );
}
