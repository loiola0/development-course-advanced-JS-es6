//fetch serve para fazer requisições, utliza-se promises

fetch('/data.json')
   .then(responseStream => {
      if( responseStream.status === 200){
        return responseStream.json();
      }else{
        throw new Error('Request Error');
      }
})
   .then(data => {
    console.log(data);
   })
   //só cai aqui se der um erro de rede
   .catch(err => {
    console.log('Error: ',err);
   })
