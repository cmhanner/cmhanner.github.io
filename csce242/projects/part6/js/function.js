//  Project Part: 6

document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('page-changer').classList.toggle('open');
});

const getApps = async() => {
    const url = "https://cmhanner.github.io/csce242/projects/part6/json/app.json";

    //  To always return a array since I'm filtering and sotrting data
    try {
        const response = await fetch(url); //  returns a response object, wait for the url/HTTP to respond with headers + body
        const data = await response.json(); //  returns values as JS values, wait for body to be read and JSON-parse it
        
      
      const apps = Array.isArray(data) //  Checks if the data is in a array or top level array
      ? data //  if true we return data or the array of apps
      : Array.isArray(data?.apps) //  Else: checks if data.apps exist and is it a array? (inner array)
      ? data.apps  //  if true return the inner array of apps
      : []; 

      return apps; 
    } catch (error) {
        console.log("Issue fetching App json", error);
        return []; //  On error, return empty list so it doesn't crash
    }

};

//  Get Button Options for Table/List Data
const getOptions = (app) => {
  const buttonWrap = document.createElement("div");
  buttonWrap.id = "button-wrap"
  const addButton = document.createElement("button");
  const editButton = document.createElement("button");
  const aboutButton = document.createElement("button");
  const removeButton = document.createElement("button");

  addButton.title = "Add to a List";
  editButton.title = "Edit App";
  aboutButton.title = "About App";

  addButton.textContent = "➕";
  editButton.textContent = "📝";
  aboutButton.textContent = "ℹ️";

  buttonWrap.append(addButton, editButton, aboutButton);
  return buttonWrap;
};


//  Get images to be displayed on pages if Page Ask
const getImages = (app) => {
  const imageDiv = document.createElement('div');
  imageDiv.id = "display-image"
  imageDiv.classNmae = "display-image"; //  when displaying images of json in boxes

  const img = document.createElement('img');
  
  img.src = app.image;
  img.alt = app.name;
  img.onerror = () => {
    console.error("Image not found:", img.src);
  };
console.log("Trying image:", img.src);

  imageDiv.append(img);
  return imageDiv;
}

//  Show Apps in Table format
const showApps = async () => {
  const apps = await getApps();

  //  Displaying "Last" Apps on Home Screen
  const appHome = document.querySelector(".app-overview");

  apps.forEach((app) => {
    const img = document.getElementById("#home-app-img");
    const appName = document.getElementById("#app-name");
    const appCompany = document.getElementById("#app-company");
    const appRatings = document.getElementById("#app-ratings");

    img.append(getImages(app));
    appName.textContent(app.name);
    appCompany.textContent(app.company);
    appRatings.textContent(app.rating);

    appHome.appendChild(img, appName, appCompany, appRatings);



  });

  //Displaying on Database Table
  const tableBody = document.querySelector("#appsTable tbody");

  if (!tableBody) {
    console.log("No table exist");
    return;
  }
  
  apps.forEach((app) => {
      const row = document.createElement('tr');

      const appImage = document.createElement('td');
      appImage.append(getImages(app));
      row.appendChild(appImage);

      const appName = document.createElement('td');
      appName.textContent = app.name;
      row.appendChild(appName);

      const appCompany = document.createElement('td');
      appCompany.textContent = app.company;
      row.appendChild(appCompany);

      const appRating = document.createElement('td');
      appRating.textContent = app.rating + " stars / " + app.rating_count + " ratings";
      row.appendChild(appRating);

      const appIndustry = document.createElement('td');
      appIndustry.textContent = app.industry;
      row.appendChild(appIndustry);

      const appOptions = document.createElement('td');
      appOptions.append(getOptions(app));
      row.appendChild(appOptions);

      tableBody.appendChild(row);
  });

  
}

showApps();
