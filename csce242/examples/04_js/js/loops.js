document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);

    //loop and write the numbers one through 10
    for(let i=0; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)`;
        ul.append(li);
    }
};

document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);

    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";

    if(startNum > endNum) {
        error.innerHTML = "* The second number must be bigger than the first";
        return;
    }

    //  Loop for every number from start to end display the number in paragraphs
    for (let i = startNum; i <= endNum; i++) {
        const p = document.getElementById("p");
        p.innerHTML = i; //  paragraphs only "come to life here"
        resultDiv.append(p);
        p.onclick = () => {
            console.log(`You clicked Number ${i}`);
        };
    }

    document.getElementById("btn-show-toys").onclick = () => {
        console.log("hi");
        const toylist = document.getElementById("toy-list");
        toylist.innerHTML = ""; //  reset list

        //  make a array of toys
        const toys = ["ball", "skipping rope", "doll", "mini car", "elmo"];

        //  First way to iterate
        // for (let i = 0; i < toys.length; i++) {
        //     const li = document.createElement("li");  //  creating a new li element each time
        //     li.innerHTML = toys[i]; //  setting the text of the li
        //     toylist.append(li);  //  adding the li to the ul
        
        // }

        // Second way prefered 
        toys.forEach((toy, i)=>{
            console.log(i + ". "+ toy);
            li.innerHTML = toy;
            toylist.append(li);
        }); //  what I'll do for each item, please tell me the function you have for each item
    }
}

document.getElementById("btn-show-toy-prices").onclick = () =>  {
    console.log("hi");
    const toys = [];
    toys["ball"] = 2.99;
    toys["barbie"] = 19.99;
    toys["skipping rope"] = 1.98;
    toys["match box car"] = 2.54;

    const toyDiv = document.getElementById("toy-prices");
    toyDiv.innerHTML = ""; // reset div

    for ( let toy in toys) {
        console.log(toys[toy]);
        const p = document.createElement("p");
         p.innerHTML = toy;
        toy.div.append(p);

        //when i click the paragraph in a div below show the price
        //  Like "ball cost $..."

        const toyParagraph = document.getElementById("toy-paragraph");
        toyParagraph.innerHTML = "";

        toyParagraph.onclick = () => { 
            toyParagraph.innerHTML = '${toy} costs $${toys[toy]}';

        }


       
    }
}