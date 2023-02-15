const attendance = document.getElementById("eventsAttendance");
const higherPercentageAttendance = document.createElement("td");
const lowerPercentageAttendance = document.createElement("td");
const higherCapacity = document.createElement("td");
const upcoming = document.querySelectorAll(".categoryUpcoming");
const past = document.querySelectorAll(".categoryPast");


fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((response) => response.json())
  .then((data) => {
    let higherPercentage = 0;
    let higherPercentageEvent = null;
    data.events.forEach((element) => {
      const percentageAttendance =
        (element.assistance / element.capacity) * 100;
      if (percentageAttendance > higherPercentage) {
        higherPercentage = percentageAttendance;
        higherPercentageEvent = element.name;
      }
    });

    higherPercentageAttendance.textContent =
      higherPercentageEvent + " " + higherPercentage.toFixed(2) + "%";
    attendance.appendChild(higherPercentageAttendance);

    let lowerPercentage = higherPercentage;
    let lowerPercentageEvent = null;
    data.events.forEach((element) => {
      const percentageAttendance =
        (element.assistance / element.capacity) * 100;
      if (percentageAttendance < lowerPercentage) {
        lowerPercentage = percentageAttendance;
        lowerPercentageEvent = element.name;
      }
    });
    lowerPercentageAttendance.textContent =
      lowerPercentageEvent + " " + lowerPercentage + "%";
    attendance.appendChild(lowerPercentageAttendance);

    let higherC = data.events[0];
    data.events.forEach((element) => {
      if (element.capacity > higherC.capacity) {
        higherC = element;
      }
    });
    higherCapacity.textContent = higherC.name;
    attendance.appendChild(higherCapacity);

    upcoming.forEach((element) => {
      const category = element.querySelector("td:first-child").textContent;
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      let totalPrice = 0;
      const totals = {
        capacity: 0,
        estimate: 0,
      };
data.events.forEach((event) => {
        if (event.category === category && event.date > data.currentDate) {
          const eventTotalPrice = event.price * event.estimate;
          totalPrice += eventTotalPrice;
          totals.capacity += event.capacity;
          totals.estimate += event.estimate;
        }
      });

      const percentageAttendance = (totals.estimate / totals.capacity) * 100;
      td3.textContent = percentageAttendance.toFixed(2) + "%";
      td2.textContent = "$" + totalPrice.toFixed(2);

      element.appendChild(td2);
      element.appendChild(td3);
    });

    past.forEach((element) => {
      const category = element.querySelector("td:first-child").textContent;
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      let totalPrice = 0;
      const total = {
        capacity: 0,
        assistance: 0,
      };

      data.events.forEach((event) => {
        if (event.category === category && event.date < data.currentDate) {
          const eventTotalPrice = event.price * event.assistance;
          totalPrice += eventTotalPrice;
          total.capacity += event.capacity;
          total.assistance += event.assistance;
        }
      });

      const percentageAttendance = (total.assistance / total.capacity) * 100;
      td3.textContent = percentageAttendance.toFixed(2) + "%";
      td2.textContent = "$" + totalPrice.toFixed(2);

      element.appendChild(td2);
      element.appendChild(td3);
    });
  });