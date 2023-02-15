let lista = document.getElementById("carta-container")
let search = document.getElementById('search')
let checkboxFilter = document.querySelector('.form-container')
const attendance = document.getElementById("eventsAttendance")
const higherPercentageAttendance = document.createElement("td")
const lowerPercentageAttendance = document.createElement("td")
const higherCapacity = document.createElement("td")
const upcoming = document.querySelectorAll(".categoryUpcoming")
const past = document.querySelectorAll(".categoryPast")

//const datos = './amazing.json'
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(response => response.json())
.then( data => {
  const events = data.events
  let higherPercentage = 0;
  let higherPercentageEvent = null;
  data.events.forEach((element) => {
    const percentageAttendance =
    (element.assistance / element.capacity) * 100;
    if (percentageAttendance > higherPercentage) {
        higherPercentage = percentageAttendance;
        higherPercentageEvent = element.name;
    }
  })
  higherPercentageAttendance.textContent =
  higherPercentageEvent + " " + higherPercentage.toFixed(2) + "%"
  attendance.appendChild(higherPercentageAttendance);

  let lowerPercentage = higherPercentage;
  let lowerPercentageEvent = null;
  data.events.forEach((element) => {
    const percentageAttendance = 
    (element.assistance / element.capacity) * 100
    if(percentageAttendance < lowerPercentage){
        lowerPercentage = percentageAttendance
        lowerPercentageEvent = element.name
    }
  })
  lowerPercentageAttendance.textContent = 
  lowerPercentageEvent + " " +lowerPercentage + "%"
  attendance.appendChild(lowerPercentageAttendance)

  let higher = data.events[0]
  data.events.forEach((element) => {
    if(element.capacity > higher.capacity){
        higher = element
    }
  })
  higherCapacity.textContent = higher.name
  attendance.appendChild(higherCapacity)

  upcoming.forEach((element) => {
    const category = element.querySelector("td:first-child").textContent
    const td2 = document.createElement ("td")
    const td3 = document.createElement("td")
    let totalPrice = 0;
    const totals = {
        capacity: 0,
        estimate: 0,
    }
  

})

  data.events.forEach((event) => {
    if(event.category === category && event.date > data.currentDate){
        const eventTotalPrice = event.price * event.estimate;
        totalPrice += eventTotalPrice
        totals.capacity += event.capacity
        totals.estimate += event.estimate
    }
 
})




 
    
  
 

})

.catch(error => console.log(error))
