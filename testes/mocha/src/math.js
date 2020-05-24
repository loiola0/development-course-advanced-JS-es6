class Math {
    sum(a,b,callback) {

    setTimeout(() =>{
      callback(a+b);
    },2000);
     
    }

    multi(a,b){
       return a*b;
    }
}

module.exports = Math;