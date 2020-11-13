function task1() {
    let user = {
        name: "Пилип",
        surname: "Шевченок",
    };
    console.log(user);
    user.name = "Сергій";
    delete user.surname;

    console.log(user);
}
task1();

function task2() {
    let employeeSalaries = {
        salary1: 8560.50,
        salary2: 9855,
        salary3: 15888,
    };
    let suma = 0;
    for (let key in employeeSalaries) {

        suma += employeeSalaries[key];
    }
    console.log(suma);

}
task2();

function task3(x, y, operation) {
    x = +prompt("Input x");
    y = +prompt("Input y");
    operation = prompt("Input operation");
    if (operation == "+")
        return console.log(x + y);
    else if (operation == "-")
        return console.log(x - y);
    else if (operation == "*")
        return console.log(x * y);
    else if (operation == "/")

    try{
        if ( y == 0 ){
           throw( "Division by 0" ); 
        }

        else
        {
           var c = a / b;
        }
     }
     
     catch ( e ) {
        alert("Error: " + e );
     }
}
task3();