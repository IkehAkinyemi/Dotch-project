let bodyUi = document.body;
console.log(bodyUi);

bodyUi.addEventListener('touchstart', this.touchstart);
bodyUi.addEventListener('touchmove', this.touchmove);

function touchstart(e) {
    e.preventDefault()
}

function touchmove(e) {
    e.preventDefault()
}