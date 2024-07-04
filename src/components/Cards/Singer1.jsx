import React from "react";
import "./Singer.css";
import "./PLayer.css";

import AudioPlayer from "./AudioPlayer";
import Secondfooter from "../Secondfooter";
import Humdard from "/songs/Humdard.mp3";
import Ikvaariaa from "/songs/Ikvaariaa.mp3";
import Illhi from "/songs/Illahi.mp3";
import Jaanisar from "/songs/Jaannisaar.mp3";
import Omaahi from "/songs/Omaahi.mp3";
import Qaafirana from "/songs/Qaafirana.mp3";
import arigitsinghback from "/images/arigitsinghback.png";
import Minicompsecond from "../Minicompsecond";
import Minicompthird from "../Minicompthird";

export default function Singer1() {
  const songs = [
    { Snumber:"1",
      title: "Humdard",
      src: Humdard,
      Artist1:"Arijit Singh",
      Artist2:"Siddharth",
      Artist3:"Sradha",
      popularity: "231,802,116",
      time: "4:19",
    },
    {Snumber:"2",
      Artist1:"Arijit Singh",
      Artist2:"Siddharth",
      Artist3:"Sradha",
      title: "Ik Vaari aa ",
      src: Ikvaariaa,
      popularity: "231,802,116",
      time: "3:46",
    },
    {Snumber:"3",
      Artist1:"Arijit Singh",
      Artist2:"Siddharth",
      Artist3:"Sradha",
      title: "Ilaahi",
      src: Illhi,
      popularity: "231,802,116",
      time: "3:29",
    },
    {Snumber:"4",
      Artist1:"Arijit Singh",
      Artist2:"Siddharth",
      Artist3:"Sradha",
      title: "Jaanisar",
      src: Jaanisar,
      popularity: "231,802,116",
      time: "4:08",
    },
    {Snumber:"5",
      Artist1:"Arijit Singh",
      Artist2:"Siddharth",
      Artist3:"Sradha",
      title: "O Maahii ",
      src: Omaahi,
      popularity: "231,802,116",
      time: "4:06",
    },
    {Snumber:"6",
      Artist1:"Arijit Singh",
      Artist2:"Siddharth",
      Artist3:"Sradha",
      title: "Qaafirana",
      src: Qaafirana,
      popularity: "231,802,116",
      time: "6:15",
    },
    // { title: 'Song 7', src: 'audio7.mp3' },
    // { title: 'Song 8', src: 'audio8.mp3' },
    // { title: 'Song 9', src: 'audio9.mp3' },
    // { title: 'Song 10', src: 'audio10.mp3' },
    // { title: 'Song 11', src: 'audio11.mp3' },
    // { title: 'Song 12', src: 'audio12.mp3' },
    // Add more songs as needed
  ];

  return (
    <div style={{ display: "none" }} id="singerOneSongs">
      <div className="Singer-song-player">
        <div
          className="Singer1-Photo-area"
          style={{ backgroundImage: `url(${arigitsinghback})` }}
        >
          <div className="verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-patch-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
            Verified Aritist
          </div>
          <div className="Singername">Arijit Singh</div>
          <div className="listners">36,957,811 monthly listeners</div>
        </div>

        <div>
          <div className="App">
            <AudioPlayer songs={songs} />
            <Minicompsecond />
            <Minicompthird />
            <Secondfooter />
          </div>
        </div>
      </div>
    </div>
  );
}
