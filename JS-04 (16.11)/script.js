function compareInDescendingOrder(a, b) {
    return b - a;
}

function compareInAscendingOrder(a, b) {
    return a - b;
}
let array = [5, 8, -8, 1, 0, -6, 0, 22 - 5, 1 - 13, 55, 22, -99, -3];
console.log(array.sort(compareInAscendingOrder));
console.log(array.sort(compareInDescendingOrder));

let filterPositiveNumbers = array.filter(function (number) {
    return number >= 0;
});
let filterNegetiveNumbers = array.filter(function (number) {
    return number < 0;
});
console.log(filterPositiveNumbers);
console.log(filterNegetiveNumbers);

let task3 = function () {
    function makeStudent(age, groupName) {
        return {
            age: age,
            groupName: groupName
        };
    }
    let student1 = makeStudent(22, "CS");
    let student2 = makeStudent(20, "EC");
    let student3 = makeStudent(18, "DB");
    let student4 = makeStudent(18, "HT");
    let student5 = makeStudent(19, "YY");
    let student6 = makeStudent(21, "JJ");
    let student7 = makeStudent(22, "ER");

    let students = [student1, student2, student3, student4, student5, student6, student7];

    let studentGroupName = students.map(function (students) {
        return students.groupName;
    });
    console.log(`Only students group name: ${studentGroupName}`);

    let sumAge = students.reduce(function (sum, current) {
        return sum += current.age;
    }, 0);
    console.log(`Sum of students age = ${sumAge}`);

    function studentAgeCheck(student) {
        return student.age >= 18;
    };
    console.log(`All students is over 18 years? ${students.every(studentAgeCheck)}`);
};
task3();