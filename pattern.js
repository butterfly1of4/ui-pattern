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
let showPic = document.querySelectorAll(".onOff")
   

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

let clickMerc = document.querySelector("#closeMerc");
clickMerc.addEventListener("click", function (e) {
   imgMerc.classList.remove("onOff")
  console.log("I'm mercury");
});

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
   imgVenus.classList.remove("onOff")
  console.log("I'm venus");
});

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


//


// function onOff(planet) {
//    let e;
//    if (e.style.display == "block") e.styl.dipslay = "none";
//    else e.style.display = "block";
//  }
//  onOff(imgMerc);
 
//  let picture = document.querySelector(".picture");
//  picture.innerText = "THE PLANET"
//SIDEBAR MOVEMENT
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
