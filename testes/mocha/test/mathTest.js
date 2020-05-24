const assert = require('assert');

const Math = new require('../src/math.js');

let value = 5;

describe('Math class', function(){

    //it descreve um comportamento esperado.

    //skip utilizado para pular um teste.
    //only utilizado para realizar apenas aquele teste.

    //hooks->são formas de executar código e evitar repetição.

    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done) {
        this.timeout(3000);
        const math = new Math();
        
        value = 5;

        math.sum(value,5, value =>{
            assert.equal(value,10);
            done();
        });

    });

    it('Multiply two numbers', function () {
        const math = new Math();

        math.multi(value,5,value =>{
            assert.equal(value,0);
        });

    });
});