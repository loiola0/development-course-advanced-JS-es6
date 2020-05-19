// rest operator ...

//Funciona o contrário ao Spread Operator,  pega os parâmetros e transforma em um array.

function soma(...args){
    return args.reduce((acc,value) => acc+value,0);
}

console.log(soma(4+2+2));