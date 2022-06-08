//text before button
var A= "I dare you to press the button"
document.write(A)
// Button text after user clicks
function silly_little_function() {
    var sentence = "So brave";
    sentence += " of you!";
    document.getElementById("concatenate").innerHTML = sentence;
}