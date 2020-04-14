
//let assume noteTest and magazineTest are lowercase with no punctuation
function harmlessRansomeNote (noteTest, magazineText) {

    //convert the parameters to array
    let noteArr = noteTest.split(' ');
    let magazineArr = magazineText.split(' ');
    let magazineObj = {};

    magazineArr.forEach( word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    console.log(magazineObj);

    //check if neccessary words available 
    let noteIsPossible = true;
    noteArr.forEach(word => {
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

harmlessRansomeNote('simple test', 'this i just a simple test');