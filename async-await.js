//-ES7-Async/Await é uma forma de criar promises de maneiras mais simples.

//só o fato de colocar o async na função já transforma ela em uma promise.

// await esperar que outras promises sejam resolvidas.
 

const asyncTimer = () => new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve(12345);
    },1000);
});


const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJson = await fetch('/data.json').then(resStream => resStream.json());

    return dataJson;

  /*
    //Assicrono paralelo(processa as promises em paralelo)

    const data = await Promise.all([asyncTimer(),fetch('/data.json').then(resStream => resStream.json())]);
    return data;
    */

}

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
