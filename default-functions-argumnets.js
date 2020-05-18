//quando um argumento é omitido a função utiliza um valor padrão que 

//encontra-se na assinatura da função.

function multi(a,b=1){
    return a*b;
}


console.log(multi(7,4));



//lazy evaluation

//um novo valor é gerado toda vez que o segundo argumento é omitido.

function randNumber(){
    return Math.random() * 10;
}

function multi2(a,b=randNumber()){
    return a*b;
}

console.log(multi2(5));
console.log(multi2(5));