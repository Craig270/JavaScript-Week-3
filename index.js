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
    // console.log(ages[i])
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

for (var i = 0; i < names.length; i++);