// Symbols são uma maneira de gerar indentificadores únicos.
//são imutáveis
//não é uma propriedade privada.

const uniqueId = Symbol();

// Well known symbols

/*
    Symbol.iterator;
    Symbol.split;
    Symbol.toStringTag;

*/

const arr = [1,2,3,4];

const it = arr[Symbol.iterator]();

while (true){
    let {value,done} = it.next();
    
    if(done){
        break;
    }

    console.log(value);
}

console.log('\n');

//Generators são funções com pausas


const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator](){
        for(var i = 0;i<this.values.length;i++){
            yield this.values[i];
        }
    }

}

for(let value of obj){
    console.log(value);
}

console.log('\n');


function* hello(){
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;

    console.log('Function');
    yield 3;
}

const ite = hello();

console.log(ite.next());
console.log(ite.next());
console.log(ite.next());