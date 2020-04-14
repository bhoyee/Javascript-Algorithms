/** 
* Is Palindrome Algorithm 
* This take in a string as an arg and return true if its Palindrome 
  and return false if not Palindrome
* 
* What is Palindrome ?  Is any word or phrase that spell the same way
  both in backward and forward. e.g race car is Palindrome

  * I will be using Array, String manipulation and 
  Methods to solve this Algorithm

  Just to clarify, when determine a phase is a Palindrome, we ignore
any punctuation chatacters like apostrophe, commas etc
*/

function isPalindrome(string) {
    
    //turn every letter in string to lowercase
    string = string.toLowerCase();

    //turn our lowercase string to array of characters
    let charactersArr = string.split('');

    //make array of any character that will be allow in our string
    let validCharacters = 'abcdefghijklmnopqrstuvwz'.split('');

    //loop and remove any characters or string that are not letter
    let lettersArr = []

    charactersArr.forEach(char => {
        if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    //compare if lettersArr are the same both backward and farward
    if(lettersArr.join('') === lettersArr.reverse().join('')) return true;
    else return false;
}
console.log(isPalindrome("Step on no pets"));