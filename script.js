// Initialize and add the map
let map;

// The initMap function will be called automatically by the callback parameter in the script tag. See line 16 of index.html
function initMap() {
    // The location of London
    const londonCoords = { lat: 51.509865, lng: -0.118092 };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: londonCoords,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at London
    const marker = new google.maps.Marker({
        map: map,
        position: londonCoords,
        title: "London",
    });
    console.log('hi from initMap!')
}

function loadNearbyRestaurants(location) {
    // Create a PlacesService object
    const placesService = new google.maps.places.PlacesService(map);

    // Define the request parameters for nearby restaurants, for y'all this would be dog related maybe
    const request = {
        location: location,
        radius: 500, // Radius in meters
        type: 'restaurant',
    };
}
