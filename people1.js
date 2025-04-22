const getFullName = require('./names1.js');
const getHobbies = require('./hobbies1.js');

const getInfo = () => {
    return {
        fullName: getFullName('Giovanbattista', 'Damico'),
        hobbies: getHobbies('Musica', 'Calcio', 'Passeggiate')
    }
}

console.log(getInfo());
