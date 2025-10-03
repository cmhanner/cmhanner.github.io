//  Assignment 9 JS

class Art {
    constructor (name, artist, imageUnframed, imageFramed = null, framed = null) {
        this.name = name;
        this.artist = artist;
        this.imageUnframed = imageUnframed;
        this.imageFramed = imageFramed;
        this.framed = framed; //  true/false
    } //  constructor

    artImage (filename) {
        const img = document.createElement("img");
        img.src = `images/${filename}`;
        img.alt = `${this.name} + by + ${this.artist}`;
        return img;

    }

    //  pickign the frame or unframed per modal
    getFrame(forModal = false) {
        const file = (forModal && this.framed && this.imageFramed) 
        ? this.imageFramed : this.imageUnframed;
        return this.artImage(file);
    }

    //  returns only the title and the image for the object
    get item() {
        //  the modal that contains the section

        const section = document.createElement("section");
        section.classList.add("art-card");
        //  name
        const h2 = document.createElement("h2");
        h2.textContent = this.name; 
        section.append(h2);

        //  image
        // const img = this.artImage(this.image);
        section.append(this.getFrame(false)); //  so image is unframed before modal

        section.addEventListener("click", () => ArtModal(this));

        return section;

    
    }

    

    description () {
        const p = document.createElement("p");
        p.textContent = `By: ${this.artist}`;
        return p;
    }

    

    
} //  class for art

const art = [];
art.push(new Art("Wolverine Hulk 340", "Alex Ross", "non-framed-wolverine.webp", "framed-wolverine.png", true));
art.push(new Art("Spiderman Torment", "Alex Ross", "spiderman.webp", null, false));
art.push(new Art("Superman Powerful", "Alex Ross", "Superman.webp", null, false))
art.push(new Art("Avengers 700", "Alex Ross", "avengers-700.webp", null, false));
art.push(new Art("Batman Tribute NYCC", "Alex Ross", "batman.webp", null, false));

//  on page load
 const artList = document.getElementById("art-list");
 art.forEach( a => artList.append(a.item)); 

 function ArtModal (artObj) {
    const modal = document.getElementById("modal-id");
    const modalBody = document.getElementById("model-body");
    const closeButton = document.getElementById("modal-close");

   //  clears the old modal
   modalBody.replaceChildren();

    const h3 = document.createElement("h3");
    h3.textContent = artObj.name;
    modalBody.append(h3);

    
    modalBody.append(artObj.description());

    const img = artObj.getFrame(true);
    // const img = artObj.artImage(artObj.image);
    // modalBody.append(img);

    //  closes the modal out
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    

    modal.style.display = "block";

    }

