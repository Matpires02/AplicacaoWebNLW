// importar dependencia
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

//iniciando o express
const server = express()
server
    // utilizar body do req
    .use(express.urlencoded({ extended: true }))
    //utilizando os arquivos estaticos(cria todas as rotas)
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // rotas da aplicaçao

    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar server
server.listen(5500)
