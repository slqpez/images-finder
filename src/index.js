import {emptyFields, clearInputs} from "./helpers.js"
import fetchAPI from "./API.js"


const results = document.querySelector('.results');
const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')


form.addEventListener('submit', searchLyrics)

function searchLyrics(e){
    e.preventDefault()
    const search = searchInput.value
    if(emptyFields([searchInput])){
       // showMessage()
    }else{
        //fetchAPI()
        console.log('Buscando')
    }
    clearInputs([searchInput])
    searchInput.focus()
}