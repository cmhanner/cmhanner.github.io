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
    const popUpImg = document.getElementById('popup-img'); // Grabs the popup image element
    const popUpClose = document.getElementById('close'); // Grabs the popup close button


    //  item and index
    beforeImages.forEach((dog, i) => { 

        const img = document.createElement('img'); // Create an img element
        img.src = dog.src; // Set the source of the image
        img.alt = "Before Adoption: " + dog.name;
        img.title = "Please adopt " + dog.name;
        imgSpot[i].appendChild(img); // Append the image to the corresponding spot

        img.addEventListener('click', () => {
            console.log(dog.name + " clicked");
            popUpTitle.textContent = dog.name + " after adoption"; // Set the popup title
            popUpImg.src = afterImages[i].src;
            popUp.classList.remove('hidden'); // Show the popup

        });

        popUpClose.addEventListener('click', () => {
            popUp.classList.add('hidden'); // Hide the popup
        });
        
    });

    
    

};

//  Changes images on click

 

    