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

document.getElementById("happy-button").onclick = (event) => {
    document.getElementById("yay-message").innerHTML = "Yay!";
    event.currentTarget.classList.add("happy"); //  get this parameter from css
}

document.getElementById("sad-button").onclick = (event) => {
    document.getElementById("sad-message").innerHTML = "Nayyyyy!";
    event.currentTarget.classList.add("sad"); //  get this parameter from css
}