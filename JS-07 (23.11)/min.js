const li = document.querySelectorAll('li'),
    btn = document.querySelector('button'),
    elementById = document.getElementById("text"),
    hideTextBtn = document.getElementById("hiddenTextButton"),
    hideBtn = document.getElementById("hiddenButton"),
    a = document.querySelectorAll("a"),
    regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
button = document.getElementById("button");



btn.addEventListener('click', () => {
    li.forEach(function (item) {
        item.innerHTML = "Something";

    });
});
console.log(`К-сть елементів li = ${li.length}`);



hideTextBtn.addEventListener('click', () => {
    if (elementById.hidden == false)
        elementById.hidden = true;
    else
        elementById.hidden = false;

});

hideBtn.addEventListener('click', () => {
    hideBtn.hidden = true;
});


button.addEventListener('click', () => {
    for (let i = 0; i < a.length; i++) {
        if (a[i].text.match(regex))
            a[i].classList = 'external-red';
    }
});