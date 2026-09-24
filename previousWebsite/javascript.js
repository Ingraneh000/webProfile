function changeColor(element) {
		        var color = prompt("Enter a color:");
		        if (color) {
		            element.style.backgroundColor = color;
		        }
		    }
var background = document.getElementById("background");
document.addEventListener("keydown", switchColor);
function switchColor() {
    background.style.backgroundColor = "blue";
}
/*Used Google for the rotation*/
var pokemonImage = document.querySelector(".pokemon-image");

let degrees = 0;
setInterval(() => {
    degrees = degrees + 20;
    pokemonImage.style.transform = "rotate(" + degrees + "deg)";

}, 1000);