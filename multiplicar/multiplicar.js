const fs = require('fs');
const colors = require('colors');

const listarTabla = ( base, limite=10 ) => {

    console.log("=======================================================".green);
    console.log(`=============== tabla de ${base} =====================`.green);
    console.log("=======================================================".green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);   
    }

}

let crearArchivo = ( base, limite = 10 ) => {

    return new Promise( (resolve, reject) => {

        if(!Number(base)) {
            reject(`El valor introducido ${base} No es un número válido`.red);
            return;
        }

        let texto = '';

        for (let i = 1; i <= limite; i++) {
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
    crearArchivo,
    listarTabla
}