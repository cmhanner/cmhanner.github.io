const getShoes = async() => { //  when you do stuff asyncriously you preceed it with async

    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch (url); //  fetch the data from the URL, await is saying wait until line completes
        return response.json();


    }
    catch (error){
        console.log("sorry");

    }

};

const showShoes = async () => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe)=> {
        //  make a section for each shoe put all the data in, nicely formatted
        //  then append it to the shoe list
        console.log(shoe.name);



        //
        const section = document.createElement('section');
        section.appendChild(shoe);
        


    })
};

showShoes();