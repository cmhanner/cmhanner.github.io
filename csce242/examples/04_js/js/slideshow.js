//  function happens every second 
//  I want the child  of the div that's not class of hidden
setInterval(() =>{
    // const slideshow = document.getElementById("slideshow");
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if (!nextSlide) { //  if next slide equals null
        nextSlide = document.querySelector("#slideshow :first-child");

    }

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");

    // console.log(currentSlide);
    //for ()
}, 1000); //  takes two parameters, first one is the function you call and the second one how often