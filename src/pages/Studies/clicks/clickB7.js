
const handleClickB7web = () => {
  let aboutB7web = document.getElementsByClassName('aboutB7web');
  for (let i = 0; i < aboutB7web.length; i++){
    if(aboutB7web[i].style.width !== "300px"){
      aboutB7web[i].style.width ="300px";
      aboutB7web[i].style.height ="80px";
      aboutB7web[i].style.visibility ="visible";
      aboutB7web[i].style.position ="absolute";
      aboutB7web[i].style.fontSize ="15px";
      aboutB7web[i].style.marginLeft ="-45px";
      aboutB7web[i].style.border ="1px solid black";
      aboutB7web[i].style.borderRadius="20px";
      aboutB7web[i].style.backgroundColor ="black";
      aboutB7web[i].style.padding ="10px";
      aboutB7web[i].style.marginTop ="-20px";
      aboutB7web[i].style.overflow ="scroll";
      aboutB7web[i].innerHTML = `B7web is online courses on FullStack programming. It provides certificates.`;
      break;
    }
    else if (aboutB7web[i].style.width === "300px"){
      aboutB7web[i].style.width ="0px";
      aboutB7web[i].style.height ="0px";
      aboutB7web[i].style.visibility ="hidden";
      aboutB7web[i].style.overflow ="hidden";
      aboutB7web[i].style.transition ="all 0.4s ease-in-out";
      aboutB7web[i].style.border ="none";
    }
  }
}
export default handleClickB7web;