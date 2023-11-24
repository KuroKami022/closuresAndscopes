// var
var a; //declaration
var b = 'b'; //asign / declaration
var b = 'bb'; //reasign
var a = 'aa'; //redeclaration

// Global Scope
var fruit = 'apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'colombia'
    console.log(country);
}

countries();
console.log(country);