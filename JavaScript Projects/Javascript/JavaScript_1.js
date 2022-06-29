function Fruit_function() {
    var Fruit_output;
    var Fruits = document.getElementById("Fruit_input").value;
    var Fruit_string = "?? What do you mean? Wrong choice! All jokes, we all have out quirks. :3";
    switch(Fruits) {
        case "Grapes":
            Fruit_output = "Grapes" + Fruit_string;
        break;
        case "Banana":
            Fruit_output = "Banana" + Fruit_string;
        break;
        case "Apples":
            Fruit_output = "Apples" + Fruit_string;
        break;
        case "Tomato":
            Fruit_output = "Tomato" + Fruit_string;
        break;
        case "Lime":
            Fruit_output = "Lime" + Fruit_string;
        break;
        default:
            Fruit_output = "Please enter a fruit written exactly as above.";
    }
    document.getElementById("Output").innerHTML = Fruit_output;

}

function Fruit_change() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "What is your favorite fruit?";
}

function Fruit_change1() {
    var B = document.getElementsByClassName("Click1");
    B[0].innerHTML = "Pick your favorite fruit from this list:";
}

var c = document.getElementById("Canvas_ex");
var ctx = c.getContext("2d");
ctx.font = "18px Arial";
ctx.strokeText("Thank you!", 10, 30);

var d = document.getElementById("Canvas_ex2");
var dtx= d.getContext("2d");
var grd = dtx.createLinearGradient(0,0,75,0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

dtx.fillStyle = grd;
dtx.fillRect(10,10,70,50);
