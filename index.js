const flights = [
  {
    airline: "IndiGo",
    from: "Delhi",
    to: "Goa",
    departure: "09:20 AM",
    arrival: "11:45 AM",
    duration: "2h 25m",
    price: 5499,
    class: "Economy"
  },
  {
    airline: "Air India",
    from: "Delhi",
    to: "Goa",
    departure: "11:30 AM",
    arrival: "02:00 PM",
    duration: "2h 30m",
    price: 6299,
    class: "Economy"
  },
  {
    airline: "Akasa Air",
    from: "Delhi",
    to: "Goa",
    departure: "05:15 PM",
    arrival: "07:40 PM",
    duration: "2h 25m",
    price: 5899,
    class: "Economy"
  }
];

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    const container = document.getElementById("flightContainer");
    const availableFlights = document.getElementById("availableFlights");
    availableFlights.style.display = "block";
    container.innerHTML = "";
    const result = flights.filter((item) => {
        return item.from === from && item.to === to;
    });

    if (result.length === 0) {
        container.innerHTML = `
            <div class="no-flight">
                <h2>❌ No Flights Available</h2>
                <p>Please try another destination.</p>
            </div>
        `;
        return;
    }
    result.forEach((item) => {
        let selectedFlight = null;

        let card = `
        <div class="flight-card">

            <h2>${item.airline}</h2>

            <div class="flight-details">

                <div>

                    <p class="route">${item.from} ✈ ${item.to}</p>

                    <p class="time">
                        ${item.departure} → ${item.arrival}
                    </p>

                    <p class="duration">
                        Duration : ${item.duration}
                    </p>

                    <p class="class">
                        ${item.class}
                    </p>

                </div>

                <div>

                    <p class="price">₹${item.price}</p>

                    <button class="book-btn"> Book Now</button>
 </div>

            </div>

        </div>
        `;

        container.innerHTML += card;

   
    availableFlights.scrollIntoView({
        behavior: "smooth"
    });
    const buttn=document.querySelectorAll(".book-btn");
buttn.forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
    
    const login=document.getElementById("login");
    login.style.display="block";
    login.innerHTML="";
    let data=`
    <h2>Passesnger details</h2>
    <input type="text" placeholder="Full Name" id="name">
    <input type="email" placeholder="Email Address" id="email">
    <input type="tel" placeholder="Phone Number" id="phone">
    <input type="number" placeholder="Age" id="age">
    <div class="button">
     <h2>Gender</h2>
     <input type="radio" name="gender" value="Male">
     <label>Male</label>
     <input type="radio" name="gender" value="Female">
     <label>Female</label>
     <input type="radio" name="gender" value="Other">
     <label>Other</label>
     <Button id="continueBtn">Continue→</Button>
    </div>`
login.innerHTML+=data;

let cbtn=document.getElementById("continueBtn");
cbtn.addEventListener('click',()=>{
      const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const selectedGender = document.querySelector('input[name="gender"]:checked');

if (!selectedGender) {
    alert("Please select gender");
    return;
}

const gender = selectedGender.value;
   
    let book=document.getElementById("bookingsummary");
    book.style.display="block";
     const taxes = 350;
const convenienceFee = 150;
const totalAmount = item.price + taxes + convenienceFee;
    let dataa=` <h2>👤 Passenger Details</h2>
    <p>Name:${name} </p>
    <p>Email:${email}</p>
    <p>Phone:${phone}</p>
    <p>Age:${age}</p>
    <p>Gender:${gender}</p>
   <hr>
    <h2>✈ Flight Details</h2>
    <p>Airline:${item.airline}</p>
    <p>Route:${item.from} →${item.to}</p>
    <p>Departure:${item.departure}</p>
    <p>Arrival:${item.arrival}</p>
    <p>Duration:${item.duration}</p>
    <p>Class:${item.class}</p>
    <hr>
   
    <h2>💰 Fare Details</h2>
    <p>Ticket Price: ₹${item.price}</p>
<p>Taxes: ₹${taxes}</p>
<p>Convenience Fee: ₹${convenienceFee}</p>
<hr>
<h3>Total Amount: ₹${totalAmount}</h3>
   <button id="backBtn">← Back</button>
<button id="confirmBtn">Confirm Booking</button>`
    
    book.innerHTML=dataa;
  const backBtn = document.getElementById("backBtn");
const confirmBtn = document.getElementById("confirmBtn");
    confirmBtn.addEventListener('click',()=>{
        let confirm=document.getElementById("bookingconfirmation");
        confirm.innerHTML="";
        book.style.display = "none";
        confirm.style.display="block";
        const bookingId = "EX" + Math.floor(Math.random() * 1000000);
        let datas=`  <h2>✅ Booking Confirmed!</h2>
    <p>Thank you for booking with SkyFly..</p>
    <p>Booking ID:${bookingId}</p>
    <p>Passenger:${name}</p>
    <p>Flight:${item.airline}</p>
        <p>Route:${item.from}→${item.to} </p>
    <p>Departure:${item.departure}</p>
    <p>Total Paid:₹${totalAmount}</p>
    <p>An e-ticket has been sent to your email.</p>`
    confirm.innerHTML+=datas;
    })
    backBtn.addEventListener("click", () => {
    book.style.display = "none";
    login.style.display = "none";
    availableFlights.style.display = "block";
});
backBtn.addEventListener("click", () => {
    location.reload();
});
    
     });
})
})

    


})
});
