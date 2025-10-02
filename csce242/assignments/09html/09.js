//  Assignment 9 JS

class Art {
    constructor (name, artist, image, framed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed; //  true/false
    } //  constructor

    //  returns only the title and the image for the object
    get art() {
        //  the modal
        const modalContent = document.querySelector("w3-modal-content");
        const section = document.createElement("section");
        modalContent.append(section); //  adds the section to the modal content

        //  name
        const h3 = document.createElement("h3");
        section.append("h3")

    
    }

    

} //  class for art



