
// data
let events = data.events

// contenedor donde paran los elementos
let lista = document.getElementById("carta-container")

// input search
let search = document.getElementById('search')

//contenedor de los checkbox
 let checkboxFilter = document.querySelector('.form-container')


// crear card
function crearcard(e){ 
    if(e.length === 0){
        lista.innerHTML = `<p class="fs-4 text-white">Card not found</p>`
    }
    else{
        let template = ''
        for(let event of e ){
            template += ` <div class="carta">
            <img src="${event.image}" class="carta-image">
            <h5 class="carta-title">${event.name}</h5>
            <p class="carta-text">${event.description}</p>
            <a href="./details.html?id=${event._id}&name=${event.name}" class="carta-button">View more</a>
        
        </div>`
        
    }
   
    lista.innerHTML = template
}




}

crearcard(events)

 
 


 const categories = [ ...new Set(events.map( event => event.category))]

 const checkfilter = document.getElementsByClassName('.checkboxfilter')
 


   let checkboxContainer = ''
 for (let category of categories){

        checkboxContainer += `<div class="form-input">
        <input type="checkbox" value="${category}" name="${category}" id="filter" class="form-input"></input>
        <label for="${category}">${category}</label>
        </div>`

       
     }

     checkboxFilter.innerHTML += checkboxContainer
  
    checkboxFilter.addEventListener('change', (e) =>{
      let filter =   eventFilter(events)
      crearcard(filter)
    })


 function eventFilter(events){
   let x = [...document.querySelectorAll('input[type="checkbox"]:checked')]
   let y = x.map(cate => cate.value)
   if(y.length === 0){
    return events
   } else{
    return events.filter(filtrado => y.includes(filtrado.category))
   }
  
  }


  function filterSearch(search, e){
    let filtroArray = e.filter(filtroBusqueda => filtroBusqueda.name.toLowerCase().includes(search))
    return filtroArray

  }


  search.addEventListener('keyup', (e) =>{
    let buscador = search[0].value.toLowerCase()
    let buscarFunction = filterSearch(buscador, events)
    let filtrados = eventFilter(buscarFunction)
    console.log(e)
    crearcard(filtrados) 
  }
    
  
  )
  



 console.log()
 