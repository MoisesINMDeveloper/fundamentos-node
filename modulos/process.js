//const process = require('process');

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
})
process.on('exit', () => {
    console.log('Israel, el proceso acabó')
});

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error')
    console.error(err)
    setTimeout(()=> {
        console.log('Esto viene desde las excepciones')
    },1000)
});
provocandounerror();

console.log('Esto deberia de aparecer si se coge el error')