const cinemaclub = document.querySelector(".cinema-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 800;
let totalPrice = 0;
cinemaclub.addEventListener("click", (event) => {
   if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle("active");
    let totalSeats = cinemaclub.querySelectorAll(".active").length ;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
}

});