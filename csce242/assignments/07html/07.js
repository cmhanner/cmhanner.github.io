//  Assingment 7

const drawButton = document.getElementById("draw-scene");
const scene = document.querySelector(".scene"); //  sun, moon, clouds, trees
//const cloudTree = document.getElementById("cloud-tree"); // clouds and trees container which to duplicate

const cloudsRow = document.querySelector(".clouds-in-row");
const treeRow = document.querySelector(".trees-in-row");

//  Check time of day
const dayORnight = document.getElementById("content");
const moon = document.querySelector(".moon");
const now = new Date();
const hours = now.getHours();
const isNight = hours < 6 || hours > 18; //  between 6pm and 6am

if (isNight) {
    dayORnight.style.backgroundColor = "black"; //  change to "night"
    moon.style.display = "block"; //  show the moon


} else {
    dayORnight.style.backgroundColor = "lightblue"; //  change to "day"
    moon.style.display = "none"; //  hide the moon
}


drawButton.addEventListener("click", () => {
    scene.style.display = "flex"; //  show the scene
    

    const repeat = 6;
    for (let i = 0; i < repeat; i++) {
        //  Clouuds
        const cloud = document.createElement("div"); //  creating new div to put each cloud in
        cloud.classList.add("cloud");  //  puts class of cloud in each new div
        cloud.innerHTML = "<span class='shadow'></span>"; //  <!--https://codepen.io/jeyakarthika/pen/AappZV-->

        //  if index = 0, first cloud, no overlap stays in place, else move left 80px
        cloud.style.marginLeft = i === 0 ? "0" : "-90px";
        cloudsRow.appendChild(cloud); //  add the cloud to the clouds row

        //Trees
        const tree = document.createElement("div");
        tree.classList.add("tree");
        tree.innerHTML = "<div class='leaves'></div><div class='trunk'></div>"; //  <!--https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_shapes_circle-->
        tree.style.margin = "0 20px"; //  space the trees out
        treeRow.appendChild(tree); //  add the tree to the trees row
        
    }

})