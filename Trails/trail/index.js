const app = document.getElementById("app");
const mouseCircle = createCirle();
app.append(mouseCircle);

function createCirle(){
    const circle =document.createElement("div");
    circle.classList.add("circle");
    newColors(circle);
    return circle;
}
function placeCircle(circle){
    const copy =circle.cloneNode(true);
    app.appendChild(copy);
}
