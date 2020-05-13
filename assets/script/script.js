let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

filterSelection('all')
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName('column');
    if (c == 'all') c = '';
    for (i = 0; i < x.length; i++) {
        galleryRemoveClass(x[i], 'show');
        if (x[i].className.indexOf(c) > -1) galleryAddClass(x[i], 'show');
    }
}

function galleryAddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1) {element.className += ' ' + arr2[i];}
    }
}

function galleryRemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i =  0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
}

let btnContainer = document.getElementById('myBtnContainer');
let btns = btnContainer.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active3');
        current[0].className = current[0].className.replace(' active3', '');
        this.className += ' active3';
    });
}