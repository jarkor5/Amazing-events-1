let lista = document.getElementById("carta-container")


export function crearcard(e){ 
    if(e.length === 0){
        lista.innerHTML = `<p class="fs-4 text-white">Card not found</p>`
    }
    else{
        let template = ''
        for(let dato of e ){
            template += ` <div class="carta">
            <img src="${dato.image}" class="carta-image">
            <h5 class="carta-title">${dato.name}</h5>
            <p class="carta-text">${dato.description}</p>
            <a href="./details.html?id=${dato._id}&name=${dato.name}" class="carta-button">View more</a>
        
        </div>`
        
    }
   
    lista.innerHTML = template
}




}


export function eventFilter(events){
    let x = [...document.querySelectorAll('input[type="checkbox"]:checked')]
    let y = x.map(cate => cate.value)
    if(y.length === 0){
     return events
    } else{
        return events.filter(filtrado => y.includes(filtrado.category))
    }
   
   }

 export  function filterSearch(search, e){
    let filtroArray = e.filter(filtroBusqueda => filtroBusqueda.name.toLowerCase().includes(search))
    return filtroArray

  }


 export function crearCardPasada(e){
    let template = ''
for(let event of e ){
    if(event.date < data.currentDate){
        template += ` <div class="carta">
    <img src="${event.image}" class="carta-image">
    <h5 class="carta-title">${event.name}</h5>
    <p class="carta-text">${event.description}</p>
    <a href="./details.html?id=${event._id}&name=${event.name}" class="carta-button">View more</a>
        

</div>`
    }
    
}

lista.innerHTML = template
}


export function crearCardFutura(e){
    let template = ''
for(let event of e ){
    if(event.date > data.currentDate){
        template += ` <div class="carta">
    <img src="${event.image}" class="carta-image">
    <h5 class="carta-title">${event.name}</h5>
    <p class="carta-text">${event.description}</p>
    <<a href="./details.html?id=${event._id}&name=${event.name}" class="carta-button">View more</a>
        

</div>`
    }
    
}

lista.innerHTML = template
}