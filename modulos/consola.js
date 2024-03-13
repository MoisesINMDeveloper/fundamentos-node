console.clear();
function funcion1() {
  console.group('funcion 1');
  console.log('esto es de la funcion 1');
  console.log('esto es de la funcion 1');
  console.log('esto es de la funcion 1');
  funcion2();
  console.log('esto es de la funcion 1');
  console.groupEnd('funcion 1');
}
function funcion2() {
  console.group('funcion 2');
  console.log('ahora estamos en la funcion 2');
  console.log('ahora estamos en la funcion 2');
  console.log('ahora estamos en la funcion 2');
  console.log('ahora estamos en la funcion 2');
  console.groupEnd('funcion 2');
}
console.log('empezamos');

funcion1();

