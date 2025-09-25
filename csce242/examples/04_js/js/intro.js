//Console.log() displays the parameter
//Three Variables of JC
// var, let, const
// Const by default, and let if need be if variable changes
// Cant use the word function in work
// const  sayHello = () => {
//     console.log("Hello World");
// }
// document.getElementById("btn-click-me").onclick = sayHello; //  dont put parenthesies


document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    // document.getElementById("btn-click-me").classList.add("clicked");
    event.currentTarget.classList.add("clicked"); //  current target is the button that was clicked

}

document.getElementById("happy-button").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "YAY";
    pFeeling.classList.add("happy");
    pFeeling.classList.remove("sad");
}

document.getElementById("sad-button").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "Nay";
    pFeeling.classList.add("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("clear-button").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "";
    pFeeling.classList.remove("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`
    document.getElementById("img-emotion").classList.remove("hidden");
};

document.getElementById("btn-mood-ring").onclick = () => {
    const color = document.getElementById("txt-color").value.trim();
    const p = document.getElementById("p-mood-result");
    p.innerHTML = ""; //  reset paragraph
    const error = document.getElementById("error-color");
    error.innerHTML = ""; //  reset error
    const mood = "";

    if (color == "") {
        error.innerHTML = "* blank";
        return;
    }

    if(color == "red") {
        mood = "angry";
    } else if (color == "yellow") {
        mood = yellow;
    } 

    if (mood == "") {
       error.innerHTML = "*invalid color";
       return;
    }

    p.innerHTML = 'You choose ${color}, so you are feeling ${mood}';

    document.getElementById("btn-bounce").onclick = (event) => {
        const ball = document.getElementById("ball");

        if (ball.classList.contains("bounce")) {
            event.currentTarget.innerHTML = "Start";
        } else {
            event.currentTarget.innerHTML = "Stop";
        }

        ball.classList.toggle("bounce");
    }

    /* Counter*/
    let counter = 0;
    let counterInterval;
    const countP = document.getElementById("p-count");
    const btnStartCount = document.getElementById("btn-count-start");
    const btnPauseCount = document.getElementById("btn-count-pause");
    btnPauseCount.disabled = true;

    document.getElementById("btn-count-start").onclick = () => {
       counterInterval = setInterval(()=>{
        counter++;
         countP.innerHTML = counter;
       }, 1000); //  threw a funciton in there as a parameter
      
    }, 

    btnPauseCount.onclick = () => {
        clearInterval (counterInterval);
        btnPauseCount.disabled = true;
        btnStartCount.disabled = false;
    }

    let totalDonations = 0;

    const goal = 1000;
    document.getElementById("goal-span").innerHTML = goal;

    document.getElementById("btn-donations").onclick = () => {
        const donation = document.getElementById("txt-donations").value;
        const errorSpan = document.getElementById("donation-error");
        errorSpan.innerHtml = "";
        const donationMessage = document.getElementById("donation-message");
        donationMessage.innerHTML = "";

        
        if (isNaN(donation) || donation <= 0) {
            errorSpan.innerHTML = "* Invalid Amount";
        }

        totalDonations += parseFloat(donation);
        const donationPercent = donation / goal * 100;

        if (donationPercent >= 100) {
            donationMessage.innerHTML = "Goal Reached!";
        } else if (donationPercent >= 50) {
            donationMessage.innerHTML = "Over Half Way There";
        } else {
            donationMessage.innerHTML = "Get to Goaling!";
        }

        
    }
}
