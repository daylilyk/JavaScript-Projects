//Refers to first sentence of html page//
function get_Date() {
    if (new Date().getMinutes()) {
        document.getElementById("Date").innerHTML = "Do you know the time?";
    }
}
//Global and local variable practice//
function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    var x = 10;
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

//Bookworm calculator//
function Book_function() {
    Books = document.getElementById("Books"). value;
    if (Books >= 8) {
        Score = "You're a bookworm, yay!"
    }
    else if (Books >= 3) {
        Score= "Not a bookworm, glad you're still reading!"
    }
    else {
        Score = "It's good to read, try audio books if reading isn't accessible!"
    }
    document.getElementById("How_many_books?").innerHTML = Score;
}