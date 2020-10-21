// const { MenuItem } = require("semantic-ui-react");

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


let on1 = "";
//MERCURY;
let Mercury = document.querySelector("#Mercury");

function setMercury(on1) {
  fetch(mercury)
    .then((res) => {
      return res.json();
    })
    .then((on1) => {
      Mercury.src = on1.url;
      return Mercury;
    });
 return on1, Mercury.src
}
setMercury();


//VENUS
let Venus = document.querySelector("#Venus")

function setVenus(on1) {
  fetch(venus)
  .then((res) => {
    return res.json()
  }).then((on1) => {
    Venus.src = on1.url;
    return Venus;
  });
return on1, Venus
}
setVenus()

//MARS
let Mars = document.querySelector("#Mars")

function setMars(on1) {
  fetch(mars)
  .then((res) => {
    return res.json()
  }).then((on1) => {
    Mars.src = on1.url;
    return Mars;
  });
return on1, Mars
}
setMars()

//JUPITER
let Jupiter = document.querySelector("#Jupiter")

function setJupiter(on1) {
  fetch(jupiter)
  .then((res) => {
    return res.json()
  }).then((on1) => {
    Jupiter.src = on1.url;
    return Jupiter;
  });
return on1, Jupiter
}
setJupiter()
// console.log(Jupiter)

//SATURN
let Saturn = document.querySelector("#Saturn")

function setSaturn(on1) {
  fetch(saturn)
  .then((res) => {
    return res.json()
  }).then((on1) => {
    Saturn.src = on1.url;
    return Saturn;
  });
return on1, Saturn
}
setSaturn()

//URANUS
let Uranus = document.querySelector("#Uranus")

function setUranus(on1) {
  fetch(uranus)
  .then((res) => {
    return res.json()
  }).then((on1) => {
    Uranus.src = on1.url;
    return Uranus;
  });
return on1, Uranus
}
setUranus()

//NEPTUNE
let Neptune = document.querySelector("#Neptune")

function setNeptune(on1) {
  fetch(neptune)
  .then((res) => {
    return res.json()
  }).then((on1) => {
    Neptune.src = on1.url;
    return Neptune;
  });
  console.log(Neptune)
return on1, Neptune
}
setNeptune()
// console.log(Neptune)

//OPEN DROPDOWN

function myFunction() {
  
  document.getElementById("dropdownMenu").classList.toggle("show")
}

//TOGGLE CLICK
//window clicks in this one
window.onclick = function(e) {
  if (!e.target.matches('.open')){
    var dropdownMenu = document.getElementById("dropdownMenu")
    if (dropdownMenu.classList.contains("show")){
      dropdownMenu.classList.remove("show")
    }
  }
}
//SELECT ITEM
var item = document.getElementsByClassName("listItem")
console.log(item)
// console.log(typeof(item))
var i = 0
let id = ''
for (let i = 0; i<item.length; i++ ){
  id = item[i].innerHTML
  console.log(id)
}
console.log(id)


function toggle_visibility() {
    document.getElementById(id).classList.add('visible')
    console.log('visiblity')
}
// toggle_visibility()

window.onclick = function(e){
  if(e.target.id==="id"){
    console.log(item, id, i)
  } 
  }

