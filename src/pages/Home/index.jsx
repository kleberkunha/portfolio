import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import './style.css';
import './script';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="main-container container">
        <Link to="/Studies">
          <div className="arrow-right">
            <p className="studies-btn">Studies</p>
          </div>
        </Link>
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
                  .typeString("Developer")
                  .start();
                }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cv">
          <div className="logo-cv" onClick={() => window.open("https://drive.google.com/file/d/1M5PgWbjwAVB47f9HIkZqnB4UiDWPEeGY/view?usp=sharing")}></div>
        </div>
        <p className="text-center">Do not hesitate to contact me!</p>
        <p className="email text-center text-primary" onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox")}>E-mail: hello.kleberkunha@gmail.com</p>
        <p className="text-center">Response time : 30min</p>

      </div>

    </>
  );
}
export default Home;