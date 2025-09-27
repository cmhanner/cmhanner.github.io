//  Assignment 8: Arrays

window.onload = function () {  //  https://stackoverflow.com/questions/520812/how-do-i-detect-when-a-web-page-is-loaded
    const beforeImages = [
        { name: "apollo", src: "img-before/apollo-before.jpg" },
        { name: "bow-tie", src: "img-before/bow-tie-before.jpg" },
        { name: "harper", src: "img-before/harper-before.jpg" },
        { name: "toby", src: "img-before/toby-before.jpg" }
    ];

    const afterImages = [
        { name: "apollo", src: "img-after/apollo-after.jpg" },
        { name: "bow-tie", src: "img-after/bow-tie-after.jpg" },
        { name: "harper", src: "img-after/harper-after.jpg" },
        { name: "toby", src: "img-after/toby-after.jpg" }
    ];

    const imgSpot = document.querySelectorAll('.image-spot'); // Grabs all the image spots 
    const popUp = document.getElementById('popup'); // Grabs the popup element
    const popUpTitle = document.getElementById('popup-title'); // Grabs the popup title element
    const popUpImg = document.getElementById('popup-image'); // Grabs the popup image element
    const popUpClose = document.getElementById('close'); // Grabs the popup close button
    const imgHover = document.getElementById('dog-hover');


    //  Load before images into their spots
    //  item and index
    beforeImages.forEach((dog, i) => { 

        const img = document.createElement('img'); // Create an img element
        img.src = dog.src; // Set the source of the image
        img.alt = "Before Adoption: " + dog.name;
        imgHover.textContent = "Please adopt " + dog.name;
        // img.title = "Please adopt " + dog.name;
        imgSpot[i].appendChild(img); // Append the image to the corresponding spot

        //  On click show after image
        img.addEventListener('click', (e) => { //  adding a e to get image info when clicked for popup
            console.log(dog.name + " clicked");
            popUpImg.src = afterImages[i].src;
            popUpTitle.textContent = dog.name + " after adoption"; // Set the popup title
            popUp.classList.remove('hidden'); // Show the 
            
             //  target gets the specific image clicked
            const popUpposition = e.target.getBoundingClientRect(); // Get the position of the clicked image
            popUp.style.top = (popUpposition.top + window.scrollY) + 'px'; // Position the popup vertically
            popUp.style.left = (popUpposition.left + window.scrollX) + 'px'; // Position the popup horizontally

        });

       

    });

    // Close popup
    popUpClose.addEventListener('click', () => {
        console.log("X clicked");
        popUp.classList.add('hidden'); // Hide the popup
    });

    
    

};

//  Changes images on click

 

    