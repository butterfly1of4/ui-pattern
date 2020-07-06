# ui-pattern
# Nasa api interactive website. 

Open the index.html file, and start looking at planets! All content comes from the wonderful Astronomy Picture of the Day on the NASA api at:
 [title](https://api.nasa.gov/planetary/apod)

 The project can be found at: [title]https://github.com/butterfly1of4/ui-pattern


 ## The interactive Hamburger menu bar pops out to show the planets in order (except earth):
 -Mercury -Venus -Mars -Jupiter -Saturn -Uranus - Neptune

 All api content was gotten using the 'Fetch'method:

Ex:
 ```
 fetch(mercury)
    .then((res) => {
      return res.json()
```
