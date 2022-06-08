// name after function describes operation used.
function addition() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition
}
function subtraction() {
    var subtraction= 2 - 2;
    document.getElementById("Math1").innerHTML= "2 - 2 = " + subtraction;
}

function multiplication() {
    var simple_Math = 3 * 3 * 3;
    document.getElementById("Math2").innerHTML= "3 x 3 x 3 =" + simple_Math;
}

function division() {
    var simple_Math = 33 / 3;
    document.getElementById("Math3").innerHTML= "33 / 3 =" + simple_Math;
}

function more_Math() {
    var simple_Math = (2 + 2) * 2 / (3*3*3);
    document.getElementById("Math4").innerHTML= "2 (1 + 2) / (3 x 3 x 3) = " + simple_Math
}

function remainder() {
    var simple_Math = 333 % 222;
    document.getElementById("Math5").innerHTML = "When dividing 333 by 222 you have a remainder of: " + simple_Math;
}

function negation() {
    var x = 444;
    document.getElementById("Math6").innerHTML = -x
}

function increment() {
    var y = 5
    y++;
    document.write(y);
}

function decrement() {
    var z = 5.25;
    z--;
    document.write(z);
}

function random() {
    window.alert (Math.random()* 100);
}

function object() {
    document.getElementById("Math7").innerHTML = Math.PI
}