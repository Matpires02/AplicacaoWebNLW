// criando mapa
const map = L.map('mapid').setView([-27.22263, -49.6455874], 15) //variavel constante mapa

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

//criar icone

const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSise: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor: [170, 2] 
})

function addMapMarker({id, name, lat, lng}) {

    //criar popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240, 
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)
    
    //criar marcador
    L.marker([lat, lng], { icon }).addTo(map)
        .bindPopup(popup)
}

// pegando os dados dos spans ocultos da pagina
const orphanageSpan = document.querySelectorAll('.orphanages span')

orphanageSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }

    addMapMarker(orphanage)
})

