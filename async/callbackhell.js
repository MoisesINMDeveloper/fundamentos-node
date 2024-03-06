function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log('Iniciando proceso...');
    console.log('Hola, ' + nombre, '!!!');
    miCallback(nombre);
  }, 1000);
}
function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios, ' + nombre, '!!!');
    otroCallback();
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Estoy hablando...');
    callbackHablar();
  }, 1000);
}
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}
//--
hola('Moises', (nombre) => {
  conversacion(nombre, 3, () => {
    console.log('Proceso terminado.');
  });
});

/*hola(
  'Moises',
  function (nombre) {
    hablar(() => {
      hablar(() => {
        hablar(() => {
          adios(nombre, function () {
            console.log('terminando proceso.');
          });
        });
      });
    });
  },
  2000
);*/
