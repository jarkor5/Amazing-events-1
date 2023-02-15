<<<<<<< HEAD
const params = new URLSearchParams(location.search)
const id = params.get('id')
let events = data.events
const nombre = params.get('name')
console.log(nombre)

fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(response => response.json())
.then( data => {
  const events = data.events
  const container = document.getElementById('carta-details')

const event = events.find(event => event._id == id)

container.innerHTML = `
<div>
<img src="${event.image}" class="carta-image">
<h5 class="carta-title">${event.name}</h5>
<p class="carta-text">${event.description}</p>
</div>
<div></div>

<div class="details">
<div>
    <h5 class="carta-text">where? </h5>
    <p class="carta-text">
${event.place}
        </p>
</div>
<div>
    <h5 class="carta-text">capacity</h5>
    <p class="carta-text">${event.capacity}</p>
    <h5 class="carta-text">Estimated</h5>
    <p class="carta-text">${event.assistance}</p>
</div>
<div>
    <h5 class="carta-text">
        Price
    </h5>
    <p class="carta-text">${event.price}</p>
</div>



</div>

</div>


        </div>
</div>`
 
  


})
.catch(error => console.log(error))




  

  
  



 


  




 


























=======
const params = new URLSearchParams(location.search)
const id = params.get('id')
let events = data.events
const nombre = params.get('name')
console.log(nombre)


const container = document.getElementById('carta-details')

const event = events.find(event => event._id == id)

container.innerHTML = `
<div>
<img src="${event.image}" class="carta-image">
<h5 class="carta-title">${event.name}</h5>
<p class="carta-text">${event.description}</p>
</div>
<div></div>

<div class="details">
<div>
    <h5 class="carta-text">where? </h5>
    <p class="carta-text">
${event.place}
        </p>
</div>
<div>
    <h5 class="carta-text">capacity</h5>
    <p class="carta-text">${event.capacity}</p>
    <h5 class="carta-text">Estimated</h5>
    <p class="carta-text">${event.assistance}</p>
</div>
<div>
    <h5 class="carta-text">
        Price
    </h5>
    <p class="carta-text">${event.price}</p>
</div>



</div>

</div>


        </div>
</div>`
>>>>>>> 11692cebafa4216974f7260bdea285561d70f8a6
