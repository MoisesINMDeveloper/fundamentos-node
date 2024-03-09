const fs = require('fs');

function leer(ruta, cb) {
  fs.readFile(ruta, (data) => {
    //Leido
    cb(data.toString());
  });
}
leer(__dirname + '/archivo1.txt', console.log);

function escribir(ruta, contenido) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error('No he podido escribirlo');
    } else {
      console.log('Se ha escrito correctamente');
    }
  });
}
escribir(__dirname + '/archivo1.txt', 'Soy un nuevo archivo', console.log);

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

borrar(__dirname + '/archivo1.txt', console.log);
