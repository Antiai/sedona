var link = document.querySelector(".btn-search-hotel");
var popup = document.querySelector(".search-form");
var arrivalDate = popup.querySelector("#date-arrival");
var departureDate = popup.querySelector("#date-departure");
var adultsQty = popup.querySelector("#qty-adults");
var childrenQty = popup.querySelector("#qty-children");
var storageAdults = localStorage.getItem("adultsQty");
var storageChildren = localStorage.getItem("childrenQty");

popup.classList.add("search-form-hide");

link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.toggle("search-form-hide");

    if (storageAdults) {
        adultsQty.value = storageAdults;
    }

    if (storageChildren) {
        childrenQty.value = storageChildren;
    }
});

popup.addEventListener("submit", function(event) {
    if (!arrivalDate.value || !departureDate.value || !adultsQty.value || !childrenQty.value) {
        event.preventDefault();
    } else {
        localStorage.setItem("adultsQty", adultsQty.value);
    }
 });

// Google map. Sedona
function initMap() {
    var myLatLng = {lat: 34.8696934, lng: -111.7643237};
    var mapDiv = document.getElementById('sedona-map');
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
    zoom: 10
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Приезжайте, будет интересно!"
    });
}
