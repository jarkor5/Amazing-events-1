let events = data.events
let lista = document.getElementById("carta-container")
//console.log(data.events[0].name)

for(let event of events ){
    if(event.date > data.currentDate){
        lista.innerHTML += ` <div class="carta">
    <img src="${event.image}" class="carta-image">
    <h5 class="carta-title">${event.name}</h5>
    <p class="carta-text">${event.description}</p>
    <a href="#" class="carta-button">View more</a>

</div>`
    }
    

}