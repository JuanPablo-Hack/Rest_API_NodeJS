const express = require('express');
const app = express();
const morgan = require('morgan');

//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));                                          
app.use(express.json());

//Indicando el puerto
app.set('port', process.env.PORT  || 3000)
//Dandole formato al JSON
app.set('json spaces',2);

//Mandando a llamar a las Rutas
app.use(require('./routes/index'));
app.use('/api/pelis',require('./routes/pelis'));


//Iniciando Servidor 
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000')
})