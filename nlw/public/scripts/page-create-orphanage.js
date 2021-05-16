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
})

let marker;/* variavle que pode ser mudada*/
//criar marcador no clique

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover marcação
    marker && map.removeLayer(marker) // se marker tiver algum valor ele será retirado

    //add incon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);
})

//adicionar campo de fotos

function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o contaianer para duplicar .new-image
    const fieldContainer = document.querySelectorAll('.new-upload') // seleciona todos os campos .new-image
    //realizar a duplicação da ultima imagem add
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)//clona a ultima informação
    // verificar se campo vasio sim = nao duplicar
    const input = newFieldContainer.children[0]
    if(input.value == "")
    {
        return
    }
    //limpar campo antes de adicionar 
    input.value=""
    //add o clone ao container de #images
    container.appendChild(newFieldContainer) //add no container 
}

function deleteField(event){
    const span = event.currentTarget

    const fieldContainer = document.querySelectorAll('.new-upload')
    
    if(fieldContainer.length < 2)
    {
        //limpar valor do campo quando tiver somente 1
        span.parentNode.children[0].value=""
        return
    }

    // deletar campo
    span.parentNode.remove()//pega o contaner pai

}

// troca do sim e nao 
function toggleSelect(event){

    //remover .active
    document.querySelectorAll('.button-select button').forEach(button =>button.classList.remove('active'))//modo avançado para criar função quando so tem 1 linha

    //colocar .active no clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o input com valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}

function validate(event){
    //verificar se lat e lng
    const vlat = document.querySelector('[name="lat"]').value
    const vlng = document.querySelector('[name="lng"]').value
     needsLatAndLNG = false

    if(vlat)
    {
        needsLatAndLNG = true
    }

    if(!needsLatAndLNG){
        event.preventDefault() // não envia o formulario
        alert('Selecione um ponto no mapa')
    }
    
}
    