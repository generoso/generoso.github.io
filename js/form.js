function validateForm() {
    var r = validateField("Name", document.forms["contact-form"]["name"].value);
    r &= validateField("Email", document.forms["contact-form"]["mail"].value);
    r &= validateField("Message", document.forms["contact-form"]["message"].value);
    if (!r) {
        alert("Fill all the fields before sending the message!");
    }
    return r
}

function validateField(name, x) {
    if (x.trim()==null || x.trim()==""|| x===" ") {
        return false;
    }
    return true;
}
