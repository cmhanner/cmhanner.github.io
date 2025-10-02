//  Assignment 9 JS

class Art {
    constructor (name, artist, image, framed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed; //  true/false
    } //  constructor

    //  returns only the title and the image for the object
    get item() {
        //  the modal that contains the section
        // const modalContent = document.querySelector(".w3-modal-content");
        const section = document.createElement("section");
        section.classList.add("art-card");
        //  name
        const h3 = document.createElement("h3");
        h3.textContent = this.name; 
        section.append(h3);

        //  image
        const img = this.artImage(this.image);
        section.append(img);

        return section;

    
    }

    artImage (filename) {
        const img = document.createElement("img");
        img.src = `images/${filename}`;
        return img;

    }

    
} //  class for art

const art = [];
art.push(new Art("X-Men Wolverine Incredible Hulk 340", "Alex Ross", "wolverine.webp", true));
art.push(new Art("Spiderman Torment", "Alex Ross", "spiderman.webp", false));
art.push(new Art("Superman More Powerful", "Alex Ross", "Superman.webp", false))
art.push(new Art("Avengers 700", "Alex Ross", "avengers-700.webp", false));

//  on page load
 const artList = document.getElementById("art-list");
 art.forEach( a => artList.append(a.item)); 

