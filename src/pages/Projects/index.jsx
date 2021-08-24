import React from 'react';
import './project.css';

const Projects = () => {

  return (
    <>
      <div className="main-container-project container">
        <div class="container">
          <div class="row top-content-projects">
          <div class="col">
              <div class="card proje-1 mt-3">
                  <div className="mark">HEROKU-on</div>
                  <div className="text-center">
                    <button type="button" class="about-project btn btn-primary"
                    onClick={() => window.open("https://sports-with-me.herokuapp.com/")}>
                    Sports with me
                  </button>
                  </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-gossip mt-3">
               <div className="mark-2">GITHUB-off</div>
                <div className="text-center">
                  <button type="button" className="about-project btn btn-primary"
                    onClick={() => window.open("https://github.com/kleberkunha/Gossip_Project_Pimp")}>
                    Gossip project
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-4 mt-3">
               <div className="mark-2">GITHUB-on</div>
                <div className="text-center">
                  <button type="button" className="about-project btn btn-primary"
                    onClick={() => window.open("https://kleberkunha.github.io/Pizza_Site_JS/")}>
                    Pizza
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-3 mt-3">
                <div className="mark-2">GITHUB-off</div>
                <div className="text-center">
                  <button type="button" className="about-project btn btn-primary"
                    onClick={() => window.open("https://github.com/kleberkunha/Movie_List-info_Project")}>
                    Movie Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row ">
            <div class="col icon-content d-flex justify-content-center">
              <div className="github-ico"></div>
            </div>
          </div>
        </div>
        <p className="other-project text-center mt-3">Other projects</p>
        <hr/>
        <div class="container">
          <div class="row top-content-projects">
            <div class="col">
              <div class="card proje-kitten my-3">
                <div className="mark">HEROKU-on</div>
                <div className="text-center">
                  <button type="button" className="about-project btn btn-primary"
                    onClick={() => window.open("https://kittenmarket-staging.herokuapp.com/")}>
                    Kitten Market
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-noteblock my-3">
                <div className="mark-2">GITHUB-off</div>
                <div className="text-center">
                  <button type="button" className="about-project btn btn-primary"
                    onClick={() => window.open("https://github.com/kleberkunha/Note-Block")}>
                    Note block
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-vote mt-3">
                <div className="mark-2">GITHUB-off</div>
                <div className="text-center">
                  <button type="button" class="about-project btn btn-primary"
                    onClick={() => window.open("https://github.com/kleberkunha/Vote_eletronic")}>
                    Vote machine
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-day-night mt-3">
                <div className="mark-2">GITHUB-off</div>
                <div className="text-center">
                  <button type="button" class="about-project btn btn-primary"
                    onClick={() => window.open("https://github.com/kleberkunha/Agency_Project")}>
                    Day/Night
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row top-content-projects">
            <div class="col">
              <div class="card proje-doc mt-3">
                <div className="mark-2">GITHUB-off</div>
                <div className="text-center">
                  <button type="button" class="about-project btn btn-primary"
                    onClick={() => window.open("https://github.com/kleberkunha/Project_Doc_template")}>
                    Doctor Project
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-starbucks mt-3">
                <div className="mark-2">GITHUB-off</div>
                <div className="text-center">
                  <button type="button" class="about-project btn btn-primary"
                    onClick={() => window.open("https://github.com/kleberkunha/Starbucks_copy")}>
                    Starbucks clone
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </>
    
  );
}

export default Projects;