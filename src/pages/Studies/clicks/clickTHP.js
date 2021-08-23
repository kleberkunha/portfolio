
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
      aboutthp[i].innerHTML = `The Hacking project est une formation intensive de 6 mois qui s'appuie sur l'apprentissage entre peer-learning. Plus de 1200h de formation, avec des exercices par jour, un petit projet évalué par semaine et des projets finaux. 
      De la rédaction de script, du scrapping au déploiement en ligne d'une application web en passant par la conception de base de données, tout les concepts ont été étudiés.
      Ruby, Ruby On rails, Javascript ES6, HTML/CSS, ReactJS, Git / Github, SQL, Programmation Orientée Objet, outils des startups (slack, Trello, Heroku, Github)`;
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