document.getElementById("sunny-times-button").onclick = (event) => {
    console.log("Clicked")
    document.getElementById("p-Here-comes").innerHTML = "Here comes the sun"
    document.getElementById("p-Sun").innerHTML = "Sun"
    document.getElementById("p-Sun1").innerHTML = "Sun"
    document.getElementById("p-Sun2").innerHTML = "Sun"
    document.getElementById("p-Here-it").innerHTML = "Here it comes"
}

const textTocolor = document.getElementById("coloring-text");
const colorInput = document.getElementById ("pickcolor");
const hexColor = document.getElementById("hex-color");

// Intialized text color and hex code
textTocolor.style.color = colorInput.value;
hexColor.textCotnent = colorInput.value;


//  Uppdates when user picks a new color
colorInput.addEventListener ( "input", () => {
    textTocolor.style.color = colorInput.value; //  text changes color
    hexColor.textContent = colorInput.value; //  shows hex code
    // console.log("Picked Color:" ,colorInput.value);

});

const sunImage = "images/sun.jpg";
const cloudImage = "images/clouds.jpg";
const changedImage = document.getElementById("cloud-pic");

document.getElementById("change-image-button").onclick = () => {
    
    if (changedImage.src.includes("clouds.jpg")) {
        changedImage.src = sunImage;
    } else {
        changedImage.src = cloudImage;
    }
}