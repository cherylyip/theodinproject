const body = document.querySelector("body");
const restart = document.querySelector("#restart");

const contain = document.createElement('div');
contain.setAttribute('id', 'container');
body.insertBefore(contain, body.firstElementChild.nextSibling);

for (i = 0; i < 256; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('gridBox');
    gridBox.style.flexBasis = '6%';
    contain.appendChild(gridBox);
}

const boxes = document.querySelectorAll('.gridBox');
boxes.forEach((box) => {
    box.addEventListener('mouseover', (e) => {
        e.target.style.background = 'black';
    })
})

const container = document.querySelector("#container");

function randomColour() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
    return rgb;
}

function colorIn() {
    let currentOpacity = +this.style.opacity;
    if (currentOpacity < 1) currentOpacity += 0.1;
    this.style.opacity = currentOpacity;
}

restart.addEventListener('click', (e) => {
    let gridW = prompt("Enter a new grid size.");
    container.innerHTML = "";
    if (gridW > 100) {
        gridW = 100;
    }
    //let flexAmount = Math.floor(100/gridW) + '%';
    let square = (960/gridW - 2) + 'px';
    console.log(gridW);
    for (i = 0; i < (gridW * gridW); i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridBox.setAttribute(
            "style",
            `
                opacity: .1;
                width: ${square};
                height: ${square};
            `
        );
        contain.appendChild(gridBox);
    }
    const boxes = document.querySelectorAll('.gridBox');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', colorIn);
        //box.addEventListener('mouseover', (e) => {
        //    e.target.style.background = colorIn();
        //})
    })
})






