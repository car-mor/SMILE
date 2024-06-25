<template>
  <div>
    <div id="map" style="height: 500px; width: 100%;"></div>
    <div v-if="centers.length > 0" class="center-list">
      <h3>Centros de salud mental encontrados: {{ centers.length }}</h3>
    </div>
    <div v-else-if="searchCompleted" class="no-results">
      No se encontraron centros de salud mental cercanos. Intenta aumentar el radio de búsqueda.
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';

const map = ref(null);
const userPosition = ref(null);
const centers = ref([]);
const searchCompleted = ref(false);
let userMarker = null;
let routingControl = null;

const initializeMap = () => {
  map.value = L.map('map').setView([19.432608, -99.133209], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value);
};

const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      userPosition.value = [position.coords.latitude, position.coords.longitude];
      map.value.setView(userPosition.value, 13);
      
      const userIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      userMarker = L.marker(userPosition.value, {icon: userIcon}).addTo(map.value)
        .bindPopup('Tu ubicación')
        .openPopup();
      
      fetchNearbyMentalHealthCenters();
    }, error => {
      console.error('Error getting user location:', error);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};


const fetchNearbyMentalHealthCenters = async () => {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=centro+psicol%C3%B3gico+near+CDMX`);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    console.log('Data from API:', data); // Verificar la estructura de los datos recibidos

    centers.value = data.map(center => ({
      lat: parseFloat(center.lat),
      lon: parseFloat(center.lon),
      name: center.display_name
    }));

    centers.value.forEach(center => {
      const marker = L.marker([center.lat, center.lon]).addTo(map.value);
      marker.bindPopup(`<b>${center.name}</b><br/><button onclick="showRouteToCenter(${JSON.stringify(center)})">Mostrar ruta</button>`);
    });

    if (centers.value.length > 0) {
      searchCompleted.value = true;
    } else {
      searchCompleted.value = false;
    }
  } catch (error) {
    console.error('Error fetching data from OpenStreetMap:', error);
  }
};



const showRouteToCenter = (center) => {
  if (routingControl) {
    map.value.removeControl(routingControl);
  }

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(userPosition.value[0], userPosition.value[1]),
      L.latLng(center.lat, center.lon)
    ],
    routeWhileDragging: true
  }).addTo(map.value);

  map.value.fitBounds([
    userPosition.value,
    [center.lat, center.lon]
  ]);
};


onMounted(() => {
  initializeMap();
  getUserLocation();
});
</script>

<style scoped>
@import 'leaflet/dist/leaflet.css';
@import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

#map {
  height: 500px;
  width: 100%;
}

.center-list, .no-results {
  margin-top: 20px;
}

.no-results {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 10px;
  border-radius: 5px;
}
</style>