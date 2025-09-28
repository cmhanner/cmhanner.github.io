//  Assignment 8: Arrays

window.onload = function () {  //  https://stackoverflow.com/questions/520812/how-do-i-detect-when-a-web-page-is-loaded
    const beforeImages = [
        { name: "Apollo", src: "img-before/apollo-before.jpg" },
        { name: "Bow-Tie", src: "img-before/bow-tie-before.jpg" },
        { name: "Harper", src: "img-before/harper-before.jpg" },
        { name: "Toby", src: "img-before/toby-before.jpg" }
    ];

    const afterImages = [
        { name: "Apollo", src: "img-after/apollo-after.jpg" },
        { name: "Bow-tie", src: "img-after/bow-tie-after.jpg" },
        { name: "Harper", src: "img-after/harper-after.jpg" },
        { name: "Toby", src: "img-after/toby-after.jpg" }
    ];

    const imgSpot = document.querySelectorAll('.image-spot'); //  image spots 
    const popUp = document.getElementById('popup'); // popup element
    const popUpTitle = document.getElementById('popup-title'); // popup title element
    const popUpImg = document.getElementById('popup-image'); // popup image element
    const popUpClose = document.getElementById('close'); // popup close button



    //  Load before images into their spots
    //  item and index
    beforeImages.forEach((dog, i) => { 

        //  Wrapper Idea: https://codingislove.com/image-caption-hover-effect/
        const wrapper = document.createElement('div'); //  create a wrapper div to add the caption
        wrapper.classList.add('image-wrapper'); //  add class to wrapper

        const img = document.createElement('img'); // Create an img element
        img.src = dog.src; // Set the source of the image
        img.alt = "Before Adoption: " + dog.name;
       
        const caption = this.document.createElement('span'); // Create a span for caption
        caption.classList.add('caption');
        caption.textContent = "Please adopt " + dog.name; // Set caption text

        wrapper.appendChild(img); // Append the image to the wrapper
        wrapper.appendChild(caption); // Append the caption to the wrapper
        imgSpot[i].appendChild(wrapper); // Append the wrapper containing image and caption to image spots

        //  On click show after image
        img.addEventListener('click', (e) => { //  adding a e to get image info when clicked for popup
            console.log(dog.name + " clicked");
            popUpImg.src = afterImages[i].src;
            popUpTitle.textContent = dog.name + " after adoption"; // Set the popup title
            popUp.classList.remove('hidden'); // Show the popup
            
             //  target gets the specific image clicked
            const popUpposition = e.target.getBoundingClientRect(); // Get the position and size of the clicked image https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
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


  