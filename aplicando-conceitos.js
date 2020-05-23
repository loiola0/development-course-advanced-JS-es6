//EventEmitter->deixa o código mais estruturado

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data){
        this.emit('User Logged', data);
    }
}

const users = new Users();

users.on('User logged',data =>{
    console.log(data);
});

users.userLogged({user: 'Victor Gabriel'});

