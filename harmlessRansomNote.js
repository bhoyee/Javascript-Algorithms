

function harmlessRansomeNote (noteTest, magazineText) {
    //turn noteTest & magazineText to lowercase
    noteTest = noteTest.toLowerCase();
    magazineText = magazineText.toLowerCase();
    
    //convert the parameters to array
    let noteArr = noteTest.split('');
    let magazineArr = magazineText.split('');
   
    //make array of any character that will be allow in our string
    let validCharacters = 'abcdefghijklmnopqrstuvwz'.split('');

    let newNoteArr = [];
    noteArr.forEach(char => {
        if(validCharacters.indexOf(char) > -1) newNoteArr.push(char);
       });
      
    let newMagazineArr = [];
    magazineArr.forEach(magazine => {
        if(validCharacters.indexOf(magazine) > -1) newMagazineArr.push(magazine);
    });
    
    let magazineObj = {};

    newMagazineArr.forEach( word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

 
    //check if neccessary words available 
    let noteIsPossible = true;
    newNoteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if(magazineObj[word] < 0 ) noteIsPossible = false;
        } 
        else {
            noteIsPossible = false;
        }
    });

    return noteIsPossible;
}

console.log(harmlessRansomeNote('simple testz', 'this is just a SIMPLE,.,  We good to go ,z right'));