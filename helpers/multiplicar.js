const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
    try{

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++ ) {
            salida += `${ base } X ${ i } = ${ base * i}\n`;
            consola += `${ base } ${'X'.green} ${ i } ${'='.green}  ${ base * i}\n`;
            //console.log(`${ base } x ${ i } = ${ base * i}`);
        }

        if ( listar ) {
        console.log('======================'.green);
        console.log('     Tabla del:'.yellow, colors.blue (base) );
        console.log('======================'.green);

        console.log(salida);
        }
        //fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
        //  if(err) throw err;
        // console.log(`tabla-${ base }.txt creado`);
        //})

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
            return `tabla-${ base }.txt`;

    }catch (err){
        throw err;
    }
}
 

module.exports = {
    crearArchivo
}
