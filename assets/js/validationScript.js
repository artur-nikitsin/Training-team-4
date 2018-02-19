function validate() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var status = false;

    if (name.length < 2) {
        console.log(name);
        document.getElementById("nameStatus").innerHTML =
            " <img src='../img/unchecked.gif'/> Please enter your name";
        status = false;
    } else {
        document.getElementById("nameStatus").innerHTML = " <img src='../img/checked.gif'/>";
        status = true;
    }
    if (surname.length < 3) {
        document.getElementById("surnameStatus").innerHTML =
            " <img src='../img/unchecked.gif'/> bad";
        status = false;
    } else {
        document.getElementById("surnameStatus").innerHTML = " <img src='../img/checked.gif'/>";
    }
    return status;
}