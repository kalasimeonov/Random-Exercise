/*
Write a JS program to reverse the order of the characters in a string.
Try to solve it on a single line.
-----------------------------------------------------------
Expected Output - A string
-----------------------------------------------------------
reverseString('foobar') => 'raboof'
reverseString('meow') => 'woem'
reverseString(null) => Error
-----------------------------------------------------------
Defend the program against bad inputs!
*/

const sampleInput = 'foobar';

function reverseString(str) {
  if(str === String){
    return str.split("").reverse().join("");
  }
  
  return "Bad input! Please enter a string!";
}

reverseString(sampleInput);
