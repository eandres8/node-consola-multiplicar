const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', {
                    base: {
                        required: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${ archivo }`) )
            .catch( error => console.log(error) );
        break;

    default:
        console.log('comando no reconocido');
        break;
}



// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
