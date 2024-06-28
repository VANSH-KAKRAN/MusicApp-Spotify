import React from "react";
import "./Menu.css";

export default function Component3() {
  return (
    <div>
      <div className="itsFree">
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
              Playlists are a great way to save collections of music, either for
              your own listening or to share. <br />
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
      <div className="readyPlay">
        <div className="last">
          <div className="ready">Ready? Let’s play.</div>
          <button className="get-spotify last-button">Get Spotify free</button>
        </div>
      </div>
   
    </div>
  );
}
