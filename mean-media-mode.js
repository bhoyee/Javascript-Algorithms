 /** Mean Median Mode algorithm

It algorithm will take number of array as parameter and it will return an object that have 3 properties in it which are the mean media and mode.

To build this algorithm , 4 functions will be created 
 (getMean(array), getMedian(array), getMode(array), meanMedianMode(array)) ***/


//return an object that mode mean, median , mode on it
function meanMedianMode(array) {

    return  {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    };

}


function getMean(array) {
//declear variable and set it zero
 var sum = 0;
 // loop thru every number in the array and add it to the sum
 array.forEach(num => {
    sum += num;
 });
 // to get the mean , we need to devide the sum by number of element in the array
  var mean = sum / array.length;
  
  //return mean
  return mean;
}

function getMedian(array) {

}

function getMode(array) {
    
}