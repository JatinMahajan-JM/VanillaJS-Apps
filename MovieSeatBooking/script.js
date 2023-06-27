const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

function setMovieandPrice(movieIndex, price) {
  localStorage.setItem("movie", JSON.stringify(movieIndex));
  localStorage.setItem("price", JSON.stringify(price));
}

function updateTotalPrice() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  const toStoreSeats = [...selectedSeats].map(function (seat) {
    return [...seats].indexOf(seat);
  });
  console.log(toStoreSeats);
  localStorage.setItem("selectedSeats", JSON.stringify(toStoreSeats));
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const movieIndex = JSON.parse(localStorage.getItem("movie"));
  ticketPrice = +JSON.parse(localStorage.getItem("price"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.includes(index)) {
        seat.classList.add("selected");
      }
    });
  }

  if (movieIndex !== null) {
    movieSelect.selectedIndex = movieIndex;
  }

  updateTotalPrice();
}

populateUI();

movieSelect.addEventListener("change", (event) => {
  ticketPrice = event.target.value;
  updateTotalPrice();
  setMovieandPrice(event.target.selectedIndex, event.target.value);
});

container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
    updateTotalPrice();
  }
});
