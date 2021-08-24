import React from 'react';
import './style.css';
import handleClick42 from './clicks/click42';
import handleClickB7web from './clicks/clickB7';
import handleClickCvideo from './clicks/clickCvideo';
import handleClickThp from './clicks/clickTHP';
import go42 from './clicks/go42';
import gothp from './clicks/gothp';
import gob7 from './clicks/gob7';
import govideo from './clicks/govideo';
const Studies = () => {
  return (
    <>
      <div className="main-container-studies container">
        <div className="container">
          <div className="row">
            <div className="col-sm text-center">
              <div className="box-items-studies container">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="img-42 rounded-circle " onClick={go42}></div>
                    </div>
                    <button onClick={handleClick42} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="about42 about-text text-center"></div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="box-items-studies container">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="img-thp rounded-circle" onClick={gothp}></div>
                    </div>
                    <button onClick={handleClickThp} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="aboutthp about-text text-center"></div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="box-items-studies container">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="sub-main-icob7 d-flex justify-content-center bg-dark">
                      <div className="img-b7-web rounded-circle" onClick={gob7}></div>
                    </div>
                    <button onClick={handleClickB7web} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="aboutB7web about-text text-center"></div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="box-items-studies container">
                <div className="boxes-school-infos ">
                  <div className="main-box-ico42 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="img-curso-em-video rounded-circle" onClick={govideo}></div>
                    </div>
                    <button onClick={handleClickCvideo} className="about btn btn-primary mt-2">About</button>
                  </div>
                  <div className="aboutCvideo about-text text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-languages-explanation pt-3">
          <div>
            <div className="row top-icos-code-languages">
              <ul className="d-flex">
                <li className="html"></li>
                <li className="css"></li>
                <li className="bootstrap"></li>
                <li className="js"></li>
                <li className="git"></li>
                <li className="reactjs"></li>
                <li className="ruby"></li>
                <li className="rails"></li>
                <li className="postman"></li>
              </ul>
            </div>
          </div>
          <div class="container">
            <div class="row ">
              <div class="col d-flex justify-content-center">
                <div className="languages-web">
                  <div className="title-languagesborder w-100 pb-2">
                    <div className="pt-5">
                      <h5>HTML/CSS</h5>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                          aria-valuemin="0" aria-valuemax="100">
                          70%
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5>REACTJS</h5>
                      <div class="progress">
                        <div class="progress-bar reactjs-txt" role="progressbar" aria-valuenow="40"
                          aria-valuemin="0" aria-valuemax="100">
                          40%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row ">
              <div class="col d-flex justify-content-center">
                <div className="framework-web">
                  <div className="title-languagesborder w-100">
                    <div className="pt-5">
                      <h5>Bootstrap</h5>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                          aria-valuemin="0" aria-valuemax="100">
                          70%
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5>Ruby/Rails</h5>
                      <div class="progress">
                        <div class="progress-bar ruby-txt" role="progressbar" aria-valuenow="50"
                          aria-valuemin="0" aria-valuemax="100">
                          50%
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5>JAVASCRIPT</h5>
                      <div class="progress">
                        <div class="progress-bar javascript-txt" role="progressbar" aria-valuenow="30"
                          aria-valuemin="0" aria-valuemax="100">
                          40%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="d-flex justify-content-center">
            <h3 className="comp-text text-center">.</h3>
          </div>
          <div className="row competances d-flex">
            <div className="left-comp">

              <div class="container">
                <div class="row">
                  <div class="col">
                    <div className="content-text">
                      <h3 className="text-center">Tools and OS</h3>
                      <ul>
                        <li className="item txt-1">Sharing project with Git and GitHub</li>
                        <li className="item txt-2">Windows and Linux environments</li>
                        <li className="item txt-3">Creation of Media Queries to manage website responsiveness</li>
                        <li className="item txt-4">Utilization of photoshop to integrate or create contents</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col">
                    <div className="content-text">
                      <h3 className="text-center">PC skills</h3>
                      <ul>
                        <li className="item txt-1">Format and Reinstall - Windows / Ubuntu</li>
                        <li className="item txt-2">Data Recovery  - Hard DIsk / Pendriver / SD card</li>
                        <li className="item txt-3">Broken/Rapair - All parts</li>
                        <li className="item txt-4">Network cable crimp - RJ45 A/B</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="container mt-3">
                      <div class="row text-center">
                        <div class="col">
                          <ul className="list-hobies d-flex mb-5">
                            <li>
                              <div className="text-center pt-3">
                                <h6>Code</h6>
                                <img src="https://img.icons8.com/color-glass/48/000000/code.png" width="40px" alt="Code"/>
                              </div>
                            </li>
                            <li>
                              <div className="text-center pt-3">
                                <h6>Game</h6>
                                <img src="https://img.icons8.com/color/48/000000/keyboard.png" width="40px" alt="Game"/>
                              </div>
                            </li>
                            <li>
                              <div className="text-center pt-3">
                                <h6>Skateboard</h6>
                                <img src="https://img.icons8.com/emoji/48/000000/skateboard-emoji.png" width="40px" alt="Skateboard"/>
                              </div>
                            </li>
                            <li>
                              <div className="text-center pt-3">
                                <h6>Music</h6>
                                <img src="https://img.icons8.com/dusk/64/000000/rock-music.png" width="40px" alt="Music"/>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Studies;