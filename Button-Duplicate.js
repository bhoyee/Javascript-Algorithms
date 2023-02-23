/** 
* Button In Bunch 
* Add 20 Buttons to the page arranged in a row, 
  with indexex 1,2,3, ..., 20.
* 
* Clicking on a button should alert its index. For example, 
  clicking on the first button (the leftmost) should alert1,

  * and clicking on the last button (the rightmost)
    should similiary alert 20.
*/

window.onload = function() {
    for(var i = 1; i < 21; i++) {
        let button = document.createElement("button");
        let text = document.createTextNode(i);
        button.appendChild(text);
        button.addEventListener("click", function() {
           // get the clicked on button with this
           alert(this.firstChild.nodeValue); 
        });
        document.body.appendChild(button);
    }    
}