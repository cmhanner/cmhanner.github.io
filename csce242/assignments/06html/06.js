

document.getElementById("exercise-1").onclick = (event) => {
    const range = document.getElementById("plantRange");
    const img = document.getElementById("plant-img");
    const count = document.getElementById("day-count");
    const status = document.getElementById("status");
    

    //  live updates
    range.addEventListener("click", () => {
        const days = parseInt(range.value); //  takes actual slider value

        if (days >= 1 && days <= 2) {
            img.src = 'images/plant-1-2.jpg';
            count.innerHTML = `It's been ${days} days since watering your plant`;
            status.innerHTML = "Your plant is healthy and happy";
        } else if (days >= 3 && days <= 5) {
            img.src = 'images/plant-3-5.jpg';
            count.innerHTML = `It's been ${days} days since watering your plant`;
            status.innerHTML = "Your plant needs watering";
        } else if (days >= 6 && days <= 9){
            img.src = 'images/plant-6-9.jpg';
            count.innerHTML = `It's been ${days} days since watering your plant`;
            status.innerHTML = "Leaves are dropping the color is changing, water soon";
        } else if (days >= 10 && days <= 12){
            img.src = 'images/plant-10-12.jpg';
            count.innerHTML = `It's been ${days} days since watering your plant`;
            status.innerHTML = "Your plant died";
        }


    });



}


document.getElementById("exercise-2").onclick = (event) => {
    const date = new Date();
    const time = date.getTime;
    const display = document.getElementById("display");

    

}