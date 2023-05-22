import React from "react";
import Hero from "./Hero";

import Portfolio from "./Portfolio";
import Statistics from "./Statistics";
import "./assets/styles/index.css"
const Home = ()=>{
    return(
        <div className="App" id="app">
        <Hero/>
        <Statistics/>
        <Portfolio/>
      </div>
    )
}

export default Home