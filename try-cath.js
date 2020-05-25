class CustomError extends Error{
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}

try{
    const name = 'Victor Gabriel';

    const myError = new CustomError({
        message:'Custom Mensage',
         data:{
             type:'Server error'
            }
        });

 throw myError;
}catch(err){
    console.log('Error: ',err);
}finally{
    console.log('%c Seja Bem Vindo...','color:red; font-size: 40px');
}

