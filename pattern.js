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
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=1997-11-26";

const neptune =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2002-09-22";

//API pull requests
//MERCURY
let imgMerc = document.querySelector("#merc");
let on1 = "";

// function clickMercury(on1) {
//   fetch(mercury)
//     .then((res) => {
//       return res.json();
//     })
//     .then((on1) => {
//       console.log(on1.url);
//       imgMerc.src = on1.url;
//       console.log(imgMerc);
//       return imgMerc;
//     });
//   //  if (id = 'imgMerc')[
//   //     onOff(imgMerc)
//   //  ]
// }
// clickMercury();
// console.log(on1);

// function onOff(imgMerc) {
//   let e = imgMerc;
//   if (e.style.display == "block") e.styl.dipslay = "none";
//   else e.style.display = "block";
// }
// onOff(imgMerc);

// let clickMerc = document.querySelector("#closeMerc");
// clickMerc.addEventListener("click", function(e){
//    console.log("I'm mercury")
// });

//VENUS
let imgVenus = document.querySelector("#venus")

// function clickVenus(on1) {
//    fetch(venus)
//      .then((res) => {
//        return res.json();
//      })
//      .then((on1) => {
//        console.log(on1.url);
//        imgVenus.src = on1.url;
//        console.log(imgVenus);
//        return imgVenus;
//      });
//    }
//    clickVenus()
//
//    imgVenus.addEventListener("click", function(e){
//       console.log("I'm venus")
//    })

let picture = document.querySelector(".picture")

   function clearPicture(picture){
      picture.innerHTML = "";
   }
// imgMerc.addEventListener("click", clearPicture)
// imgVenus.addEventListener("click", clearPicture)



   // var div = document.getElementById('cart_item');
   // while(div.firstChild){
   //     div.removeChild(div.firstChild);
   // }

   let imgMars = document.querySelector("#mars")

   function clickMars(on1) {
      fetch(mars)
        .then((res) => {
          return res.json();
        })
        .then((on1) => {
          console.log(on1.url);
          imgMars.src = on1.url;
          console.log(imgMars);
          return imgMars;
        });
      }
      clickMars()
   
      imgMars.addEventListener("click", function(e){
         console.log("I'm mars")
      })
   












// let image3 = document.querySelector("img");
// let imgMars = document.querySelector("#mars");

// fetch(mars)
//   .then((res1) => {
//     return res1.json();
//   })
//   .then((json) => {
//     imgMars.src = json.url;
//     return imgMars;
//   })
//   .catch((err) => console.log("error", err));

// let image4 = document.querySelector("img");
// let imgJup = document.querySelector("#jupiter");

// fetch(jupiter)
//   .then((res1) => {
//     return res1.json();
//   })
//   .then((json) => {
//     imgJup.src = json.url;
//     return imgJup;
//   })
//   .catch((err) => console.log("error", err));

// let image5 = document.querySelector("img");
// let imgSat = document.querySelector("#saturn");

// fetch(saturn)
//   .then((res1) => {
//     return res1.json();
//   })
//   .then((json) => {
//     imgSat.src = json.url;
//     return imgSat;
//   })
//   .catch((err) => console.log("error", err));

// let image6 = document.querySelector("img");
// let imgUru = document.querySelector("#uranus");

// fetch(uranus)
//   .then((res1) => {
//     return res1.json();
//   })
//   .then((json) => {
//     imgUru.src = json.url;
//     return imgUru;
//   })
//   .catch((err) => console.log("error", err));

// let image7 = document.querySelector("img");
// let imgNep = document.querySelector("#neptune");

// fetch(neptune)
//   .then((res1) => {
//     return res1.json();
//   })
//   .then((json) => {
//     imgNep.src = json.url;
//     return imgNep;
//   })
//   .catch((err) => console.log("error", err));

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
