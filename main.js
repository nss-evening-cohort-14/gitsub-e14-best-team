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

const repositories = [
  {
    name: "greys-anatoy-lorm-ipsum-generator",
    description:

      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusamus labore earum sit est suscipit incidunt soluta corporis libero velit fugit eveniet optio quidem non officia quibusdam ab, ipsum voluptatum!",
    technologies: [
      "netlify",
      "jamstack",
      "lorem-ipsum-generator",
      "medical",
      "serverless",
      "react",
    ],
    extra: ["Javascript", 8, 3, "1 issue needs help", "Updated"],
    pinned: true,
  },
  {
    name: "how-many-days-until",
    description:

      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusamus labore earum sit est suscipit incidunt soluta corporis libero velit fugit eveniet optio quidem non officia quibusdam ab, ipsum voluptatum!",
    technologies: ["react", "countdown", "hacktoberfest"],
    extra: ["Javascript", 6, 33, "Updated 19 days ago"],
    pinned: true,
  },
  {
    name: "httiriri",
    description:

      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusamus labore earum sit est suscipit incidunt soluta corporis libero velit fugit eveniet optio quidem non officia quibusdam ab, ipsum voluptatum!",
    technologies: ["http", "status-codes", "gifs", "rihanna", "hacktoberfest"],
    extra: ["Typescript", 37, 22, "4 issues need help", "Updated 27 days ago"],
    pinned: false,
  },
  {
    name: "ambition-fund-website",
    description:

      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusamus labore earum sit est suscipit incidunt soluta corporis libero velit fugit eveniet optio quidem non officia quibusdam ab, ipsum voluptatum!",
    technologies: ["donation", "landing-page"],
    extra: [
      "Javascript",
      7,
      6,
      "MIT License",
      "3 issues need help",
      "Updated on Dec 12, 2020",
    ],
    pinned: false,
  },
];

const team = [
  {
    name: "Kat Siren",
    username: "katsiren55",
    website: "aboutkatsiren.com",
    twitter: "Koffee&Kat",
    imageUrl: "images/katy-logo.png",
  },
  {
    name: "Rob Cole",
    username: "robertncole1",
    website: "https://robcolecreative.com",
    twitter: "none",
    imageUrl: "images/katy-logo.png",
  },
  {
    name: "Sara Schoonover",
    username: "username",
    website: "https://saraiscool.com",
    twitter: "saraschoon",
    imageUrl: "images/katy-logo.png",
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

// TEAM MEMBER BUILDER
const teamBuilder = (taco) => {
  let domString = "";
  taco.forEach((item, i) => {
    domString += `<div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img class="team-member" src="${item.imageUrl}" alt="kat siren logo">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">GitHub: ${item.username}</li>
                            <li class="list-group-item">Website: ${item.website}</li>
                            <li class="list-group-item">Twitter: ${item.twitter}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>`;
  });
  const teamMembers = document.querySelector("#team-members");
  if (teamMembers) {
    printToDom("#team-members", domString);
  }
};

// TEAM MEMBER GET FORM INFO
const getTeamInfo = (e) => {
  e.preventDefault();
    const name = document.querySelector('#name').value;
    const username = document.querySelector('#username').value;
    const website = document.querySelector('#website').value;
    const twitter = document.querySelector('#twitter').value;
    const imageUrl = document.querySelector('#imageUrl').value;

    const obj = {
      name,
      username,
      website,
      twitter,
      imageUrl,
    }

  team.push(obj);
  teamBuilder(team);

  document.querySelector('form').reset();
};

// FUNCTION FOR OVERVIEW PAGE
const pinnedBuilder = (taco) => {
  let pinnedCard = "";
  taco.forEach((item, i) => {
    if (item.pinned === true) {
      pinnedCard += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;
    }
  });
  const pinnedRepoHouses = document.querySelector("#pinnedRepoHouse");
  if (pinnedRepoHouses) {
    printToDom("#pinnedRepoHouse", pinnedCard);
  }
};

//POPULATE OVERVIEW FORM DROPDOWN
const populatePinned = (taco) => {
  let pinnedText = "";
  taco.forEach((item, i) => {
    if (item.pinned === false) {
      pinnedText += `<option value=${item.name}>${item.name}</option>`;
    }
  });
  const getPinned = document.querySelector("#getPinned");
  if (getPinned) {
    printToDom("#getPinned", pinnedText);
  }
};

const repoBuilder = (taco) => {
  domString = "";
  taco.forEach((item, i) => {
    domString += `<div class="card" style="height: 10em width: 18rem; id=${i}">
    <div class="card-body">
      <h5 class="card-title" id='card-title'>${item.name}</h5>
      <p class="card-text" id="card-text">${item.description}</p>
      <p class="card-link" id="link1">${item.technologies}</p>
      <br>
       <a href="#" class="card-link" id="link1">${item.technologies}</a>
      <br>
       <a href="#" class="card-link" id="link2">${item.extra}</a>
      <label class="btn btn-secondary">
    <input type="radio" name="options" id="option2" autocomplete="off"> Star
  </label>
    </div>
  </div>
    `;
  });
  const repo = document.querySelector('#repo');
  if (repo) {
    printToDom("#repo", domString);
  }
  // printToDom("#repo", domString);
};
// GRAB FORM INFO

//FUNCTION FOR OVERVIEW PAGE
const isPinned = (e) => {
  e.preventDefault();
  let buttonType = e.target.id;
  const makePinned = document.querySelector("#getPinned").value;

  if (buttonType === "submit-pin") {
    console.log("submit");
    repositories.forEach((item, i) => {
      if (item.name === makePinned) {
        item.pinned = true;
      }
    });
    pinnedBuilder(repositories);
  }
};

// BUTTON EVENTS
const handleButtonClick = (e) => {
  const submitPin = document.querySelector("#submit-pin");
  if (submitPin) {
    document.querySelector("#submit-pin").addEventListener("click", isPinned);
  }
  document.querySelector('#team-form').addEventListener('submit', getTeamInfo);
};

// INIT
const init = () => {
  userBuilder(users);
  teamBuilder(team);
  populatePinned(repositories);
  pinnedBuilder(repositories);
  handleButtonClick();
  repoBuilder(repositories);

};

init();
