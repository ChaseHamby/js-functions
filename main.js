const bananaDiv = document.getElementById('banana');
bananaDiv.innerHTML = 'Im a banana';

let counter = 0;
counter = counter +1;
counter += 1;
counter ++
//counter = 3

console.log('counter: ', counter);

const greetingElement = document.getElementById('greeting');
const firstName = 'Chase';
const lastName = 'Hamby';
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

//object shorthand notation
let name = 'callan';
let age = '100000';

let person = {name, age};

console.log('person:', person.name);