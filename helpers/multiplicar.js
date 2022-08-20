const fs = require('fs')
const colors = require('colors');

const crearArchivo = (base, list, hasta) => {
    return new Promise((resolve, reject) => {
        let output = ''

        for(let i = 1; i <= hasta; ++i) {
            output += (`\t\t${base} X ${i} = ${base*i}\n`)
        }

        if( list ) {
            console.log(`
            ==================
                TABLA del ${base}
            ==================
            `.blue)
            console.log(`${output}`.red)
        }
    
        fs.writeFileSync(`./output/tabla-${base}.txt`, output)
        resolve(`Tabla del ${base} creada correctamente.`.cyan)
        reject(`Tabla del ${base} no pudo ser creada.`.red)
    })
}

module.exports = {
    crearArchivo
}