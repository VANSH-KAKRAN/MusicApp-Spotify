import React from "react";
import "./Menu.css";
import spotifylogo from "/images/spotifylogo.png";
import phonepng from "/images/phone.png";
import logo1 from "/images/logo1.png";
import logo2 from "/images/logo2.png";
import logo3 from "/images/logo3.png";
import logo4 from "/images/logo4.png";
import nextbackground1 from "/images/nextbackground1.png";
import nextbackground from "/images/nextbackground.png";
import Background3 from "/images/background3.png";
// background-image: url(images/background3.png);





function Menu({ toggle }) {
 

  return (
    <div>
      <div id="1stPage">
        <nav className="aboveall-navbar navbar navbar-expand-lg bg-body-tertiary">
          <div className="all-navbar container-fluid">
            <nav className="navbar bg-body-tertiary nav-color">
              <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">
                  <img
                    src={spotifylogo} 
                    alt="Logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-text-center "
                  />
                  &nbsp;Spotify
                </a>
              </div>
            </nav>
       

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-white"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Premium
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Support{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    |
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link log " href="#">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link log " href="#">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="component0" style={{backgroundImage:`url(${Background3})`}}>
        <div className="phone-text-sec">
          <img className="phone-img" src={phonepng} alt="" />
          <div className="phone-text">
            <div className="text1">
              Play millions of songs <br /> and podcasts, for free.
            </div>
            <button onClick={toggle} className="get-spotify">
              Get Spotify Free
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="Component1">
          <div className="why">Why Spotify ?</div>
          <div className="logo-text">
            <div className="in-logo">
              <li>
                <img src={logo1} alt="" />
              </li>
              <li className="logo-text1">Play your favorites.</li>
              <li className="logo-text2">
                Listen to the songs you love, and discover new music and
                podcasts.
              </li>
            </div>
            <div className="in-logo">
              <li>
                <img src={logo2} alt="" />
              </li>
              <li className="logo-text1">Playlists made easy.</li>
              <li className="logo-text2">
                We'll help you make playlists. Or enjoy playlists made by music
                experts.
              </li>
            </div>

            <div className="in-logo">
              <li>
                <img src={logo3} alt="" />
              </li>
              <li className="logo-text1">Make it yours.</li>
              <li className="logo-text2">
                Tell us what you like, and we'll recommend music for you.
              </li>
            </div>
            <div className="in-logo">
              <li>
                <img src={logo4} alt="" />
              </li>
              <li className="logo-text1">Save mobile data.</li>
              <li className="logo-text2">
                To use less data when you play music, turn on Data Saver in
                Settings.
              </li>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
        <div className="itsFree" style={{backgroundImage:`url(${nextbackground1})`}}>
          It's free <br />
          No credit card required
        </div>
        <div className="gotQues">Got questions?</div>
        <div className="accordion questions" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How do I create a playlist?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Playlists are a great way to save collections of music, either
                for your own listening or to share. <br />
                <br />
                To create one:
                <br />
                1. Tap Your Library.
                <br />
                2. Tap CREATE.
                <br />
                3. Give your playlist a name.
                <br />
                4. Start adding songs (and we'll help you along).
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How do I activate Data Saver mode?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                1. Tap Home.
                <br />
                2. Tap Settings.
                <br />
                3. Tap Data Saver.
                <br />
                4. Switch on Data Saver.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Is it only possible to shuffle play music?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Any playlist with the shuffle icon will play on shuffle.
                <br />
                <br />
                Some playlists won't have the shuffle icon, so you can tap any
                song to play it.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Where can I find Podcasts?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Tap Search. Under Browse All, tap Podcasts.
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="readyPlay" style={{backgroundImage:`url(${nextbackground})`}}>
          <div className="last">
            <div className="ready">Ready? Let’s play.</div>
            <button onClick={toggle} className="get-spotify last-button">
              Get Spotify free
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-full">
          <div>
            <div className="navbar-brand fw-bold" href="#">
              <img
                src={spotifylogo}
                alt="Logo"
                width="40"
                height="40"
                className=" footer-logo-spotify d-inline-block align-text-center "
              />
              &nbsp;Spotify
            </div>
          </div>
          <div className="footerTable">
            <div className="table-in">
              <div className="thead">COMPANY</div>

              <li>
                About <br />
                <br />
                Jobs <br />
                <br />
                For the Record
              </li>
            </div>
            <div className="table-in">
              <div className="thead">COMMUNITIES</div>

              <li>
                For Artists <br />
                <br />
                Developers <br />
                <br />
                Advertising <br />
                <br />
                Investors <br />
                <br />
                Vendors <br />
                <br />
              </li>
            </div>
            <div className="table-in">
              <div className="thead">USEFUL LINKS</div>

              <li>
                Support <br />
                <br />
                Web Player <br />
                <br />
                Free Mobile App
              </li>
            </div>
            <div className="table-in">
              <div className="thead">SPOTIFY PLANS</div>

              <li>
                Premium Individual
                <br />
                <br />
                Premium Duo
                <br />
                <br />
                Premium Family
                <br />
                <br />
                Premium Student <br />
                <br />
                Spotify Free
              </li>
            </div>
          </div>

          <div className="icons">
            <div className="iconin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </div>
            <div className="iconin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </div>
            <div className="iconin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Menu;
