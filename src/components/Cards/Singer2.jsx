import React from "react";
import "./Singer.css";
import "./PLayer.css";

import AudioPlayer from "./AudioPlayer";
import Secondfooter from "../Secondfooter";
import Kkimage from "/images/kkimageback.png";
import Ajabada from "/songs/kk/ajabada.mp3";
import Dilibaadat from "/songs/kk/dilibaadat.mp3";
import Labonko from "/songs/kk/laboko.mp3";
import Teriyaadomain from "/songs/kk/teriyaadomain.mp3";
import Tuhi from "/songs/kk/tuhimerasab.mp3";

export default function Singer2() {
  const songs = [
    {Snumber:"1",
      title: "Aakho Mai Teri Ajab Si Adda ",
      src: Ajabada,
      popularity: "231,802,116",
      time: "4:19",
      Artist1:"Krishan Kumar",
      Artist2:"Pritam",
      Artist3:"Arijit Singh",
    },
    { Snumber:"2",
      title: " Dil Ibaadat Kar Rha Hai",
      src: Dilibaadat,
      popularity: "231,802,116",
      time: "3:46",
      Artist1:"Krishan Kumar",
      Artist2:"Pritam",
      Artist3:"Arijit Singh",
    },
    { Snumber:"3",
      title: " Labon Ko",
      src: Labonko,
      popularity: "231,802,116",
      time: "3:29",
      Artist1:"Krishan Kumar",
      Artist2:"Pritam",
      Artist3:"Arijit Singh",
    },
    {  Snumber:"4",
      title: "Teri Aakho Mai ",
      src: Teriyaadomain,
      popularity: "231,802,116",
      time: "4:08",
      Artist1:"Krishan Kumar",
      Artist2:"Pritam",
      Artist3:"Arijit Singh",
    },
    {
      Snumber:"5",
      title: " Tu Hi Mera Sab ",
      src: Tuhi,
      popularity: "231,802,116",
      time: "4:06",
      Artist1:"Krishan Kumar",
      Artist2:"Pritam",
      Artist3:"Arijit Singh",
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
    <div>
      <div style={{ display: "none" }} id="singerTwoSongs">
        <div className="Singer-song-player">
          <div
            className="Singer1-Photo-area"
            style={{ backgroundImage: `url(${Kkimage})` }}
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
            <div className="Singername">Krishan Kumar</div>
            <div className="listners">56,667,211 monthly listeners</div>
          </div>

          <div>
            <div className="App">
              <AudioPlayer songs={songs} />

              <Secondfooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
