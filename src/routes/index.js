const {Router} =require('express');
const router = Router();

//Rutas
router.get('/',(req,res)=>{
    //Mando a llamar un json
    res.json({"Titulo":"Hola mundo"});
})
router.get('/test',(req,res)=>{
    //Declaro una constante de datos
    const data={
        "Nombre" : "Juan Pablo Figueroa Jaramillo",
        "Edad" : "21",
        "Universidad" : "Universidad de Colima",
        "No.de cuenta" : "20140864"
    };
    //Mando a llamar un json
    res.json(data);
})


module.exports = router;