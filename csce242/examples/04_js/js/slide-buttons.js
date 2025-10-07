document.getElementById("arrow-back").onclick = (event) => {
    event.preventDefault(); // links are clickable go nowehere, don't move the page, no pounds show
    const currentSlide = document.querySelector("#slideshow img:not(.hidden)"); //  added image b/c buttons are children of slideshow
    let prevSlide = currentSlide.previousElementSibling;

    if (!prevSlide) {
        prevSlide = document.querySelector("#slideshow img:last-child");
    }

    currentSlide.classList.remove("hidden");
    prevSlide.classList.remove("hidden");

}

document.getElementById("arrow-front").onclick = (event) => {
    event.preventDefault();
    const currentSlide = document.querySelector("#slideshow img:not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if (!nextSlide) {
        nextSlide = document.querySelector("#slideshow img:first-child");
    }

    currentSlide.classList.remove("hidden");
    nextSlide.classList.remove("hidden");
}