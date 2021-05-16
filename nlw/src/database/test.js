const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
            lat: "-27.22263",
            lng: "-49.6455874",
            name:"Lar das meninas",
            about: "Presta assitência a crianças entre 06 a 15 anos.",
            images:[ 
                "https://images.unsplash.com/photo-1600711725042-deb9fbaeb1e3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
                "https://images.unsplash.com/photo-1602571833995-03aa80922957?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
            ].toString(),
            instructions: "Venha como sentir a vontade e traga muito amor e paciencia para dar.",
            opening_hours: "Horários de visitas Das 8h até 18h",
            open_on_weekends: "1"
        }
    ) 
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // //consultar somente 1orfanato pelo id
    //  const orphanage = await db.all('SELECT * FROM orphanages where id = "1"')
    //  console.log(orphanage)

     //deletar dado da tabela
    //  console.log(await db.run('DELETE FROM orphanages WHERE id="4"'))
    // console.log(await db.run('DELETE FROM orphanages WHERE id="5"'))

})