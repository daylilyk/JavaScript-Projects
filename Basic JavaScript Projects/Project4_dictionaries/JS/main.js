function my_dictionary() {
    var Instrument = {
        Type: "Guitar",
        Connection: "Electric",
        Wood: "Oak",
        Color: "Brown",
        Quantity: 5,
        Brand: "Ibanez",
        Sound:"Basic tuning",
    };
    delete Instrument.Brand;
    document.getElementById("Dictionary").innerHTML = Instrument.Brand;
}