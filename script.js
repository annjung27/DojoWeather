function sayWelcome(element) {
    alert("Welcome to " + element.innerText)
}

function remoCookie(id) {
    var element = document.querySelector(id);
    element.remove();
}

var selectTemp = document.querySelectorAll('.day-temp');

function convertUnit(element) {

    for (var i = 0; i < selectTemp.length; i++) {
        var degrees = selectTemp[i].innerText;
        if (element.value == 'F') {
            degrees = degrees * 9 / 5 + 32;
            selectTemp[i].innerText = Math.floor(degrees);
        } else if (element.value == 'C') {
            degrees = (degrees - 32) * 5 / 9;
            selectTemp[i].innerText = Math.floor(degrees);
        }
    }
}