const htttp = require('http'); // importamos el modulo
// es recomenado no inicializar la funcion aquñi por los callbacks
http
  .createServer((req, res) => {
    // se le da 2 parametros request y response
    console.log('nueva peticion');
    console.log(request.url); // imprimimos la url de la petición

    //escribir respuesta al usuario
    res.write('hola ya se responer');
    // escribir en la cabezara
    res.writeHead(201, { 'Content-Type': 'text/plain' }); // codigo de autenricación y el
    // tipo de contentido
    res.edn();
  })
  .listen(3000); // terminamos la petición y ponemos el puerto

switch (req.url) {
  case '/hola':
    res.write('\n\rHola desde la ruta' + req.url);
    res.end();
    break;
  default:
    res.write('\n\rError 404');
    res.end();
}
console.info('escuchando 3000');
