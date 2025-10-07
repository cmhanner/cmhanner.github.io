//  Project Part: 6

document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('page-changer').classList.toggle('open');
});

const getApps = async() => {
    const url = "https://cmhanner.github.io/csce242/projects/part6/json/app.json";

    try {
        const response = await fetch(url);
        return response.json();

        
    } catch (error) {
        console.log("Issue fetching App json");
    }

};

const getOptions = (app) => {
  const buttonWrap = document.createElement("div");
  buttonWrap.id = "button-wrap"
  const addButton = document.createElement("button");
  const editButton = document.createElement("button");
  const aboutButton = document.createElement("button");

  addButton.title = "Add to a List";
  editButton.title = "Edit App";
  aboutButton.title = "About App";

  addButton.textContent = "➕";
  editButton.textContent = "📝";
  aboutButton.textContent = "ℹ️";

  buttonWrap.append(addButton, editButton, aboutButton);
  return buttonWrap;
};

const showApps = async () => {
  const apps = await getApps();
  const tableBody = document.querySelector("#appsTable tbody");
  
  apps.forEach((app) => {
      const row = document.createElement('tr');

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
