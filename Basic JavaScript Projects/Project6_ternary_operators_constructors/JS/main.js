function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You're not old enough":"You're old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; 
}