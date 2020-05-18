/*arrow functions são funções anônimas(passadas via váriavel ou paramêntro de uma função)

Permite um código mais claro e mais enxurto.

não acontece hoisting.

*/


// function soma (a,b){
//     return a+b;
// }



// esta arrow function substitui a função acima(comentada).
var soma = (a,b) => a+b;

console.log(soma(5,7));

