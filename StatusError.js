var id = null;
function animation() {
    var logo = document.getElementById("logo");
    var container = document.getElementById("container");
    var position = 0;
    clearInterval(id);
    let width = container.offsetWidth;
    console.log(width);
    id = setInterval(frame, 2);
    function frame() {
        if (position == width - 400) {
            clearInterval(id);
        } else {
            position++;
            logo.style.left = position + 'px';
        }
    }
}