
// her er vores main javascript
// Her skal vi sammle sammen alle vores moduler


import products from "./module/modul.js"
import { getRandom } from "./module/modul.js"
// Importerer funktionen getDogImages fra din api.js modulfil.


products(3) 
.then((data)=>{
  //view(data)
  })
  makeFeatures()
// Kalder products med tallet 3 (henter 3 billeder).
// Når billederne er hentet, kaldes view-funktionen med dataen.
function makeFeatures() {
    let i = 0
    const output = document.getElementById('output');
    while(i !=3){
        const data = getRandom()
        console.log (data)
        output.innerHTML += `
        <div class="img-container">
          <img src="${data.thumbnail}" alt="image">
          <div class="img-text">${data.title}</div> 
        </div>
        `;
        i ++  // lægger to til, derfor ++
    }
}
function view(data) {
     console.log(data)
  const output = document.getElementById('output');
  output.innerHTML = data
    .map((url, i) => {
        // Finder HTML-elementet med id 'output'.


        // her kalder vi efter navn på breed
    return `
        <div class="img-container">
          <img src="${url.thumbnail}" alt="image">
          <div class="img-text">${url.title}</div> 
        </div>
        `;
       // Returnerer HTML for hvert billede og race-navn.
    })
    .join('');
     // Samler alle HTML-strenge til én stor streng og indsætter i output-elementet.
}