const exercise1 = document.getElementById("exercise-1");  //  stores exercise list to click
const exercise2 = document.getElementById("exercise-2");

const exe1form = document.getElementById("exercise-1-form"); //  stores form 
const exe2form = document.getElementById("exercise-2-form");

const range = document.getElementById("plantRange");
const count = document.getElementById("day-count");
const img = document.getElementById("plant-img");
const status = document.getElementById("status");
const clock = document.getElementById("clock");

exercise1.addEventListener("click", () => {

     console.log("exercise 1 clicked");

    //  show exercise 1 and hide exercise 2

    exe1form.style.display = "flex";
    exe2form.style.display = "none";
    
    //  live updates
    range.addEventListener("input", () => {
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
});


function constantTime () {
    const date = new Date(); //  https://www.shecodes.io/athena/13276-how-to-get-current-day-and-time-in-javascript#:~:text=To%20get%20the%20current%20day%20and%20time%20in%20JavaScript%2C%20you,the%20built%2Din%20Date%20object.&text=const%20now%20=%20new%20Date();,%60);
    clock.innerHTML = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}); //  format time to display with no seconds
    // time.setSeconds(0,0);
    // count.innerHTML = time;

}

// const display = document.getElementById("display"); //   label variable

// const slider = document.querySelector(".slider");
// const sliderParent = slider.parentNode;

exercise2.addEventListener('click', function () {
    console.log("exercise 2 clicked");

    //  show exercise 2 and hide exercise 1
    exe2form.style.display = "flex";
    exe1form.style.display = "none";
    constantTime();
    clockInterval = setInterval(constantTime, 1000);

})



// document.getElementById("exercise-2").onclick = (event) => {
    



    

// }