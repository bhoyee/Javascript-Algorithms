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