/*
Write a JS program to find the maximum difference
between any two adjacent integers in any array of integers
------------------------------------------------
Expected Output - An integer
------------------------------------------------
adjacentDiff(sampleInput1) => 1
adjacentDiff(sampleInput2) => 2
adjacentDiff(sampleInput3) => 8
------------------------------------------------
*/

const sampleInput1 = [1, 2, 3];
const sampleInput2 = [2, 2, 2, 5];
const sampleInput3 = [5, 12, 8, 16, 9, 11];

function adjacentDiff(array) {
  let currentMax = 0;
  for(let i = 1; i < array.length - 1; i++){
    if(Math.abs(array[i-1] - array[i]) > currentMax){
      currentMax = Math.abs(array[i-1] - array[i]);
    }
    else if(Math.abs(array[i+1] - array[i]) > currentMax){
      currentMax = Math.abs(array[i+1] - array[i]);
    }
  }
  return currentMax;
}

console.log(adjacentDiff(sampleInput1));
console.log(adjacentDiff(sampleInput2));
console.log(adjacentDiff(sampleInput3));
