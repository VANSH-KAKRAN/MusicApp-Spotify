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
import Loginpage from "./Loginpage";
import Album1 from "./albums/Album1";
import Search from "./Search";
import SearchSongs from "./SearchSongs";

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
    document.getElementById("singerTwelveSongs").style.display = "";
    document.getElementById("SecondFooter").style.display = "none";
  };
  const [login, setlogin] = useState(false);
  const loginFunc = () => {
    setlogin((prev) => !prev);
    document.getElementById("signlog").style.display = "none";
    document.getElementById("comp1").style.display = "none";
    document.getElementById("mini12").style.display = "none";
    document.getElementById("LoginPage").style.display = "";
  };

  //till here

  //Now the albums
  const [album1, setAlbum1] = useState(false);
  const album1Func = () => {
    setAlbum1((prev) => !prev);
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
    document.getElementById("ALBUM1").style.display = "";
  };
  const [search, setsearch] = useState(false);
  const searchFunc = () => {
    setsearch((prev) => !prev);
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
    document.getElementById("ALBUM1").style.display = "none";
    document.getElementById("Searchs").style.display = "";
    document.getElementById("SecondFooter").style.display = "";
    document.getElementById("input-group").style.display = "none";
  };
  return (
    <div id="router">
      <div id="comp1" className="comp1">
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
                    document.getElementById("mini12").style.display = "";
                    document.getElementById("signlog").style.display = "";
                    document.getElementById("LoginPage").style.display = "none";
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
                    document.getElementById("comp1").style.display = "";
                    document.getElementById("Searchs").style.display = "none";
                    document.getElementById("input-group").style.display = "";

                    // now the albums begins
                    document.getElementById("ALBUM1").style.display = "none";
                  }}
                >
                  <a className="page-link" href="#" aria-label="Previous">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-caret-left"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                    </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-house-door-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                  </a>
                </li>
                {/* <li className="page-item">
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
                </li> */}
              </ul>
            </nav>
          </div>
          <div id="signlog" className="signlog">
            <Search toggleSearch={searchFunc} />
            {/* <button className="signup ">Sign Up</button> */}
            {/* <button className="login get-spotify" onClick={loginFunc}>
              Log in
            </button> */}
            <div className="UserLogin" onClick={loginFunc}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30s" height="30" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>
            </div>
          </div>
        </div>
        {login ? <Loginpage /> : <Loginpage />}
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
        {search ? <SearchSongs /> : <SearchSongs />}
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
          {album ? (
            <Albums />
          ) : (
            <Minicompsecond albumtoggle1={album1Func} toggle2={toggles2} />
          )}
        </div>
        {album1 ? <Album1 /> : <Album1 />}
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
