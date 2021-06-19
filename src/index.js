import {emptyFields, clearInputs} from "./helpers.js"
import fetchAPI from "./API.js"


const results = document.querySelector('.results');
const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')


form.addEventListener('submit', searchLyrics)

async function searchLyrics(e){
  
    e.preventDefault()
    const search = searchInput.value
    if(emptyFields([searchInput])){
       // showMessage()
    }else{
       const res=  await fetchAPI(search)
        res.forEach(image=>{
            const src = image.previewURL
            results.innerHTML += `<img src=${src} />`
        })

       
        
           
    
        
        


    }
    clearInputs([searchInput])
    searchInput.focus()
}