let number = 16461

number = number + "";

reversenumber = number.split("").reverse().join('');

console.log ("The number if reversed is: " + reversenumber);

if (number == reversenumber)
    console.log("Yes, this is a palindrome");
else
    console.log("Nope! It isnt a palindrome");