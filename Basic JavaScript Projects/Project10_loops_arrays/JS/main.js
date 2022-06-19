function Call_Loop() {
    var Digit="";
    var X = .25;
    while (X < 3) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}