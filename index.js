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