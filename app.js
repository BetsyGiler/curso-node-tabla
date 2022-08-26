const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');


console.clear();

//console.log( process.argv );

//console.log( argv );

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log('TODO BIEN!\n',nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log('TODO MAL!', err));
        
//console.log('base: yargs', argv.b)

//const [ , , arg3 = 'base = 5'] = process.argv;
//const [ ,base = 5 ] = arg3.split('=');

//console.log(base);

//const base = 5;




   
    