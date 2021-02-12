'use strict'


var ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element in the array from the value in the last element of the array
var lastNum = (ages[ages.length - 1]);
var math = lastNum - ages[0];
console.log(math);

//Add a new age to array and repeat
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
console.log(sum / ages.length); //Average - Sum divided by the length of the ages array


//iterate through array and calculate average number of letters per name
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let i = 0;

let namesSum = 0;
while (i < names.length) {
    let singName = names[i];
    namesSum += singName.length;
    i++;
} console.log(namesSum / names.length);

// a loop to iterate through the array and concatenate all the names together, separated by spaces
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

var bigNamesList = " ";

for (var i = 0; i <= names.length - 1; i++) {
    bigNamesList += names[i] + " ";

};

console.log(bigNamesList)



//a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
var nameLengths = [];

for (var i = 0; i <= names.length - 1; i++) {
    nameLengths.push(names[i].length);
};
console.log(nameLengths);

//a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array
var nameLengthSum = 0;

for (var i = 0; i < nameLengths.length; i++) {
    nameLengthSum += nameLengths[i];
} console.log(nameLengthSum);


//function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times
function concatMe(word, n) {
    var bigWord = " ";
    while (n > 0) {
        bigWord += word;
        n--
    }
    console.log(bigWord);
    return bigWord;
}
concatMe("water", 15);

//function that takes two parameters, firstName and lastName, and returns a full name seperated by a space
function nameMaker(firstName, lastName) {
    console.log(firstName + " " + lastName);
    return firstName + " " + lastName;
}
nameMaker("Craig", "Neff")

//function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function biggerHundred(array) {
    let sum = 0
    for (var i = 0; i <= array.length - 1; i++) {
        sum += array[i];
    }
    if (sum > 100) {
        console.log('True')
        return true
    }
}

var bigArray = [10, 50, 30, 20, 10, 23, 80];
var smallArray = [1, 2, 3, 1];
biggerHundred(bigArray);



//function that takes an array of numbers and returns the average of all the elements in the array
function averageArray(array) {
    let sum = 0;
    let devilby = array.length;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum / array.length);
    return sum / array.length;
};

let fiftyFiv = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

averageArray(fiftyFiv);


//function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
function biggerArray(array1, array2) {
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }
    for (var i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }
    var sum1Average = sum1 / array1.length;
    var sum2Average = sum2 / array2.length;
    if (sum1Average > sum2Average) {
        console.log('true');
        return true;

    }

}

let fiftyFiv = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sixtyDotSix = [11, 22, 33, 44, 55, 66, 77, 88, 99, 111];

biggerArray(sixtyDotSix, fiftyFiv);


// function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket >= 10.51) {
        console.log('true');
        return true;
    }
}
willBuyDrink(true, 20)


//Takes a boolian if snow is on the ground, a number for snow amount in inches, and the last paramedter is the amount of people on the sledding hill. Console logs a short statment if you should go sledding or why you shouldn't.
function shouldWeSled(snowOnGround, inchOfSnow, numberPeople) {
    if (snowOnGround === true && inchOfSnow >= 3 && numberPeople < 20) {
        console.log('You should totally go sledding today!')
    } else if (snowOnGround === true && inchOfSnow < 3 || numberPeople > 20) {
        console.log('Today may not be a good day to go sledding because of the amount of people or the lack of snow.')
    } else if (snowOnGround === false) {
        console.log(`We need snow to go sleeding. Today is not a good day for sledding!`)
    }
}


shouldWeSled(true, 5, 9);
shouldWeSled(true, 3, 19);
shouldWeSled(true, 5, 21);
shouldWeSled(false, 0, 9);




