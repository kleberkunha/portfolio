
const handleClick42 = () => {
  let about42 = document.getElementsByClassName('about42');
  for (let i = 0; i < about42.length; i++){
  if(about42[i].style.width !== "250px"){
      about42[i].style.width ="250px";
      about42[i].style.height ="80px";
      about42[i].style.visibility ="visible";
      about42[i].style.position ="absolute";
      about42[i].style.marginLeft ="-25px";
      about42[i].style.fontSize ="15px";
      about42[i].style.border ="1px solid black";
      about42[i].style.borderRadius="20px";
      about42[i].style.backgroundColor ="black";
      about42[i].style.padding ="10px";
      about42[i].style.marginTop ="-20px";
      about42[i].style.overflow ="scroll";
      about42[i].innerHTML = "School 42 is based on peer-to-peer learning: no lessons, no teachers. For a month, I took part in the swimming pool test: an intense period of 4 weeks where we do group projects, individual projects and exams. Shell language, programming in C, the basics of the algorithm.";
      break;
    }
    else if (about42[i].style.width === "250px"){
      about42[i].style.width ="0px";
      about42[i].style.height ="0px";
      about42[i].style.visibility ="hidden";
      about42[i].style.overflow ="hidden";
      about42[i].style.transition ="all 0.4s ease-in-out";
      about42[i].style.border ="none";
    }
  }
}
export default handleClick42;
