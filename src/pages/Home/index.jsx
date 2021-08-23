import React from 'react';
import {CircleProgress} from 'react-gradient-progress'
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgress.css';
import './style.css';
import './script';
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <>
      <div className="main-container container">
        <div className="content-typewriter">
          <div class="container">
            <div class="row">
              <div class="title-name col text-center">
                <Typewriter onInit={(typewriter)=> { 
                  typewriter
                  .typeString("Kleber da Cunha")
                  .start();
                }}
                />
              </div>
            </div>
            <div class="row">
              <div class="title-junior col text-center">
                <Typewriter onInit={(typewriter)=> { 
                  typewriter
                  .pauseFor(2000)
                  .typeString("Junior developer")
                  .start();
                }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;