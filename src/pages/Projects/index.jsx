import React from 'react';
import './project.css';
import './project';

const Projects = () => {

  return (
    <>
      <div className="main-container-project container">
        <div class="container">
          <div class="row top-content-projects">
          <div class="col">
              <div class="card proje-1">
                <div className="mark">HEROKU</div>
                <div className="text-center">
                  <button type="button" className="about-project btn btn-primary"
                    onClick={() => window.open("https://sports-with-me.herokuapp.com/")}>
                    Sports with me
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-2">
                <div className="mark-2">HEROKU</div>
                <div className="text-center">
                  <button type="button" className="about-project btn btn-primary"
                    onClick={() => window.open("https://kittenmarket-staging.herokuapp.com/")}>
                    Kitten Market
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-4">
               <div className="mark-2">GITHUB</div>
                <div className="text-center">
                  <button type="button" className="about-project btn btn-primary"
                    onClick={() => window.open("https://kleberkunha.github.io/Pizza_Site_JS/")}>
                    Pizza
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card proje-3">
                <div className="mark-2">GITHUB</div>
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
          <div class="main-list-group">
            <div class="list-group">
              <button type="button" class="list-group-item list-group-item-action"
                onClick={() => window.open("https://github.com/kleberkunha/Gossip_Project_Pimp")}>
                Gossip Project
              </button>
              <button type="button" class="list-group-item list-group-item-action"
                onClick={() => window.open("https://github.com/kleberkunha/Projecting_client_Site")}>
                Cliente Project
              </button>
              <button type="button" class="list-group-item list-group-item-action"
                onClick={() => window.open("https://github.com/kleberkunha/Project_Doc_template")}>
                Doctor Project
              </button>
              <button type="button" class="list-group-item list-group-item-action"
                onClick={() => window.open("https://github.com/kleberkunha/Starbucks_copy")}>
                Starbucks clone
              </button>
              <button type="button" class="list-group-item list-group-item-action"
                onClick={() => window.open("https://github.com/kleberkunha/Agency_Project")}>
                Day/Night
              </button>
              <button type="button" class="list-group-item list-group-item-action"
                onClick={() => window.open("https://github.com/kleberkunha/Note-Block")}>
                Note-Block
              </button>
              <button type="button" class="list-group-item list-group-item-action"
                onClick={() => window.open("https://github.com/kleberkunha/Vote_eletronic")}>
                Vote machine
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Projects;