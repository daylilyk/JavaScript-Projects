function full_sentence() {
    var part_1 = "The world ";
    var part_2 = "is a ";
    var part_3 = "beautiful place. "
    var part_4 = "What a time "
    var part_5 = "to be alive."
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Earth").innerHTML = whole_sentence;
    whole_sentence.search("beautiful");
}
function slice_method() {
    var Sentence = "The Earth is a beautiful place.";
    var Section = Sentence.slice(4,10);
    document.getElementById("Slice").innerHTML = Section;
    console.log(Sentence.toUpperCase());
}
function string_Method() {
    var x = 90;
    document.getElementById("number_to_string").innerHTML = x.toString();
}
function precision_Method() {
    var y = 314.1567497639937;
    document.getElementById("Precision").innerHTML = y.toPrecision(5);
}
function fixed_Method() {
    var z = 65.3275;
    document.getElementById("Fixed").innerHTML = z.toFixed(1);
}
function value_Method() {
    text= "Hi there!";
    document.getElementById("Value").innerHTML = text.valueOf();
}