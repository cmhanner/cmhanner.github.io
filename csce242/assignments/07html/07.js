//  Assingment 7

const drawButton = document.getElementById("draw-scene");
const scene = document.querySelector(".scene"); //  sun, moon, clouds, trees
const cloudTree = document.getElementById("cloud-tree"); // clouds and trees container which to duplicate

drawButton.addEventListener("click", () => {
    scene.style.display = "flex";
    const repeat = 5;
    for (let i = 0; i < repeat; i++) {
        const clone = cloudTree.cloneNode(true); // clones the tree and cloud to repeathttps://www.w3schools.com/jsref/met_node_clonenode.asp
        scene.appendChild(clone);  //  adds the clone to scene
        scene.style.flexDirection = "row";
        scene.style.justifyContent = "space-around";
        scene.style.right = "50px";
    }

})