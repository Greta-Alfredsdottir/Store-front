

//#region Modul code

export default async function products(count){  //Her får vi tal fra script, hvor mange billeder vi får
    return fetch('https://dummyjson.com/products')
  .then(response => response.json()) // Når vi får svar, konverterer vi det til JSON
  .then(data => {
    return data.products;  // her laver vi return i stedet for view, den sender data ud igen
  })
  .catch(error => {
    console.error('Fejl:', error);  // Hvis der opstår fejl, vises den i konsollen
  });
}

export async function getRandom(){
    return fetch (`https://dummyjson.com/products/${Math.floor(Math.random()*194)}`) // den henter tilfældige producter
  .then(response => response.json()) // Når vi får svar, konverterer vi det til JSON
  .then(data => {
    console.log(data);
    
    return data;  // her laver vi return i stedet for view, den sender data ud igen
  })
  .catch(error => {
    console.error('Fejl:', error);  // Hvis der opstår fejl, vises den i konsollen
  });
}

//#endregion