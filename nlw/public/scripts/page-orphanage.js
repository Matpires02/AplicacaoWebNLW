const options = {/* retira a possibilidade de dar zoom no mapa*/
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// criando mapa
const map = L.map('mapid', options).setView([lat, lng], 15) //variavel constante mapa

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


//criar marcador

L.marker([lat, lng], { icon }).addTo(map)


/*image gallery*/

function selectImage(event){// event: pega o evento de clicar 
    const button = event.currentTarget // qual é o botao que esta disparando 

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button") // pesquisar todos os seletores do argumento
    //console.log(buttons) //mostra tudo que foi encontrado no display do console
    //buttons.forEach((button) => {button.classList.remove("active")}) //forma resumida de fazer função sem declarar ela antes
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active") // remove a classe active para cada botão
    }

    // selecionar image clicada 
    //console.log(button.children)
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")//pega somente um seletor

    imageContainer.src = image.src // pega o caminho da imagem clicada e substitui no container maior para exibição
    
    // atualizar container de image
    // adicionar a classe .active para o botao clicado
    button.classList.add('active') // adiciona o atributo active para o botão clicado

}