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
import Secondfooter from "./Secondfooter";
import Singer1 from "./Cards/Singer1";
import Singer2 from "./Cards/Singer2";
import Singer3 from "./Cards/Singer3";
import Singer4 from "./Cards/Singer4";
import Singer5 from "./Cards/Singer5";
import Singer6 from "./Cards/Singer6";
import Singer7 from "./Cards/Singer7";
import Singer8 from "./Cards/Singer8";
import Singer9 from "./Cards/Singer9";
import Singer10 from "./Cards/Singer10";
import Singer11 from "./Cards/Singer11";
import Singer12 from "./Cards/Singer12";

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
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [mpCard2, setmpCard2] = useState(false);
  const cardFunc2 = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer3card, setsinger3Card] = useState(false);
  const singer3Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer4card, setsinger4Card] = useState(false);
  const singer4Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer5card, setsinger5Card] = useState(false);
  const singer5Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer6card, setsinger6Card] = useState(false);
  const singer6Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer7card, setsinger7Card] = useState(false);
  const singer7Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer8card, setsinger8Card] = useState(false);
  const singer8Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer9card, setsinger9Card] = useState(false);
  const singer9Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer10card, setsinger10Card] = useState(false);
  const singer10Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer11card, setsinger11Card] = useState(false);
  const singer11Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [singer12card, setsinger12Card] = useState(false);
  const singer12Func = () => {
    setmpCard2((prev) => !prev);
    document.getElementById("hide1").style.display = "none";
    document.getElementById("hide3").style.display = "none";
    document.getElementById("hide2").style.display = "none";
    document.getElementById("singerOneSongs").style.display = "none";
    document.getElementById("singerTwoSongs").style.display = "none";
    document.getElementById("singerThreeSongs").style.display = "none";
    document.getElementById("singerFourSongs").style.display = "none";
    document.getElementById("singerFiveSongs").style.display = "none";
    document.getElementById("singerSixSongs").style.display = "none";
    document.getElementById("singerSevenSongs").style.display = "none";
    document.getElementById("singerEightSongs").style.display = "none";
    document.getElementById("singerNineSongs").style.display = "none";
    document.getElementById("singerTenSongs").style.display = "none";
    document.getElementById("singerElevenSongs").style.display = "none";
    document.getElementById("singerTwelveSongs").style.display = "none";
    document.getElementById("SecondFooter").style.display = "none";
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
                    document.getElementById("singerThreeSongs").style.display =
                      "none";
                    document.getElementById("singerFourSongs").style.display =
                      "none";
                    document.getElementById("singerFiveSongs").style.display =
                      "none";
                    document.getElementById("singerSixSongs").style.display =
                      "none";
                    document.getElementById("singerSevenSongs").style.display =
                      "none";
                    document.getElementById("singerEightSongs").style.display =
                      "none";
                    document.getElementById("singerNineSongs").style.display =
                      "none";
                    document.getElementById("singerTenSongs").style.display =
                      "none";
                    document.getElementById("singerElevenSongs").style.display =
                      "none";
                    document.getElementById("singerTwelveSongs").style.display =
                      "none";
                    document.getElementById("SecondFooter").style.display =
                      "none";
                    document.getElementById("SecondFooter").style.display = "";
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
      {singer3card ? <Singer3 /> : <Singer3 />}
      {singer4card ? <Singer4 /> : <Singer4 />}
      {singer5card ? <Singer5 /> : <Singer5 />}
      {singer6card ? <Singer6 /> : <Singer6 />}
      {singer7card ? <Singer7 /> : <Singer7 />}
      {singer8card ? <Singer8 /> : <Singer8 />}
      {singer9card ? <Singer9 /> : <Singer9 />}
      {singer10card ? <Singer10 /> : <Singer10 />}
      {singer11card ? <Singer11 /> : <Singer11 />}
      {singer12card ? <Singer12 /> : <Singer12 />}

      {/* //this is for just main components different from cards of singers */}
      <div id="mini12">
        <div id="hide1">
          {artists ? (
            <Artists
              card12={singer12Func}
              card11={singer11Func}
              card10={singer10Func}
              card9={singer9Func}
              card8={singer8Func}
              card7={singer7Func}
              card6={singer6Func}
              card5={singer5Func}
              card4={singer4Func}
              card3={singer3Func}
              card2={cardFunc2}
              card1={cardFunc1}
            />
          ) : (
            <Minicomp
              card1={cardFunc1}
              card2={cardFunc2}
              card3={singer3Func}
              card12={singer12Func}
              card11={singer11Func}
              card10={singer10Func}
              card9={singer9Func}
              card8={singer8Func}
              card7={singer7Func}
              card6={singer6Func}
              card5={singer5Func}
              card4={singer4Func}
              togglee={toggless}
            />
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
