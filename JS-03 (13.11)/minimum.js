function task1(){
    let products = ["Apple", "Pineapple", "Orange"];
    console.log("Last elements of array = " + products[products.length-1]);
}
task1();

function task2(){
    let styles = ["Джаз","Блюз"];
    styles.push("Рок-н-Ролл");
    styles[styles.length-2] = "Класика";
    console.log(styles);
    console.log(styles.shift());
    styles.unshift("Perri");
    styles.unshift("Реп");
    console.log(styles);
}
task2();
