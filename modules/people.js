const nome = require('./modules/names.js');
nome();

const hobby = require('./modules/hobbies.js');
hobby();

function people(){
    nome();
    fullName = firstName + "" + lastName ;
    console.log(fullName);
}

module.exports = people;