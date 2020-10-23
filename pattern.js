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

// add event listener to each list item 
// get value of each list item
// match element with list item
// toggle the img 


var items = document.getElementsByClassName("listItem")
console.log(items)
var pics = document.getElementsByClassName("menuItem")
console.log(pics)
var seeme = document.getElementsByTagName("img")
console.log(seeme)
function clickFunction() {
  
  }
  for (let i = 0; i<items.length; i++ ){
    items[i].addEventListener('click', clickFunction)
    
      console.log("worked ")
      console.log(items)
      console.log(pics)
      console.log(pics[i])
      console.log(seeme[i])
      console.log(seeme[i].value)
      console.log(items[i].value)
  }

clickFunction()
// }
// function  getValue() {
//   for (let i = 0; i<item.length; i++ ){

//   }
// }
//SELECT ITEM
// var item = document.getElementsByClassName("listItem")
// console.log(item)
// // console.log(typeof(item))
// var i  
// let id = ''
// for (let i = 0; i<item.length; i++ ){
//   id = item[i].innerHTML
//   console.log(id) 
  
// }
// console.log(id)
// console.log(i)





// function toggle_visibility() {
    // document.getElementById(id).classList.add('visible')
    // console.log('visiblity')
// }
// toggle_visibility()

// window.onclick = function(e){
//   if(e.target.id==="id"){
//     console.log(item, id, i)
//   } 
//   }


//Try #1-w3 js slideshow
// var picIndex = 1

// // change slideview
// function changePic(n) {
// toggle_visibility(picIndex)
// console.log("change")
// }

// //next pic
// function seePic(n){
//   toggle_visibility(picIndex +=n)
//   console.log('visible')
// }

// // current slide
// function currentPic(n) {
//   toggle_visibility(picIndex=n)
//   console.lob("current")
// }

// // change slide
// function toggle_visibility(n){
// var i 
// var slides = document.getElementsByClassName("menuItem")
// var listClick = document.getElementsByClassName("listItem")
// if (n > slides.length) {picIndex=1}
// if (n < 1){picIndex=slides.length}
// for (i = 0; i < slides.length; i++){
//     slides[i].style.display = "none"
// }
// for ( i = 0; i < listClick.length; i ++) {
//   listClick[i].className += "active"
// }
// slides[picIndex-1].style.display="block"
// listClick = listClick[picIndex-1].classList.add("active")
// // listClick[picIndex-1].className += "active"
// }
// console.log(picIndex)
// console.log(slides)
// console.log(listClick)




// }
