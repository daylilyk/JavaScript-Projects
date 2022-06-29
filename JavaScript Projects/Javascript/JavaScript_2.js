function validateForm() {
    let x = document.forms["Contact_form"]["flname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else {
        alert("Thank you for your submission");
    }
    //pron does not work, need to figure out 
    let y = document.forms["Contact_form"]["Pron"].value;
    if (y=="") {
        alert("Pronouns must be filled out");
        return false;
    }
    else {
        alert("Thank you for your submission");
    }
  }
