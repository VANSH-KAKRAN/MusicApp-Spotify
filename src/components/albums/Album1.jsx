import React from "react";
import "../Cards/Singer.css";
import "../Cards/PLayer.css";
import "./Album.css";
import AudioPlayer from "../Cards/AudioPlayer";
import Secondfooter from "../Secondfooter";
import ArjanVally from "/albums/animal/ARJAN VAILLY.mp3";
import JamalKuda from "/albums/animal/Jamal Kudu.mp3";
import KillingJeeja from "/albums/animal/KILLING JEEJA.mp3";
import PahleBhiMain from "/albums/animal/Pehle Bhi Main.mp3";
import SaariDuniyaJalaaDunga from "/albums/animal/Saari Duniya Jalaa Denge.mp3";
import SATRANGA from "/albums/animal/SATRANGA.mp3";
import Animal from "/images/album1.jpg";
import Minicompsecond from "../Minicompsecond";
import Minicompthird from "../Minicompthird";

export default function Album1() {
  const songs = [
    {
      Snumber: "1",
      title: "Arjan Vailly",
      src: ArjanVally,
      Artist1: "Arijit Singh",
      Artist2: "Siddharth",
      Artist3: "Sradha",
      popularity: "231,802,116",
      time: "3:00",
    },
    {
      Snumber: "2",
      Artist1: "Arijit Singh",
      Artist2: "Siddharth",
      Artist3: "Sradha",
      title: "Jamal Kuda ",
      src: JamalKuda,
      popularity: "231,802,116",
      time: "3:46",
    },
    {
      Snumber: "3",
      Artist1: "Arijit Singh",
      Artist2: "Siddharth",
      Artist3: "Sradha",
      title: "Killing Jeeja",
      src: KillingJeeja,
      popularity: "231,802,116",
      time: "3:29",
    },
    {
      Snumber: "4",
      Artist1: "Arijit Singh",
      Artist2: "Siddharth",
      Artist3: "Sradha",
      title: "Pahle Bhi Main",
      src: PahleBhiMain,
      popularity: "231,802,116",
      time: "4:08",
    },
    {
      Snumber: "5",
      Artist1: "Arijit Singh",
      Artist2: "Siddharth",
      Artist3: "Sradha",
      title: "Saari Duniya Jalaa Dunga ",
      src: SaariDuniyaJalaaDunga,
      popularity: "231,802,116",
      time: "4:06",
    },
    {
      Snumber: "6",
      Artist1: "Arijit Singh",
      Artist2: "Siddharth",
      Artist3: "Sradha",
      title: "SATRANGA",
      src: SATRANGA,
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
    <div id="ALBUM1" style={{ display: "none" }}>
      <div className="Singer-song-player">
        <div className="Lbum1-Photo-area">
          <img className="AlbumImg" src={Animal} alt="" />
          <div className="AboutAlbum">
            <li>Album</li>
            <div className="Singername">ANIMAL</div>
            <li className="listners">36,957,811 monthly listeners</li>
          </div>
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
