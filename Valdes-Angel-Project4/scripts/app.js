(function () {
    //get all radio buttons
    var radios = document.getElementsByName("rate");
    //connect the same function listener to all radio buttons click event
    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener("click", function (source) {
            if (source.currentTarget.id == "amazing") {
                message.innerHTML = "Great choice!";
            } else {
                message.innerHTML = "Grrr...!";
            }
        });
    }
})();