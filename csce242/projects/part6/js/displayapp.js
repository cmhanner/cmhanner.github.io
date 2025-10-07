const getApps = async() => {
    const url = "https://cmhanner.github.io/csce242/projects/part6/json/app.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log("Issue fetching App json");
    }

};

