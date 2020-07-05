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

let image1 = document.querySelector("img");
let imgMerc = document.querySelector("#merc");

fetch(mercury)
  .then((res1) => {
    return res1.json();
  })
  .then((json) => {
    imgMerc.src = json.url;
    return imgMerc;
  })
  .catch((err) => console.log("error", err));
console.log(imgMerc, image1);

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
  
