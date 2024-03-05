function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log("Iniciando proceso...");
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1000);
}
function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios, " + nombre);
    otroCallback();
  }, 1000);
}

hola(
  "Moises",
  function (nombre) {
    adios(nombre, function () {
      console.log("terminando proceso");
    });
  },
  2000
);
