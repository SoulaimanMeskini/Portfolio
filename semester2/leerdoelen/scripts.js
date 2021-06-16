var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter > 3) {
        counter = 1;
    }
}, 6000)


var counter1 = 1;
setInterval(function() {
    document.getElementById('radio-a' + counter1).checked = true;
    counter1++;

    if (counter1 > 5) {
        counter1 = 1;
    }
}, 6000)