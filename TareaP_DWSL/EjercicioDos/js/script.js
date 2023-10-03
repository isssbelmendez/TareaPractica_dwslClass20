var inputs = document.querySelectorAll("input, select");

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", function() {
        if (this.checkValidity()) {
            this.classList.remove("invalid");
            this.classList.add("valid");
        } else {
            this.classList.remove("valid");
            this.classList.add("invalid");
        }
    });
}

