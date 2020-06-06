const parametros = {
    base: {
        required: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', parametros)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', parametros)
    .argv;

module.exports = {
    argv
}