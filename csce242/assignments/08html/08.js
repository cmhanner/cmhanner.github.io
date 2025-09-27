//  Assignment 8: Arrays

window.onload = function () {
    const beforeImages = [];
    beforeImages["apollo"] = "images/apollo-before.jpg";
    beforeImages["harper"] = "images/harper-before.jpg";
    beforeImages["bow-tie"] = "images/bow-tie-before.jpg";
    beforeImages["toby"] = "images/toby-before.jpg";

    const imgSpot = document.querySelectorAll('.image-spot'); // Grabs all the image spots 

    beforeImages.forEach((spot, i) => {
        const img = document.createElement("img");
        img.src = spot;
        img.alt = "Before Adoption";
        imgSpot[i].appendChild(img);


    });


};