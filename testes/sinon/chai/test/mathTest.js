const assert = require('assert');

const Math = new require('../src/math.js');

const expect = require('chai').expect;

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
            expect(value).to.equal(10);
            done();
        });

    });

    it('Multiply two numbers', function () {
        const math = new Math();

        math.multi(value,5,value =>{
            expect(math.multi(value,5).to.equal(0));
        });
    });

    it('Check that the object has a property', function(){
        const obj = {name:'victor'};


        const obj2 = {name:'victor'};

        /* não passa
        expect(obj).to.have.property('age');
        
        passa
       expect(obj).to.have.property('name').equal('victor');

       */
        //passa
       expect(obj).to.deep.equal(obj2);

    });


});