
const handleClickThp = () => {
  let aboutthp = document.getElementsByClassName('aboutthp');
  for (let i = 0; i < aboutthp.length; i++){
    if(aboutthp[i].style.width !== "300px"){
      aboutthp[i].style.width ="300px";
      aboutthp[i].style.height ="80px";
      aboutthp[i].style.marginLeft ="-45px";
      aboutthp[i].style.visibility ="visible";
      aboutthp[i].style.position ="absolute";
      aboutthp[i].style.fontSize ="15px";
      aboutthp[i].style.border ="1px solid black";
      aboutthp[i].style.borderRadius="20px";
      aboutthp[i].style.backgroundColor ="black";
      aboutthp[i].style.padding ="15px";
      aboutthp[i].style.marginTop ="-20px";
      aboutthp[i].style.overflow ="scroll";
      aboutthp[i].innerHTML = `The Hacking project is an intensive 6-month training course based on peer-to-peer learning. Over 1200 hours of training, with exercises per day, one small project evaluated per week and final projects. From script writing, scrapping to online deployment of a web application, including database design, all concepts were studied. Ruby, Ruby On rails, Javascript ES6, HTML / CSS, ReactJS, Git / Github, SQL, Object Oriented Programming, startup tools (slack, Trello, Heroku, Github)`;
      break;
    }
    else if (aboutthp[i].style.width === "300px"){
      aboutthp[i].style.width ="0px";
      aboutthp[i].style.height ="0px";
      aboutthp[i].style.visibility ="hidden";
      aboutthp[i].style.overflow ="hidden";
      aboutthp[i].style.transition ="all 0.4s ease-in-out";
      aboutthp[i].style.border ="none";
    }
  }
}

export default handleClickThp;