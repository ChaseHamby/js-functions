// input = animal ex. fish
// output = animal product ex. fish sticks

function nuggetizer(animal){
    return `${animal} sticks`;
}

const nuggetizer2 = (animal) => {
    return `${animal} jerky`;
};

console.log('deer:', nuggetizer2('deer'));


const nomnom = (person, food) => {
    return `${person} devoured ${food}`;
};

const bearSticks = nuggetizer('bear');

console.log(nomnom('Chase', bearSticks)); // Chase devoured bear sticks

// function called numberAdder that takes in a number and returns the number plus 3: so if input = 22, output = 25


const numberAdder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22);
numberAdder(2);
numberAdder(7245);

printToDom('Im ready for lunch', 'feelings');