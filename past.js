import {crearcard, crearCardPasada, eventFilter, filterSearch } from "./function.js"

let lista = document.getElementById("carta-container")
let search = document.getElementById('search')
let checkboxFilter = document.querySelector('.form-container')
//const datos = './amazing.json'
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(response => response.json())
.then( data => {
  const events = data.events
  
 const categories = [ ...new Set(events.map( event => event.category))]
 let checkboxContainer = ''
 const checkfilter = document.getElementsByClassName('.checkboxfilter')
  crearCardPasada(events)
  checkboxFilter.addEventListener('change', (e) =>{
    let filter =   eventFilter(events)
    let buscador = search[0].value.toLowerCase()
    let buscarFunction = filterSearch(buscador, events)
    let filtrados = eventFilter(buscarFunction)
    console.log(e)
    crearCardPasada(filtrados) 
  }
  )
  search.addEventListener('keyup', (e) =>{
    let buscador = search[0].value.toLowerCase()
    let buscarFunction = filterSearch(buscador, events)
    let filtrados = eventFilter(buscarFunction)
    console.log(e)
    crearCardPasada(filtrados) 
  }
    
  
  )

  for (let category of categories){

    checkboxContainer += `<div class="form-input">
    <input type="checkbox" value="${category}" name="${category}" id="filter" class="form-input"></input>
    <label for="${category}">${category}</label>
    </div>`

   
 }

 checkboxFilter.innerHTML += checkboxContainer
  


})
.catch(error => console.log(error))





