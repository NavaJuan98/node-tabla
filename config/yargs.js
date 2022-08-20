const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            type: 'number',
            default: 5,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'list',
            demandOption: false,
            default: false,
            type: 'boolean',
            describe: 'Muestra la tabla de multiplicar'
        },
        'h': {
            alias: 'hasta',
            demandOption: false,
            type: 'number',
            default: 5,
            describe: 'Es el limite de las tablas de multiplicar'
        }
    }).check((argv, options) => {
        if(isNaN(argv.b)) {
            throw 'La base tiene que ser un numero!'
        }
        return true
    })
    .argv;
module.exports = argv;