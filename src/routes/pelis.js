const {Router} = require('express');
const router = Router();
//Llamamos a la funcion underscore
const underscore = require('underscore');

//Mando a llamar a los datos
const pelis = require('../ejemplo.json');
//Obteniendo datos en la consola
//console.log(JSON.stringify(pelis,null,2));

//Metodo GET
router.get('/',  (req,res)=>{
    //Obtenemos una respuesta de todas las peliculas guardadas
    res.json(pelis);    

});
router.post('/',  (req,res)=>{
    //Vamos a guardar los datos que recibimos del postman
    const {Titulo,Director,Ano,Rating}=req.body;
    //Vamos a validar que los datos si fueron enviados
    if(Titulo && Director && Ano && Rating){
            //Vamos a insertar un nuevo valor de peliculas
            //Declaramos el valor del id
            const id = pelis.length+1;
            const NuevaPeli = {id,...req.body};
            //Probando la conexion de los datos
            //console.log(JSON.stringify(NuevaPeli,null,2));
            //Insertamos la nueva pelicula en el array de pelis
            pelis.push(NuevaPeli);
            res.send('Guardada Correctamente');

    }else{
            res.send('Problemas al enviar la informacion');
    }
});
//Metodo Put
router.put('/:id',(req,res)=>{
    //Obtenemos el id
    const { id } = req.params;
    //Los datos que queremos actualizar
    const {Titulo,Director,Ano,Rating}=req.body;
    //Si existen los parametros entonces
    if (Titulo && Director && Ano && Rating){
        underscore.each(pelis,(peli,i)=>{
            //Buscamos el id
            if(peli.id== id){
                //Actualizamos los datos
                pelis.Titulo= Titulo;
                pelis.Director= Director;
                pelis.Ano= Ano;
                pelis.Rating= Rating;
            }
        });
        //Enviamos los datos actualizados
        res.send('Datos actualizados con exito');
        res.send(pelis)
    }else{
        res.send('Error al actualizar los datos');
    }

});

//Metodo Delete
router.delete('/:id',(req,res) =>{
    //Obtenemos el id del req params
    const { id } = req.params;
    //Recorremos todo el arreglo con la funcion each
    underscore.each(pelis, (peli,i) => {
        //Si el id de la pelicula se encuentra entonces borramos
        if(peli.id == id){
            pelis.splice(i,1);
        }
    });
    //Mandar el arreglo de pelis
    res.send(pelis);
});


module.exports = router;            