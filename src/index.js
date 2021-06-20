import { emptyFields, clearInputs } from "./helpers.js";
import fetchAPI from "./API.js";
import { showMessage, clear } from "./UI.js";

const results = document.querySelector(".results");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");

form.addEventListener("submit", searchImages);

async function searchImages(e) {
  clear(results);

  e.preventDefault();
  const search = searchInput.value;
  if (emptyFields([searchInput])) {
    showMessage("No ingresaste ningún valor de búsqueda.", "error", results);
  } else {
    const res = await fetchAPI(search);
    console.log(res)
    if(res.length > 0){
        res.forEach((image) => {
            const src = image.previewURL;
            results.innerHTML += `
            <div class = "card">
            <img src=${src} />
            <p><b>${image.likes}</b> <span>Likes</span></p>
            <a class="btn-open" href="${image.largeImageURL}" target="_blank">Abrir imagen</a>
            </div>
            `;
            
          });
        } else{
            showMessage("No se encontraron resultados para tu búsqueda. 😏", "not-found", results)
        }
    }
  

  clearInputs([searchInput]);
  searchInput.focus();
}
