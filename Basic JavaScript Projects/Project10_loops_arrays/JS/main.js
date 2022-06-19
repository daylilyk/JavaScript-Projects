function Call_Loop() {
    var Digit="";
    var X = .25;
    while (X < 3) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function Check_Length() {
    let text = "hello world";
    let length = text.length;
    document.getElementById("Length").innerHTML= length;
}

var Instruments = ["Guitar", "Bass", "Flute", "Drums", "Piano", "Violin"];
var Content = "";
var Y;
function for_Loop() {
    for (Y= 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content
}

function Cat_Pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}