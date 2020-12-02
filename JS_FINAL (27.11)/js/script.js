
let number1;
let number2;
let result;

var div = document.getElementById('wrapper');

div.addEventListener('click', function (event) {
    switch (event.target.className) {
        case "plus":
            number1 = +document.getElementById("number1").value;
            number2 = +document.getElementById("number2").value;
            result = document.getElementById("result").textContent = "Result: " + (number1 + number2);
            break;
        case "minus":
            number1 = +document.getElementById("number1").value;
            number2 = +document.getElementById("number2").value;
            result = document.getElementById("result").textContent = "Result: " + (number1 - number2);
            break;
        case "mult":
            number1 = +document.getElementById("number1").value;
            number2 = +document.getElementById("number2").value;
            result = document.getElementById("result").textContent = "Result: " + (number1 * number2);
            break;
        case "div":
            number1 = +document.getElementById("number1").value;
            number2 = +document.getElementById("number2").value;
            result = document.getElementById("result").textContent = "Result: " + (number1 / number2);
            break;
    }

});



