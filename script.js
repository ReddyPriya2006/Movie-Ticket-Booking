let selectedMovie = "";

let selectedSeats = [];

const ticketPrice = 150;


// Open Booking

function openBooking(movieName) {

    selectedMovie = movieName;

    document.getElementById("selectedMovie").innerText =
        movieName;

    document.getElementById("bookingModal").style.display =
        "block";

    selectedSeats = [];

    document.getElementById("selectedSeats").innerText =
        "None";

    document.getElementById("totalPrice").innerText =
        "0";

    // Reset seats

    document.querySelectorAll(".seat").forEach(function(seat) {

        seat.classList.remove("selected");

    });

}


// Close Booking

function closeBooking() {

    document.getElementById("bookingModal").style.display =
        "none";

}


// Select Seat

function selectSeat(seat) {

    const seatNumber = seat.innerText;


    if (seat.classList.contains("selected")) {

        seat.classList.remove("selected");

        selectedSeats =
            selectedSeats.filter(
                item => item !== seatNumber
            );

    } else {

        seat.classList.add("selected");

        selectedSeats.push(seatNumber);

    }


    updateBooking();
}


// Update Booking

function updateBooking() {

    if (selectedSeats.length === 0) {

        document.getElementById("selectedSeats").innerText =
            "None";

    } else {

        document.getElementById("selectedSeats").innerText =
            selectedSeats.join(", ");

    }


    const total =
        selectedSeats.length * ticketPrice;


    document.getElementById("totalPrice").innerText =
        total;

}


// Confirm Booking

function confirmBooking() {

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("showTime").value;


    if (date === "") {

        alert("Please select a date.");

        return;

    }


    if (selectedSeats.length === 0) {

        alert("Please select at least one seat.");

        return;

    }


    alert(
        "🎉 Booking Successful!\n\n" +
        "Movie: " + selectedMovie + "\n" +
        "Date: " + date + "\n" +
        "Time: " + time + "\n" +
        "Seats: " + selectedSeats.join(", ") + "\n" +
        "Total: ₹" +
        selectedSeats.length * ticketPrice
    );


    closeBooking();
}


// Search Movies

function searchMovies() {

    const searchValue =
        document.getElementById("searchInput")
        .value
        .toLowerCase();


    const movies =
        document.querySelectorAll(".movie-card");


    movies.forEach(function(movie) {

        const name =
            movie.dataset.name.toLowerCase();


        if (name.includes(searchValue)) {

            movie.style.display = "block";

        } else {

            movie.style.display = "none";

        }

    });

}


// Language Filter

function filterMovies() {

    const selectedLanguage =
        document.getElementById("languageFilter").value;


    const movies =
        document.querySelectorAll(".movie-card");


    movies.forEach(function(movie) {

        const language =
            movie.dataset.language;


        if (
            selectedLanguage === "all" ||
            language === selectedLanguage
        ) {

            movie.style.display = "block";

        } else {

            movie.style.display = "none";

        }

    });

}


// Close modal when clicking outside

window.onclick = function(event) {

    const modal =
        document.getElementById("bookingModal");


    if (event.target === modal) {

        closeBooking();

    }

};