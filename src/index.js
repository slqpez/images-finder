import { emptyFields, clearInputs, calcNumberofPages } from "./helpers.js";
import fetchAPI from "./API.js";
import { showMessage, clear, showImages, createBtnPage } from "./UI.js";

const results = document.querySelector(".results");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const pagination = document.querySelector(".pagination");


let itemsPerPage = 40;
let page =1;



window.onload = async function () {
 
  searchInput.focus();
  const res = await fetchAPI("", page, itemsPerPage);
  showImages(res.hits, results);
  createBtnPage(calcNumberofPages(res.totalHits, itemsPerPage), pagination, changePag);  
}


form.addEventListener("submit", searchImages);




async function changePag(e){
  clear(results);
  clear(pagination);
  const page = e.target.textContent;
  const res = await fetchAPI(searchInput.value, page, itemsPerPage);
  showImages(res.hits, results);
  createBtnPage(calcNumberofPages(res.totalHits, itemsPerPage), pagination, changePag);
}

async function searchImages(e) {
  clear(results);
  clear(pagination);

  e.preventDefault();

  const search = searchInput.value;
  if (emptyFields([searchInput])) {
    showMessage("No ingresaste ningún valor de búsqueda.", "error", results);
    return;
  } else {
    const res = await fetchAPI(search, page, itemsPerPage);
  
    showImages(res.hits, results);

    createBtnPage(calcNumberofPages(res.totalHits, itemsPerPage), pagination, changePag);
  }

  //clearInputs([searchInput]);
  searchInput.focus();
}


