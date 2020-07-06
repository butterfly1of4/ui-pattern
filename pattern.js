console.log("still here")
//NASA API
const url =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7";

const nasaApiKey = "IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7";

const mercury =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-04-12";

const venus =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-05-14";

const mars =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=1999-07-05";

const jupiter =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2006-05-05";

const saturn =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-08-17";

const uranus =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=1996-04-30";

const neptune =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2002-09-22";

//API pull requests
let showPic = document.querySelectorAll(".onOff");
// function addHide(planet){
//    planet.classList.remove("onOff")
// }

//MERCURY;
let imgMerc = document.querySelector("#merc");
let on1 = "";

function clickMercury(on1) {
  fetch(mercury)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      console.log(on1.url);
      imgMerc.src = on1.url;
      console.log(imgMerc);
      return imgMerc;
    });
}
clickMercury();
console.log(on1);

//   clickMerc.addEventListener("click", newPlanet)
//   console.log("I'm mercury");

//VENUS
let imgVenus = document.querySelector("#venus");

function clickVenus(on1) {
  fetch(venus)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      console.log(on1.url);
      imgVenus.src = on1.url;
      console.log(imgVenus);
      return imgVenus;
    });
}
clickVenus();

closeVenus.addEventListener("click", function (e) {
  console.log("I'm venus");
});

function clickNav(e) {}
// //MARS
// let imgMars = document.querySelector("#mars");
// function clickMars(on1) {
//   fetch(mars)
//     .then((res) => {
//       return res.json();
//     })
//     .then((on1) => {
//       console.log(on1.url);
//       imgMars.src = on1.url;
//       console.log(imgMars);
//       return imgMars;
//     });
// }
// clickMars();

// closeMars.addEventListener("click", function (e) {
//imgMars.classList.remove("onOff")
//console.log("I'm mars");
// });
// //JUPITER
// let imgJupiter = document.querySelector("#jupiter");

// function clickJupiter(on1) {
//   fetch(jupiter)
//     .then((res) => {
//       return res.json();
//     })
//     .then((on1) => {
//       console.log(on1.url);
//       imgJupiter.src = on1.url;
//       console.log(imgJupiter);
//       return imgJupiter;
//     });
// }
// clickJupiter();

// closeJupiter.addEventListener("click", function (e) {
//imgJupiter.classList.remove("onOff")
//console.log("I'm jupiter");
// });

// //SATURN
// let imgSaturn = document.querySelector("#saturn");

// function clickSaturn(on1) {
//   fetch(saturn)
//     .then((res) => {
//       return res.json();
//     })
//     .then((on1) => {
//       console.log(on1.url);
//       imgSaturn.src = on1.url;
//       console.log(imgSaturn);
//       return imgSaturn;
//     });
// }
// clickSaturn();

// closeSaturn.addEventListener("click", function (e) {
//imgSaturn.classList.remove("onOff")
//console.log("I'm saturn");
// });

// //URANUS
// let imgUranus = document.querySelector("#uranus");

// function clickUranus(on1) {
//   fetch(uranus)
//     .then((res) => {
//       return res.json();
//     })
//     .then((on1) => {
//       console.log(on1.url);
//       imgUranus.src = on1.url;
//       console.log(imgUranus);
//       return imgUranus;
//     });
// }
// clickUranus();

// closeUranus.addEventListener("click", function (e) {
//imgUranus.classList.remove("onOff")
//console.log("I'm uranus");
// });

// //NEPTUNE
// let imgNep = document.querySelector("#neptune");

// function clickNep(on1) {
//   fetch(neptune)
//     .then((res) => {
//       return res.json();
//     })
//     .then((on1) => {
//       console.log(on1.url);
//       imgNep.src = on1.url;
//       console.log(imgNep);
//       return imgNep;
//     });
// }
// clickNep();

// closeNeptune.addEventListener("click", function (e) {
//imgNep.classList.remove("onOff")
//console.log("I'm neptune");
// });

let sideBar = document.querySelector("#nav-toggle");

sideBar.addEventListener("click", openSidebar) 
function openSidebar(e){
  document.querySelector(".open").style.width = "250px";
};

let centerPic = document.querySelector(".picture")


//centerPic.addEventListener("click", closePic)
function closePic(e){
   if (centerPic.style.display === "none") {
            centerPic.style.display = "block"
         } else {
            centerPic.style.display = "none"
         }console.log("pic gone")
}

sideBar.addEventListener("mouseout", function(e){
         document.querySelector(".close")
     .style.width = 0})
 

let clickMerc = document.querySelector("#closeMerc");

clickMerc.addEventListener("click", seeMerc)

clickMerc,addEventListener("mouseover", closePic)

function seeMerc(e){
   imgMerc.classList.remove("onOff") 
   console.log("yaypic") 
}

  //    planet.classList.remove("onOff")
  //    sideBar.removeEventListener("click", function(e){
  //       document.querySelector(".close")
  //   .style.width = 0})

