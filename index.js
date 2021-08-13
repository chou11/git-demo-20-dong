var box = document.querySelector('div');
var h = document.querySelector('h1');
var p = document.querySelector('p');
let m = 1;

p.onclick = function () {

    switch (m % 3) {
        case 2:
            p.className = "";
            p.className = 'three';
            m++;
            break;
        case 1:
            p.className = "";
            p.className = 'tow';
            m++;
            break;
        case 0:
            p.className = "";
            p.className = 'one';
            m++;
            break;
    }
}