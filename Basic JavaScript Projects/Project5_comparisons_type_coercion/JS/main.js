document.write(typeof(7) + "<br>");
document.write(typeof(null) + "<br>");
document.write(typeof("hello")+ "<br>");
document.write(5>3 && 9>5);
document.write(5<10 || 9<10);
document.write(10==11);

var result= (2e310);
console.log(2+2);
console.log(2<0);
document.getElementById("type").innerHTML = result;
function not_function() {
    document.getElementById("Not").innerHTML = !(35 > 40);
}