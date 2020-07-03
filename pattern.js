//NASA API
const url = "https://api.nasa.gov/planetary/apod?api_key=IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7"
const nasaApiKey = "IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7"
const Api = 


fetch(url, {headers: {"IOPP2e1JpfEP1pCodZ23AiP522NPjqrsXSjdmPv7": nasaApiKey }})
    .then((res) => {
        console.log("i worked", res)
        return res.json();
     })
     .then((json) => {
        json.url
        console.log("json here", json)
     })

