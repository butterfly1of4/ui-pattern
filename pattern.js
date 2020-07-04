//NASA API
const url =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7";

const nasaApiKey = "IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7";
const mercury =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-04-12";

const venus =
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-05-14";


  const mars = "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=1999-06-05"

  const jupiter = "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2006-05-05"

  const saturn = "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-08-17"

  const uranus = "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=1997-11-26"

  const neptune = "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2002-09-22"


 

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
  });

fetch(mercury)
  .then((res1) => {
    return res1.json();
  })
  .then((json) => {
    json.mercury;
    console.log("mercury", json);
  })

  .catch((error) => console.error(error));

// mercuryImageAddress = "https://apod.nasa.gov/apod/image/0304/mercurysky_casado_c1.jpg"
// venusImageAddress = "https://apod.nasa.gov/apod/image/0305/northvenus_magellan.jpg"
// marsImageAddress = "https://apod.nasa.gov/apod/image/9907/mars4_hst.jpg"
//jupiterImageAddress = "https://apod.nasa.gov/apod/image/0605/redspot2_hst_c68.jpg"
//saturnImageAddress = "https://apod.nasa.gov/apod/image/0308/saturn_herhst.jpg"
// uranusImageAddress = "https://apod.nasa.gov/apod/image/9711/uranusleft_nic_big.jpg"
// neptuneImageAddress = "https://apod.nasa.gov/apod/image/0209/neptuneclouds_vg2.jpg"

/*https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
            need date (yyyy-mm-dd), hd (boolean), api_key string 
  "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7&date=2003-04-12";
            */
