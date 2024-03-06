function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, ' + nombre, '!!!');
      resolve(nombre);
    }, 1000);
  });
}
function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios, ' + nombre, '!!!');
      resolve();
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Estoy hablando...');
      //resolve(nombre);
      reject('¡Ha ocurrido un error!');
    }, 1000);
  });
}
// ---
console.log('Iniciando el proceso...');
hola('Moises')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    setTimeout(() => {
      console.log('Terminado el proceso.');
    }, 1000);
  })
  .catch((error) => {
    console.error('¡Ha ocurrido un error!');
    console.error(error);
  });
