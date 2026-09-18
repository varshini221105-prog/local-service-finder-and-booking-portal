let selectedService = "";


/* Open Booking Form */

function openBooking(service) {

    selectedService = service;

    document.getElementById("selectedService").innerText =
        "Selected Service: " + service;

    document.getElementById("bookingBox").style.display =
        "block";
}


/* Close Booking Form */

function closeBooking() {

    document.getElementById("bookingBox").style.display =
        "none";
}


/* Confirm Booking */

function bookService() {

    let name =
        document.getElementById("customerName").value;

    let phone =
        document.getElementById("phone").value;

    let date =
        document.getElementById("date").value;

    let time =
        document.getElementById("time").value;

    let address =
        document.getElementById("address").value;


    /* Check empty fields */

    if (
        name === "" ||
        phone === "" ||
        date === "" ||
        time === "" ||
        address === ""
    ) {

        alert("Please fill all details");

        return;
    }


    /* Remove No Booking message */

    let noBooking =
        document.querySelector(".no-booking");

    if (noBooking) {
        noBooking.remove();
    }


    /* Create Booking Card */

    let bookingCard =
        document.createElement("div");

    bookingCard.className =
        "booking-card";

    bookingCard.innerHTML = `

        <h3>${selectedService}</h3>

        <p>
            <b>Customer:</b> ${name}
        </p>

        <p>
            <b>Phone:</b> ${phone}
        </p>

        <p>
            <b>Date:</b> ${date}
        </p>

        <p>
            <b>Time:</b> ${time}
        </p>

        <p>
            <b>Address:</b> ${address}
        </p>

        <p class="status">
            Status: Confirmed
        </p>

    `;


    /* Add booking to list */

    document
        .getElementById("bookingList")
        .appendChild(bookingCard);


    alert("Booking Confirmed Successfully!");


    /* Close form */

    closeBooking();


    /* Clear form */

    document.getElementById("customerName").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("date").value = "";

    document.getElementById("time").value = "";

    document.getElementById("address").value = "";


    /* Scroll to My Bookings */

    document
        .querySelector(".my-bookings")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* Search Service */

function searchService() {

    let search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let category =
        document.getElementById("category")
        .value
        .toLowerCase();


    let cards =
        document.querySelectorAll(".service-card");


    cards.forEach(function(card) {

        let text =
            card.innerText.toLowerCase();


        if (
            text.includes(search) &&
            (category === "" ||
             text.includes(category))
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }

    });
}