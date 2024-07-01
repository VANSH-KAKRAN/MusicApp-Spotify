import React from "react";
import Minicomp from "./Minicomp";
import Leftside from "./Leftside";
import Navbar2 from "./Navbar2";
import Artists from "./Artists";
import { useState } from "react";
import "./Menu.css";
import Minicompsecond from "./Minicompsecond";
import Albums from "./Albums";
import "./Toggle.css";
import Minicompthird from "./Minicompthird";
import Radio from "./Radio";
import Singer1 from "./Cards/Singer1";
import Singer2 from "./Cards/Singer2";
import Secondfooter from "./Secondfooter";

export default function Mains() {
  const [artists, setartists] = useState(false);

  const toggless = () => {
    setartists((prev) => !prev);
    document.getElementById("hide2").style.display = "none";
    document.getElementById("hide3").style.display = "none";
  };
  const [album, setalbum] = useState(false);

  const toggles2 = () => {
    setalbum((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
  };
  const [radio, setradio] = useState(false);

  const toggles3 = () => {
    setradio((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide2").style.display = "none";
  };

  //these are the usestates which are being used in all of those cards
  const [mpCard1, setmpCard1] = useState(false);
  const cardFunc1 = () => {
    setmpCard1((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "";
  };
  const [mpCard2, setmpCard2] = useState(false);
  const cardFunc2 = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "";
  };

  //till here
  return (
    <div id="router">
      <div className="comp1">
        <Leftside />
      </div>
      <div className="comp2"></div>
      <div>
        <div className="singlog-leftright">
          <div style={{ paddingTop: "13px", paddingLeft: "15px" }}>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {/* //this is the main back button */}
                <li
                  className="page-item"
                  onClick={() => {
                    setalbum(false),
                      setradio(false),
                      setartists(false),
                      (document.getElementById("hide1").style.display = "");
                    document.getElementById("hide2").style.display = "";
                    document.getElementById("hide3").style.display = "";
                    document.getElementById("singerOneSongs").style.display =
                      "none";
                    document.getElementById("singerTwoSongs").style.display =
                      "none";
                  }}
                >
                  <a className="page-link" href="#" aria-label="Previous">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-caret-left"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                    </svg>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-caret-right"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="signlog">
            <button className="signup ">Sign Up</button>
            <button className="login get-spotify">Log in</button>
          </div>
        </div>
      </div>
      {/* this is for all the singers cards */}
      {mpCard1 ? <Singer1 /> : <Singer1 />}
      {mpCard2 ? <Singer2 /> : <Singer2 />}
      {/* //this is for just main components different from cards of singers */}
      <div id="mini12">
        <div id="hide1">
          {artists ? (
            <Artists card2={cardFunc2} card1={cardFunc1} />
          ) : (
            <Minicomp card1={cardFunc1} card2={cardFunc2} togglee={toggless} />
          )}
        </div>
        <div id="hide2">
          {album ? <Albums /> : <Minicompsecond toggle2={toggles2} />}
        </div>
        <div id="hide3">
          {radio ? <Radio /> : <Minicompthird toggle3={toggles3} />}
        </div>
        <div id="SecondFooter">
          <Secondfooter />
        </div>
      </div>
    </div>
  );
}
