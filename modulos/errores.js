function otraFuncion() {
  return seRompe();
}
function seRompe() {
  return 3 + Z;
}
function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + G;
    } catch (err) {
      console.error('Error en mi funcion asincrona');
      cb(err);
    }
  });
}

try {
  seRompe();
  seRompeAsincrona((err) => {
    console.log(err.message);
  });
} catch (err) {
  console.error('algo se a roto');
  console.error(err.message);
  console.log('Pero no te preocupes, lo hemos capturado');
}
console.log('esto de aqui esta al final');
