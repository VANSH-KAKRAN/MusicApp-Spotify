import React from "react";
import "./Menu.css";

function Componant0({toggle}) {
  return (
    <div className="component0">
      <div className="phone-text-sec">
        <img className="phone-img" src="src/images/phone.png" alt="" />
        <div className="phone-text">
          <div className="text1">
            Play millions of songs <br /> and podcasts, for free.
          </div>
          <button onClick={toggle} className="get-spotify">Get Spotify Free</button>
        </div>
      </div>
    </div>
  );
}

export default Componant0;
