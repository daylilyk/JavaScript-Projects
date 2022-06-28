function Fruit_function() {
    var Fruit_output;
    var Fruits = document.getElementById("Fruit_input").value;
    var Fruit_string = " is a fine fruit what do you mean! All jokes, we all have out quirks. :3";
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