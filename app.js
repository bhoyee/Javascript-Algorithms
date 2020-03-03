/** 
* Fizz Buzz Algorithm 
* @vrsion 3.0.0
* @author Bhoyee
* @license MIT

*
*/

// fizzbuzz function 
function fizzbuzz(num) {
 
     //Check for number
     if(isNaN(num) || num === "") console.log("Enter a number");
     //loop from 1 to num
        for (let i = 1; i <= num; i++) {
            //check if number is divisible by both 3 and 5 
           if(i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
            // check if number is divisible by 3
           else if (i % 3 === 0) console.log("Fizz");
           // check if number is divisible by 3
           else if (i % 5 === 0) console.log("Buzz");
           //display numbers
           else console.log(i);
       }

    }
  
   