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

let Instruments = ["Guitar", "Bass", "Flute", "Drums", "Piano", "Violin"];
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

function constant_function() {
    const Fruit = {type:"Apple", flavor:"Pink Lady", color:"pink"};
    Fruit.price = "$1.99";
    document.getElementById("Constant").innerHTML = "The cost of the " + Fruit.flavor + Fruit.type + " was " + Fruit.price;
}

document.getElementById("Return").innerHTML = myFunction("Lily");
function myFunction(name) {
    return "hello " + name;
}

let instrument = {
    type: "piano",
    brand: "Yamaha",
    color: "black",
    material: "wood",
    description: function() {
        return "The instrument is a " + this.color + this.material + this.type + " made by " + this.brand;
    }
};
document.getElementById("Instrument_info").innerHTML = instrument.description();

let text = "";
for (let i = 3; i < 9; i++) {
    if (i === 7) { break; }
    text += "The number is " + i + "<br>";
}

document.getElementById("Count").innerHTML = text;

let text2 = "";
for (let v = 3; v < 9; v++) {
    if (v === 7) { continue; }
    text2 += "The number is " + v + "<br>";
}

document.getElementById("Count2").innerHTML = text2;