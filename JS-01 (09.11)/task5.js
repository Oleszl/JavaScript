let a = 1;
let b = 1;
let n = prompt("Enter count of Fibonacci digit");

    for(let i=0;i<n;i++){
        let c = a + b;
        a = b;
        b = c;
        alert(b);
    }