//  Project Part: 6

document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('page-changer').classList.toggle('open');
});

const getApps = async() => {
    const url = "https://cmhanner.github.io/csce242/projects/part6/app.json";

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

//  List/Saved App ID's
 const LIST_KEY = 'appProspecter:list'; //  Unique key for storing user's saved apps

/**
 * Reads saved list of ID's from localStorage
 * @returns an array of numbers
 */

 function getListIds() {
  try {
    //  local storage stores strings, and it parses the JSON back into JS Values
    //  If key is mssing or empty, JSON will return null and give a  []
    return JSON.parse(localStorage.getItem(LIST_KEY)) || []; 

  } catch {
    return [];
  }
 }

 //  Write array back of ID's to localStorage
 //  Using JSON.stringify b/c localStorage only stores strings
 function saveListIds(ids) {
    localStorage.setItem(LIST_KEY, JSON.stringify(ids));
 }

 //  Check if a id/app is currently in the saved list
 //  
 function inList(id) {
    const ids = getListIds(); //  read current List
    return ids.includes(Number(id)); //  true if found
 }

 //  Addings a id of a app to the saved list (if it isnt in there)
 function addToList (id) {
  const ids = getListIds(); 
  const num = Number(id);
  if (!ids.includes(num)) { //  only add if its not in the list
    ids.push(num); //  push app's id to the end of array
    saveListIds(ids);
  }
 }

 //  Remove the id of a app from the list
 function removeFromList(id) {
  const num = Number(id);
  const ids = getListIds().filter(x => x !== num); //  keep every id except the one to remove
  saveListIds(ids);
 }

//  Get Button Options for Table/List Data
const getOptions = (app) => {
  const buttonWrap = document.createElement("div");
  buttonWrap.id = "button-wrap"

  const addButton = document.createElement("button");
  const refreshLabel = () => {addButton.textContent = inList(app._id) ? "✓" : "➕"}; //  changes how it appears based on if app is in th elist, if in show check, if not show +
  refreshLabel(); //  intializes after creating button
  addButton.title = "Add to a List";

  //  once clicked, if app is in the list remove it
  //  if not add it
  //  then refresh
  addButton.addEventListener("click", () => {
    if (inList(app._id)) removeFromList(app._id); 
    else addToList (app._id);
    refreshLabel();
  })


  const editButton = document.createElement("button");
  const aboutButton = document.createElement("button");
  const removeButton = document.createElement("button");

  
  editButton.title = "Edit App";
  aboutButton.title = "About App";

  
  editButton.textContent = "📝";
  aboutButton.textContent = "ℹ️";

  buttonWrap.append(addButton, editButton, aboutButton);
  return buttonWrap;
};


//  Get images to be displayed inside table content
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

  const appCards = document.querySelectorAll(".dashboard-apps .app-overview");
  const n = Math.min(appCards.length, apps.length);  //  how many home cards exist and how many app objes are there

  for (let i=0; i< n; i++)  { //  only fulfills amount of dashboard spaces available
    const app = apps[i];
    const card = appCards[i];

    const img = card.querySelector(".home-app-img");
    const appName = card.querySelector(".app-name");
    const appCompany = card.querySelector(".app-company");
    const appRatings = card.querySelector(".app-ratings");

    if (img) {
      img.src = app.image;
      img.alt = app.name;
    }

    if (appName) appName.textContent = "Name: " + app.name;
    if (appCompany) appCompany.textContent = "Company: " + app.company;
    if (appRatings) appRatings.textContent = "Rating: " + app.rating;



  };
  

  //Displaying on Database Table
  const tableBody = document.querySelector("#appsTable tbody");

  if (!tableBody) {
    console.log("No table exist on this page.");
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

//  To Display List
async function showMyList() {
    const apps = await getApps(); //  load apps in from json array

    const savedIds = getListIds().map(Number); //  read savedId's from localStorage

    const myApps = apps.filter(a => savedIds.includes(Number(a._id))); //  filter the array to only apps in savedIds

    const listBody = document.querySelector("#apps-list-body");
    if (!listBody) return; //  if not on list page

    if (myApps.length === 0) { //  if empty
      tbody.innerHTML = `<tr><td colspan="6">Your list is empty. Click “➕” on any app to add it.</td></tr>`;
      return;
    }

    myApps.forEach(app => {
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

      const appDeveloper = document.createElement('td');
      appDeveloper.textContent = app.developer;
      row.appendChild(appDeveloper);

      const appOptions = document.createElement('td');
      appOptions.append(getOptions(app));
      row.appendChild(appOptions);

      listBody.appendChild(row);
    })

  }

showApps();
showMyList();

