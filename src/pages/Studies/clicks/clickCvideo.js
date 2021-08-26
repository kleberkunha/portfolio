
const handleClickCvideo = () => {
  let aboutCvideo = document.getElementsByClassName('aboutCvideo');
  for (let i = 0; i < aboutCvideo.length; i++){
    if(aboutCvideo[i].style.width !== "280px"){
      aboutCvideo[i].style.width ="280px";
      aboutCvideo[i].style.height ="80px";
      aboutCvideo[i].style.visibility ="visible";
      aboutCvideo[i].style.position ="absolute";
      aboutCvideo[i].style.fontSize ="15px";
      aboutCvideo[i].style.marginLeft ="-35px";
      aboutCvideo[i].style.border ="1px solid black";
      aboutCvideo[i].style.borderRadius="20px";
      aboutCvideo[i].style.backgroundColor ="black";
      aboutCvideo[i].style.padding ="10px";
      aboutCvideo[i].style.marginTop ="-20px";
      aboutCvideo[i].style.overflow ="scroll";
      aboutCvideo[i].innerHTML = `Cursos em video is a teaching platform with complete video courses on programming.
       It provides certificates. HTML, CSS, Javascript, Object oriented programming.`;
      break;
    }
    else if (aboutCvideo[i].style.width === "280px"){
      aboutCvideo[i].style.width ="0px";
      aboutCvideo[i].style.height ="0px";
      aboutCvideo[i].style.visibility ="hidden";
      aboutCvideo[i].style.overflow ="hidden";
      aboutCvideo[i].style.transition ="all 0.4s ease-in-out";
      aboutCvideo[i].style.border ="none";
    }
  }
}

export default handleClickCvideo;