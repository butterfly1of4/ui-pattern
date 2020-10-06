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
var item = document.getElementsByClassName("menuItem")
console.log(item)
// var currentlyOn = ""
// let empty = true

function toggle_visibility(item){
  let id = ''
  switch(id){
    case "OffMercury":
      id = "OffMercury"
      // empty==false
      console.log("mercu")
      break
     
    case "OffVenus":
      id="OffVenus"
      // empty==false
      console.log('venu')
      break
    }
    console.log(id)
    console.log(item)
  // currentlyOn = 
  document.getElementById(item).classList.toggle('visible')

  // console.log(currentlyOn)
  // return currentlyOn, item
}
let onMenu = document.getElementsByClassName("dropdown_content")

item.onclick = function(e){
  if(e.target.matches(".on")){
    var item = document.getElementById(item)
    if(menuItem.classList.contains('visible')){
      menuItem.classList.remove('visible ')
    }
  }
}
// function hide_visibility(item){
//   let id=item
//   empty==false
//   switch(id){
//     case "OffMercury":
//       empty==true
//       break
//     case "OffVenus":
//       empty==true
//       break

//   }    console.log(id)
//   console.log(item)
// // currentlyOn = 
// document.getElementById(item).classList.remove('visible')
// // console.log(currentlyOn)
// // return currentlyOn, item
// }


// onMenu.onclick = function(e) {
//   if (currentlyOn == true){
//     e.target.value.classList.remove("visible")
//     console.log(value)
//   }
//   if(currentlyOn == false){
//     toggle_visibility(item)
//   }
// } 
  

console.log(item)



//if item is clicked on 
// item.onclick = function(e){
//   let canSee = false
//   if(e.target.matches(".planetWrapper_planet")){
//     item.classList.add("visible")
//     canSee==true
//     console.log("seen")
//   } 
    //  if(canSee== true && e.target.matches(".planetWrapper_planet")){
    //   item.classList.remove("visible") && canSee==false
    //   e.target.item.classList.add("visible")
    // console.log("seen2")

    // }
    // if(e.target.matches(".planetWrapper_planet") && canSee==false){
    //   item.classList.adds("visible")
    //   canSee==true
    // console.log("seen3")

    // }

  // if(!e.target.matches(".planetWrapper_planet")){
  //   console.log(item,"hello")
  //   if(item.classList.contains('visible')){
  //     item.classList.remove('visible')
  //     console.log("not")
  //   } console.log('yes')
  // }
//}





// item.onclick = function(e){
//   var planet = document.getElementById(id)
//   if (!e.target.matches('menuItem')){
//     var menuItem = document.getElementById(planet)
//     if (planet.classList.contains("visible")){
//       planet.classList.remove("visible")
//     }
//   }
  

// }










// function toggle_visibility(id) {
// var e = document.getElementById(id)
// if(e.classList.contains('visible')){
//  e.classList.remove('visible')
// } 

// }


// item.onclick = function(e){
//   if (!e.target.matches('item')){
//     var planetWrapper = document.getElementsById('planetWrapper')
//   if (planetWrapper.classList.contains("active")){
//     planetWrapper.classList.remove("active")
//     console.log("here it is")
//   }}
// }




//SWITCH STATEMENT

// function showPicture() {
//   switch(new image().findpic()){

//   case Mercury: {

//     console.log("clicked merc")

//     break;
//   }
//   case Venus: {
//     display = document.getElementsById("Venus")
//     console.log("clicked vensu")

//     break;
//   }
//   case Mars: {
//     display = document.getElementsById("Mars")
//     console.log("clicked mars")

//     break;

//   }
//   case Jupiter: {
//     display = document.getElementsById("Jupiter")
//     console.log("clicked jupiter")

//     break;

//   }
//   case Saturn: {
//     display = document.getElementsById("Saturn")
//     break;

//   }
//   case Uranus: {
//     display = document.getElementsById("Uranus")
//     // break;

//   }
//   case Neptune: {
//     display = document.getElementsById("Neptune")
//     break;

//   }
//   default:
//     display = "Select"
//     break
// }
// }

// showPicture()

//window.onclick = function(event) {
  //   onclick = event.stopPropagation()
  //   event.preventDefault
  //   if (!event.target.matches('.open')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
  



//use this one
//window clicks in this one
// window.onclick = function(e) {
//   if (!e.target.matches('.open')){
//     var dropdownMenu = document.getElementById("dropdownMenu")
//     if (dropdownMenu.classList.contains("show")){
//       dropdownMenu.classList.remove("show")
//     }
//   }
// }



//or this one
// window clicks in this one
// window.onclick = function(e) {
//   if (!e.target.matches('.open')){
//     var dropdownMenu = document.getElementById("dropdownMenu")
//     if (dropdownMenu.classList.contains("show")){
//       dropdownMenu.classList.remove("show")
//     }
//   }
// }
