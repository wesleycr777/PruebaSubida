'use strict';

function BinarioADecimal(num) {
   var decimal = 0;
   for (let i = 0; i < num.length; i++) {
     var valorAgregar = num[i] * 2 ** (num.length - 1 - i);
     decimal = decimal + valorAgregar;
   }
 
   return decimal;

}

function DecimalABinario(num) {
   var binario = [];
   while (num >= 1) {
     binario.unshift(num % 2);
     num = Math.floor(num / 2);

}
}
console.log(typeof DecimalABinario(12)); // "1100"

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
