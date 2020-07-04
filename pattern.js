//NASA API
const url =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7";

const nasaApiKey = "IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7";

// const mercuryApiKey = "https://apod.nasa.gov/apod/image/0304/mercurysky_casado_c1.jpg"

const mercury = "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-04-12";
const venus 

/*https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
            need date (yyyy-mm-dd), hd (boolean), api_key string */

fetch(url, {
  headers: { IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7: nasaApiKey },
})
  .then((res) => {
    console.log("i worked", res);
    return res.json();
  })
  .then((json) => {
    json.url;
    console.log("json here", json);
  })

  
fetch(mercury)
   .then((res1)=> {
   return res1.json()})
   .then((json) => {

   })


  .catch(error => console.error(error));

// fetch (mercury) //, {headers: {"https://apod.nasa.gov/apod/image/0304/mercurysky_casado_c1.jpg": mercuryApiKey }}
//   .then((res1) => {
//     console.log("Photo1");
//     return res1.json();
//   })
//   .then((data) => {
//     data.mercury;
//     console.log(data.mercury)
    
//     merc.innerHTML = ""
//     for (var x in data) {
//        console.log(data[x])
//        merc.innerHTML += 'image.src+data[x]'
//        image.appendChild(merc);
//     }
//    //console.log("mercury", json);
//   })
 
