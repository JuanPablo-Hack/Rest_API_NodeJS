const {Router} = require('express');
const router = Router();

//Mando a llamar a los datos
const pelis = require('../ejemplo.json');
//Obteniendo datos en la consola
console.log(JSON.stringify(pelis,null,2));

router.get('/',  (req,res)=>{
    res.json(pelis);    

});
router.post('/',  (req,res)=>{
    console.log(req.body);
    res.send('Recibido');    

});


module.exports = router;            