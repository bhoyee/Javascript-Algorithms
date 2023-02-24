// Binary Search Algorithm
// Allow user to search for a given value (key) inside  of a list

// This binary search algorithm will be written as a recrusive function

// NB: When a function called it self is called recrusive. recrusion function will continue to call it self until the base is satify

// example of recrusion

function factorial(num){
    //this the base
    if(num === 1){
        return num
    }
    // this the recrusion
    else{
        return num * factorial(num - 1)
    }
}

factorial(6)

//working on  binary search 
function binarySearch(numArray, key) {
    var middleIndex = Math.floor(numArray.length / 2);
    var middleElement = numArray[middleIndex];

    if (middleElement === key) return true;
    else if (middleElement < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIndex, numArray.length), key);
    }
    else if (middleElement > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIndex), key);
    }
    else return false;
}

binarySearch([3,5,8,9,12,15,78,99,102,107], 99);