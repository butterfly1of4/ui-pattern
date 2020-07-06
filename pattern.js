console.log("still here");
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

//MERCURY;
let imgMerc = document.querySelector("#merc");
let on1 = "";

function clickMercury(on1) {
  fetch(mercury)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      imgMerc.src = on1.url;
      return imgMerc;
    });
}
clickMercury();

//VENUS
let imgVenus = document.querySelector("#venus");

function clickVenus(on1) {
  fetch(venus)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      imgVenus.src = on1.url;
      return imgVenus;
    });
}
clickVenus();

//MARS
let imgMars = document.querySelector("#mars");
function clickMars(on1) {
  fetch(mars)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      imgMars.src = on1.url;
      return imgMars;
    });
}
clickMars();

// //JUPITER
let imgJupiter = document.querySelector("#jupiter");

function clickJupiter(on1) {
  fetch(jupiter)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      imgJupiter.src = on1.url;
      return imgJupiter;
    });
}
clickJupiter();

// //SATURN
let imgSaturn = document.querySelector("#saturn");

function clickSaturn(on1) {
  fetch(saturn)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      imgSaturn.src = on1.url;
      return imgSaturn;
    });
}
clickSaturn();

// //URANUS
let imgUranus = document.querySelector("#uranus");

function clickUranus(on1) {
  fetch(uranus)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      imgUranus.src = on1.url;
      return imgUranus;
    });
}
clickUranus();


// //NEPTUNE
let imgNep = document.querySelector("#neptune");

function clickNep(on1) {
  fetch(neptune)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      imgNep.src = on1.url;
      return imgNep;
    });
}
clickNep();


//OPEN SIDEBAR
let sideBar = document.querySelector("#nav-toggle");

sideBar.addEventListener("click", openSidebar);
function openSidebar(e) {
  document.querySelector(".open").style.width = "250px";
}

//REMOVE CENTER PLACEHOLDER
let centerPic = document.querySelector(".picture");
function closePic(e) {
  if (centerPic.style.display === "none") {
    centerPic.style.display = "block";
  } else {
    centerPic.style.display = "none";
  }
  console.log("pic gone");
}

//CLOSE SIDEBAR
//sideBar.addEventListener("mouseout", closeSidebar)
function closeSidebar(e) {
  document.querySelector(".close").style.width = "0";
  console.log("nav gone");
}

//OPEN MERCURY PICTURE
let onMerc = document.querySelector("#closeMerc");
onMerc.addEventListener("mouseout", closeSidebar);
onMerc.addEventListener("click", seeMerc);
onMerc.addEventListener("click", closePic);

function seeMerc(e) {
  imgMerc.classList.remove("onOff");
  console.log("yaypic");
}

// OPEN VENUS PICTURE
let onVenus = document.querySelector("#closeVenus");
function seeVenus(e) {
  imgVenus.classList.remove("onOff");
}
onVenus.addEventListener("mouseout", closeSidebar);
onVenus.addEventListener("click", seeVenus);
onVenus.addEventListener("click", closePic);

//OPEN MARS PICTURE
let onMars = document.querySelector("#closeMars");
function seeMars(e) {
  imgMars.classList.remove("onOff");
}
onMars.addEventListener("mouseout", closeSidebar);
onMars.addEventListener("click", seeMars);
onMars.addEventListener("click", closePic);

//OPEN JUPITER PICTURE
let onJupiter = document.querySelector("#closeJupiter");
function seeJupiter(e) {
  imgJupiter.classList.remove("onOff");
}
onJupiter.addEventListener("mouseout", closeSidebar);
onJupiter.addEventListener("click", seeJupiter);
onJupiter.addEventListener("click", closePic);

//OPEN SATURN PICTURE
let onSaturn = document.querySelector("#closeSaturn");
function seeSaturn(e) {
  imgSaturn.classList.remove("onOff");
}
onSaturn.addEventListener("mouseout", closeSidebar);
onSaturn.addEventListener("click", seeSaturn);
onSaturn.addEventListener("click", closePic);

//OPEN URANUS PICTURE
let onUranus = document.querySelector("#closeUranus");
function seeUranus(e) {
  imgUranus.classList.remove("onOff");
}
onUranus.addEventListener("mouseout", closeSidebar);
onUranus.addEventListener("click", seeUranus);
onUranus.addEventListener("click", closePic);

//OPEN NEPTUNE PICTURE
let onNeptune = document.querySelector("#closeNeptune");
function seeNeptune(e) {
  imgNep.classList.remove("onOff");
}
onNeptune.addEventListener("mouseout", closeSidebar);
onNeptune.addEventListener("click", seeNeptune);
onNeptune.addEventListener("click", closePic);
