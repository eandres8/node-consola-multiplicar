const fs = require('fs');

let crearArchivo = ( base ) => {

    return new Promise( (resolve, reject) => {

        if(!Number(base)) {
            reject(`El valor introducido ${base} No es un número válido`);
            return;
        }

        let texto = '';

        for (let i = 1; i <= 10; i++) {
            texto += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, texto, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    } );
}

module.exports = {
    crearArchivo
}