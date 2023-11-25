// var nameOfDog; // Declared but not defined = undefined

// console.log(nameOfDog);

// var nameOfDog = 'Elmo';

// console.log(nameOfDog);


// de-organized causing malfunction
nameOfDog();

function nameOfDog() {
    console.log(`The best doggo is ${elmo}`);
}

var elmo = 'Elmito';

// organized without hoisting

var elmo = 'Elmito';

function nameOfDog() {
    console.log(`The best doggo is ${elmo}`);
}

nameOfDog();