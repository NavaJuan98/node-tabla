const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

// console.log(argv)
// console.log(argv.base)
// const [ , , arg3 = 'base=5'] = process.argv
// console.log(arg3)
// const [ , base = 5] = arg3.split('=')

crearArchivo(argv.b, argv.l, argv.h)
    .then((msg) => { console.log(msg) })
    .catch((err) => { console.log(err) })

