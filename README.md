# JavaScript-Week-3

Working on stuff for this week and making changes for git so I can make more commits often.

Week two questions: 

1. How to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

Week two W.I.L. :

1. Putting a return statment in your function will stop the function on the first return it hits.

>>>Week 3 research<<<

5  methods you can use on an array: 

includes() - This method can be used on an array to see if the array includes a specific value by returning true if the  value asked for is in the array or returning false if the array does not include the value. This would be useful for when you want your program to split in different directions depending on if an array includes a specific value or not.Maybe you want your program to do something if the array includes or does not include the value. 
toString() - This method can be used on an array to return the values in that array as one big string. This could be useful if you ever wanted to display the contents of an array in an alert message or something to an end user. Or if you needed to convert any value in your array to a string. Maybe you have a scoreboard as an array and want to print out the scoreboard for an end user to see. 
indexOf() - This method will return the position in the array where the passed in value appears for the first time. It is possible to pass in a number after the value in the situation you may want to see where that value appears multiple times. An array may have the number 2 in it and you want to know where it appears for the second time, you could pass in nameOfArray.indexOf(2, 2) . This method also uses the === triple equals operator so what you’re looking for needs to be the same type and value
.push() - This method is used to add more objects on the end of an array. It will also return the lengths of the array with the new addition. This is useful for when you need to add more elements to your array. Maybe you have an array that’s a player’s hand of cards and you want to deal more cards to them, using the .push method here would be a perfect situation. 
.pop - This method will remove the last element in the array and it will return the removed element only. This would be useful if you wanted to remove an element off the end of an array as it will remove the last element of the array you use it on. To use the playing cards example this could be useful if you wanted to draw cards from an array that was the pile of cards that players would draw from. Comboing push and pop would be perfect for drawing cards and adding them to a player’s hand. 


What is the difference between == and ===? 

	The == operator and the === operator are both going to compare two elements and return a boolean value. The major difference is that === will compare the two using strict comparison where the value and the type need to be the same. When using == to compare 5 the number or “5” the string == will convert the string to a number and return true, this is called typed conversion. Triple comparison === will expect both sides in that situation to be either numbers or strings in order to return a true value. 
