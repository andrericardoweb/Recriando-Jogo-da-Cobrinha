let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //This reference will cover the properties and methods of the object, which can be used to draw text, lines, boxes, circles
let box = 32;

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();