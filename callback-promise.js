/*
//callback-> função que chama outra função-existe uma dependência entre
//entre as funções.

function doSomething(callback){
    setTimeout(function(){
        callback('First Data');
    },1000);
}

function doOtherthing(callback){
    setTimeout(function(){
        callback('Second Data');
    },1000);
}


function doAll(){

  try{
    doSomething(function(data){
        var processedData = data.split('');

        doOtherthing(function(data2){
            var processedData2 = data2.split('');

            setTimeout(function(){
                console.log(processedData,processedData2);
            },1000);
        });
    });
  }catch(err){
      //handle error
  }
    
}

doAll();
*/

//Promises-> Realiza processamentos e tratamentos de eventos ou ações assícronas

const myPromise = () => new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve('First Data');
    },1000);
});


const myOtherPromise = () => new Promise((resolve,reject)=>{
    throw new Error('Something error');
    setTimeout(function(){
        resolve('Second Data');
    },1000);
});

/*
//Promises permitem encadiar uma na outra 


myPromise()
    .then(data => {console.log(data.split('')); return myOtherPromise()})
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops! ',error));

*/

//
Promise.all([myPromise(),myOtherPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
});