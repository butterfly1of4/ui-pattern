//NASA API
const url =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7";

const nasaApiKey = "IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7";

const mercury =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-04-12";

const venus =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-05-14";

const mars =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=1999-06-05";

const jupiter =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2006-05-05";

const saturn =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-08-17";

const uranus =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=1997-11-26";

const neptune =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2002-09-22";

//API pull requests

let image1 = document.querySelector("img");
let imgMerc = document.querySelector("#merc");
console.log(imgMerc, image1)
fetch(mercury)
  .then((res1) => {
    return res1.json();
  })
  .then((json) => {
    imgMerc = json.url;
    console.log(json.url)
    return imgMerc;
  })
let imgMerc = document.querySelector("#merc");
console.log(imgMerc)



// fetch(mercury)
//   .then((res1) => {
//     return res1.json();
//   })
//   .then((json) => {
//      console.log(json)
//     imgMerc = json.url;
//     console.log(json.url)
//     return imgMerc;
//   })
//   .catch((err) => console.log("error", err));
//console.log(imgMerc);

let image2 = document.querySelector("img");
let imgVenus = document.querySelector("#venus");

fetch(venus)
  .then((res1) => {
    return res1.json();
  })
  .then((json) => {
    imgVenus.src = json.url;
    return imgVenus;
  })
  .catch((err) => console.log("error", err));

let image3 = document.querySelector("img");
let imgMars = document.querySelector("#mars");

fetch(mars)
  .then((res1) => {
    return res1.json();
  })
  .then((json) => {
    imgMars.src = json.url;
    return imgMars;
  })
  .catch((err) => console.log("error", err));

let image4 = document.querySelector("img");
let imgJup = document.querySelector("#jupiter");

fetch(jupiter)
  .then((res1) => {
    return res1.json();
  })
  .then((json) => {
    imgJup.src = json.url;
    return imgJup;
  })
  .catch((err) => console.log("error", err));

let image5 = document.querySelector("img");
let imgSat = document.querySelector("#saturn");

fetch(saturn)
  .then((res1) => {
    return res1.json();
  })
  .then((json) => {
    imgSat.src = json.url;
    return imgSat;
  })
  .catch((err) => console.log("error", err));

let image6 = document.querySelector("img");
let imgUru = document.querySelector("#uranus");

fetch(uranus)
  .then((res1) => {
    return res1.json();
  })
  .then((json) => {
    imgUru.src = json.url;
    return imgUru;
  })
  .catch((err) => console.log("error", err));

let image7 = document.querySelector("img");
let imgNep = document.querySelector("#neptune");

fetch(neptune)
  .then((res1) => {
    return res1.json();
  })
  .then((json) => {
    imgNep.src = json.url;
    return imgNep;
  })
  .catch((err) => console.log("error", err));

//Sidebar movement
let navToggle = document.querySelector("#nav-toggle");

let ul = document.querySelector(".sidenav");
let ulClose = document.querySelector(".close");
// function openClose(e){
//    let count = 0;
//    let x = navToggle;
//    if (x)
// }
navToggle.addEventListener("click", openMenu);

navToggle.addEventListener("click", openMenu);
function openMenu(e) {
  ul.style.width = "15em";
}
navToggle.addEventListener("click", closeMenu);

function closeMenu(e) {
  ulClose.style.width = "0";
}

//Picture pop-up
//let liMerc = document.querySelector(".closeMerc")
// liMerc.innerHTML = imgMerc
//console.log(imgMerc)

// liMerc.addEventListener("click",function(e){
//    let mercury = document.querySelector("#mercury")
//    if (mercury.style.display == "none") {
//       mercury.style.display = "block";
//    } else {
//       mercury.style.display = "none";
//    }

// })


// //let imgMerc = ''
// fetch(mercury)
//   .then((res1) => {
//     return res1.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     let mercuryImage;
//     mercuryImage = data.url; //.innerText? or html
//     findSrc(data);
//     findSrc(mercuryImage);
//   });
// //   .catch((err) => console.log("error", err));
// //console.log(imgMerc);
// let imgMerc = ""
// function findSrc(mercuryImage) {
//    document.querySelector("#merc").innerHTML = mercuryImage.innerHTML
//    let imgMarc =  document.querySelector("#merc")
//    console.log(mercuryImage)
//    imgMerc.src = mercuryImage.innerHTML
//    console.log(imgMerc, imgMerc.src)
//    return imgMerc
// }
// console.log(imgMerc.src)