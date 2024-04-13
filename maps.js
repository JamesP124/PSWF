function lookupAddress(address) {
    // If an address is explicitly provided, use it; otherwise, fetch from the dropdown
    const query = address || document.getElementById('stadiumSelect').value;

    const url = new URL('https://nominatim.openstreetmap.org/search');
    url.search = new URLSearchParams({
        q: query,
        format: 'json',
        limit: 1
    }).toString();

    fetch(url, {
        method: 'GET',
        headers: {
            'User-Agent': 'YourAppName/1.0 (YourContactEmailAddress)', // Replace with actual info
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);

            console.log('Latitude:', lat, 'Longitude:', lon);

            // Clear previous markers and routes
            clearMapLayers();

            // Focus the map on the located position and add a marker
            map.setView([lat, lon], 13);
            L.marker([lat, lon]).addTo(map)
                .bindPopup(query)
                .openPopup();

            // If the user's location is available, draw routes
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    drawRoutes([position.coords.latitude, position.coords.longitude], [lat, lon]);
                }, () => {
                    console.log("Geolocation is not supported or permission denied");
                });
            }
        } else {
            console.log('No results found');
        }
    })
    .catch(error => console.error('Error:', error));
}

// Function to draw routes on the map
function drawRoutes(start, end) {
    L.Routing.control({
        waypoints: [
            L.latLng(start[0], start[1]),
            L.latLng(end[0], end[1])
        ],
        routeWhileDragging: true
    }).addTo(map);
}

// Function to clear map layers (markers, routes)
function clearMapLayers() {
    map.eachLayer(layer => {
        if (layer instanceof L.Marker || layer instanceof L.Routing.Control) {
            map.removeLayer(layer);
        }
    });
}

// Ensure your map initialization function (initMap) correctly sets up the Leaflet map
document.addEventListener('DOMContentLoaded', function() {
    initMap(); // Assumes initMap() is your function to initialize the Leaflet map
});
