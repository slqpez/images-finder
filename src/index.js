import { emptyFields, clearInputs } from "./helpers.js";
import fetchAPI from "./API.js";
import { showMessage, clear, showImages } from "./UI.js";

const results = document.querySelector(".results");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");

window.onload = async function () {
  searchInput.focus();
  const res = await fetchAPI();
  showImages(res, results);
};

form.addEventListener("submit", searchImages);

async function searchImages(e) {
  clear(results);

  e.preventDefault();
  const search = searchInput.value;
  if (emptyFields([searchInput])) {
    showMessage("No ingresaste ningún valor de búsqueda.", "error", results);
  } else {
    const res = await fetchAPI(search);
    showImages(res, results);
  }

  clearInputs([searchInput]);
  searchInput.focus();
}
