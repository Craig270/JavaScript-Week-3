'use strict'

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

var lastNum = (ages[ages.length - 1]);
var math = lastNum - ages[0];
console.log(math);

ages.push(50);

var lastNum = (ages[ages.length - 1]);
var math = lastNum - ages[0];
console.log(math);



var ages = [3, 9, 23, 64, 2, 8, 28, 93];

let sum = 0
for (var i = 0; i <= ages.length - 1; i++) {
    console.log(ages[i])
    sum += ages[i];
}
console.log(sum); //All ages added up 
console.log(sum / ages.length); //Sum divided by the length of the ages array 



var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let i = 0;

let namesSum = 0;
while (i < names.length) {
    let singName = names[i];
    namesSum += singName.length;
    i++;
} console.log(namesSum / names.length);

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

var bigNamesList = " ";

for (var i = 0; i <= names.length - 1; i++) {
    bigNamesList += names[i] + " ";

};

console.log(bigNamesList)


var nameLengths = [];

for (var i = 0; i <= names.length - 1; i++) {
    nameLengths.push(names[i].length);
};
console.log(nameLengths);

var nameLengthSum = 0;

for (var i = 0; i < nameLengths.length; i++) {
    nameLengthSum += nameLengths[i];
} console.log(nameLengthSum);



function concatMe(word, n) {
    var bigWord = " ";
    while (n > 0) {
        bigWord += word;
        n--
    }
    return bigWord;
    console.log(bigWord);
}

concatMe("water", 15);

function nameMaker(firstName, lastName) {
    console.log(firstName + " " + lastName)
}


nameMaker("Craig", "Neff")

function biggerHundred(array) {
    let sum = 0
    for (var i = 0; i <= array.length - 1; i++) {
        sum += array[i];
    }
    if (sum > 100) {
        console.log('True')
    }
}


var bigArray = [10, 50, 30, 20, 10, 23, 80];
var smallArray = [1, 2, 3, 1];
biggerHundred(bigArray);









function averageArray(array) {
    let sum = 0;
    let devilby = array.length;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    } console.log(sum / array.length)
};

let fiftyFiv = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];



averageArray(fiftyFiv);














console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(`Everything below this line is test`);

var bigNames = ["Craig", "Jennifer", "Holden", "Moxie"];
var smallNames = " ";


for (let i = 0; i < bigNames.length - 1; i++) {
    console.log(bigNames[i]);
}

bigNames[0] + smallNames;

console.log(smallNames);