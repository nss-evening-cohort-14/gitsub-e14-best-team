// console.log('hello');

// ARRAY FOR USER SECTION
const users = [
  {
    name: "Kat Siren",
    username: "katsiren55",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure assumenda maxime et? Facilis sapiente architecto inventore temporibus unde obcaecati veritatis. Aut assumenda, libero incidunt nihil dolore ut consequatur et?",
    followers: "200k",
    following: 5,
    location: "Istanbul",
    gitHub: "katsiren@kat.com",
    website: "aboutkatsiren.com",
    twitter: "Koffee&Kat",
    organizations: [],
    sponsors: [],
  },
];

const repositories = [];

const team = [
  {
    name: "Kat Siren",
    username: "katsiren55",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure assumenda maxime et? Facilis sapiente architecto inventore temporibus unde obcaecati veritatis. Aut assumenda, libero incidunt nihil dolore ut consequatur et?",
    followers: "200k",
    following: 5,
    location: "Istanbul",
    gitHub: "katsiren@kat.com",
    website: "aboutkatsiren.com",
    twitter: "Koffee&Kat",
    organizations: [],
    sponsors: [],
  },
  {
    name: "Rob Cole",
    username: "robertncole1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure assumenda maxime et? Facilis sapiente architecto inventore temporibus unde obcaecati veritatis. Aut assumenda, libero incidunt nihil dolore ut consequatur et?",
    followers: 0,
    following: 0,
    location: "Tampa, FL",
    gitHub: "robertncole1@gmail.com",
    website: "https://robcolecreative.com",
    twitter: "none",
    organizations: [],
    sponsors: [],
  },
  {
    name: "Sara Schoonover",
    username: "username",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure assumenda maxime et? Facilis sapiente architecto inventore temporibus unde obcaecati veritatis. Aut assumenda, libero incidunt nihil dolore ut consequatur et?",
    followers: 0,
    following: 0,
    location: "Nashville, TN",
    gitHub: "email@email.com",
    website: "https://saraiscool.com",
    twitter: "saraschoon",
    organizations: [],
    sponsors: [],
  },
];

const projects = [];

const packages = [];

// PRINT TO DOM
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// CARD BUIDLER
const userBuilder = (taco) => {
  let domString = "";
  taco.forEach((item, i) => {
    domString += `<div class="card" style="width: 18rem;">
                    <img src="images/katy-logo.png" class="card-img-top" alt="katSiren">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <h6>${item.username}</h6>
                      <p class="card-text">${item.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Location: ${item.location}</li>
                      <li class="list-group-item">GitHub: ${item.gitHub}</li>
                      <li class="list-group-item">Website: ${item.website}</li>
                      <li class="list-group-item">Twitter: ${item.twitter}</li>
                      <li class="list-group-item">Followers: ${item.followers}</li>
                      <li class="list-group-item">Following: ${item.following}</li>
                    </ul>
                  </div>`;
  });
  printToDom("#sidebar", domString);
};

const teamBuilder = (taco) => {
  let domString = "";
  taco.forEach((item, i) => {
    domString += `<div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img class="team-member" src="images/katy-logo.png" alt="kat siren logo">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">GitHub: ${item.gitHub}</li>
                            <li class="list-group-item">Website: ${item.website}</li>
                            <li class="list-group-item">Twitter: ${item.twitter}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>`;
  });
  printToDom("#team-members", domString);
};
// GRAB FORM INFO

// BUTTON EVENTS

// INIT
const init = () => {
  userBuilder(users);
  teamBuilder(team);
};

init();
