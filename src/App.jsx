import React from "react";
import Menu from "./components/Menu";
import Mains from "./components/Mains";
import { useState } from "react";
import "./components/Menu.css";
import Artists from "./components/Artists";
import Minicomp from "./components/Minicomp";
import Minicompsecond from "./components/Minicompsecond";

export default function App() {

  const [spotify, setspotify] =useState(false);

  const toggles = () => {
    setspotify((prev) => !prev);
    const body = document.querySelector("body");
    body.style.backgroundColor = "black";
    const html = document.querySelector("html");
    html.style.animation = "grow 0.5s";
  };

  return <div>{spotify ? <Mains /> : <Menu toggle={toggles} />}</div>;

}
