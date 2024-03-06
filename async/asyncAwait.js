async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hola, ' + nombre, '!!!');
      resolve(nombre);
    }, 1000);
  });
}
async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios, ' + nombre, '!!!');
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Estoy hablando...');
      //resolve(nombre);
      resolve(nombre);
    }, 1000);
  });
}
async function main() {
  let nombre = await hola('Moises');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  setTimeout(() => {
    console.log('Terminamos el proceso.');
  }, 1000);
}
console.log('Empezamos el proceso!!!');
main();
