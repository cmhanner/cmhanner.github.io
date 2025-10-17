const contactForm = document.getElementById("contact-form");
const result = document.getElementById('contact-result');

if (!contactForm) {
    console.error("No Contact-Form found on page");
} else {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); //  prevent user from leaving page

        //  Build JSON body for Web3Forms
        const formData = new FormData(event.currentTarget);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        // result.style.display = block;
        result.innerHTML = "Please wait..."

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
            .then(async (response) => {
                let json = await response.json();
                    if (response.status == 200) {
                        result.innerHTML = "Email Sent";
                    } else {
                        console.log(response);
                        result.innerHTML = json.message;
                    }
            })
                .catch(error => {
                    console.log(error);
                    result.innerHTML = "Something went wrong!";
                })
                .then(function() {
                    contactForm.reset();
                    setTimeout(() => {
                        result.style.display = "none";
                    }, 3000);
                });
    });
}
    

    
    
