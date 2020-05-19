//Destructuring Assigment

var [fruta1,fruta2,fruta3] = ['abacate','banana','cajú'];

console.log(fruta1 , fruta2, fruta3);


//com objetos

const obj = {
    name: 'Victor',
    age: '19',
    favoriteColor: 'white'
};


const {name} = obj;

console.log(name);

const [{university:faculdade}] = [{university: 'UFC', note:5}];

console.log(faculdade);

//com funções

function multiplicar({a=1,b=1}){
    return a*b;
}

console.log(multiplicar({a:5}));

//com niveis

const obj2  = {
    nome: 'Victor',
    age: '19',
    skill: ['javascript','html','react'],
    favoriteColors:{
        color1:'blue',
        color2:'black'
        
    }
}

const {favoriteColors:{color1:azul1}} = obj2;

console.log(azul1);