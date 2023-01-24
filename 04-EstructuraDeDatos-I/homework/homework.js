'use strict';

// EJERCICIO 1
function nFactorial(n) {
if(n<0) return "No existe"
if(n === 0 || n === 1) return 1
return n * nFactorial(n-1)
}
// EJERCICIO 2
function nFibonacci(n) {
   if(n<0) return "No exitste"
   if ( n===0 || n===1 ) return n;
   return nFibonacci(n-1) + nFibonacci(n-2)
}



// EJERCICIO 3
function Queue() {
   this.elements = []
}

Queue.prototype.enqueue = function (value) {
   this.elements.push(value);
}
Queue.prototype.dequeue = function () {
   return this.elements.shift();
};
Queue.prototype.size = function () {
   return this.elements.length;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue, 
   nFactorial,
   nFibonacci,
};
