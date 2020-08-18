/*
Write a JS program to extract a given value in a nested object, based on the given key.
If no such key exists, output undefined. It should work with arbitrary objects!
----------------------------------------------------
Expected Output - the value with the specified key
----------------------------------------------------
digDeeply(obj, 'bar') => { deep: 'some data' }
digDeeply(obj, 'deep') => 'some data'
digDeeply(obj, 'baz') => { qax: 'foo' }
digDeeply(obj, 'wut') => [1, 2, 3]
digDeeply(obj, 'gax') => 'max'
digDeeply(obj, 'nonExistent') => undefined 
----------------------------------------------------
Assume that the object wont have duplicate keys on different levels.
Defend the program against bad inputs like undefined, null, etc...!
 */

const obj = {
  foo: {
    bar: {
      deep: 'some data'
    }
  },
  baz: {
    qax: 'foo'
  },
  wut: [1, 2, 3],
  gax: 'max'
};

function digDeeply(obj, key) {
  // write your solution here
}

digDeeply(obj, 'deep');
