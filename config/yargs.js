const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'Hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el numero hasta donde quieres la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: true,
        describe: 'Muestra la tabla en console'
    })
    .check( (argv, opcions ) => {
        if(isNaN ( argv.b ) ) {
            throw 'La base tiene que ser un número'
        }
        return true;
        //console.log('yargs', argv)
    } )
    .argv;

    module.exports = argv;
