
// This algorithm is called two sum . 
// The twoSum will take in two parameters, one will be  number array(numArray) and the second will be called sum.
// The algorithm should returns every pair of numbers from 'numArray' that adds up the 'sum'.
// example numArray = [1,6,4,5,3,3] and sum = 7
// result = [[6,1],[3,4],[3,4]].

// rules of the algorith
// 1. Result should be an array of arrays
// 2. Any number in the 'numArray' can be used in multiple pairs

function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([ currNum, counterpart ]);
    }
    hashTable.push(currNum);
  }
  
  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);