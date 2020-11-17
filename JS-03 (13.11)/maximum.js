function find(arr, value) {
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
        console.log("Index: "+i);
        }
        else
        console.log("-1");

    }
}

let array = [10, 15, 18, 55, 99, 88, 55, 0];
find(array, 188);

function filterRange(array, a, b) {
    let newArray = [];
    for (let i = a; i <= b; i++) {
        newArray.push(array[i]);
    }
    console.log("New array: " + newArray);

}
filterRange(array, 3, 5);

function filterRange2(array, a, b){
    let newArray2 = [];
    newArray2 = array.slice(a,b);
    console.log(newArray2);

}
filterRange(array, 3, 5);

let text = "my-short-string";

function camelize(str) {
    let wordArray = str.split('-');
    for (let i = 0; i < wordArray.length; ++i) {
        let charArray = wordArray[i].split("");
        charArray[0] = wordArray[i].charAt(0).toUpperCase();
        wordArray[i] = charArray.join("");
    }
    str = wordArray.join("");
    return str;
}

console.log(camelize(text));