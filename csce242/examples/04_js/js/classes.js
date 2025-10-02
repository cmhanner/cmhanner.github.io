class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item () {
        const section = document.createElement("section");
        section.classList.add("dog");

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        // column container
        const column = document.createElement('div');
        column.classList.add("columns"); 
        section.append(column);

        //  Div 1 for picture
        const columnDiv1 = document.createElement('div');
        column.append(columnDiv1);


        // Div 2 for picture
        const columnDiv2 = document.createElement('div');
        column.append(columnDiv2);

        
        columnDiv1.append(this.picture(this.pic));
        columnDiv2.append(this.paragraph("Breed: "+ this.breed));
        columnDiv2.append(this.paragraph("Age: " + this.age));
        
        return section;
    }

    picture (filename) {
        const img = document.createElement('img');
        img.src = 'images/classes/${filename}';
        return img;

    }

    paragraph (text) {
        const p = document.createElement('p');
        text.innerHTML = ;
        
        return p;

    }
}

const dogs = [];
dogs.push(new Dog("Coco", "Yorkie", "Black", 6, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retreiver", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "large", "pitbull.jpg"));

//  on page load
const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog)=>{
    dogListDiv.append(dog.item);

}); // for each item in the array of dogs going to make a section and append it to the div
