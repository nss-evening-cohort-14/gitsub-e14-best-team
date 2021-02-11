

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
    imageUrl: "https://avatars.githubusercontent.com/u/76854545?s=460&u=f5424c7a737a6e847fb0415886a6857f56f15bc7&v=4",
  },
  {
    name: "Sara Schoonover",
    username: "username",
    website: "https://saraiscool.com",
    twitter: "saraschoon",
    imageUrl: "https://avatars.githubusercontent.com/u/25774314?s=460&u=f02c0b3ec9ec2c2cf3ed4ecae25d6d793048f020&v=4",
  },
];

const projects = [
  {
    title: 'my-dream',
    description: 'My dream project',
    open: true,
    private: false,
    created: new Date('Aug 25, 2019'),
    updated: new Date("Feb 1, 2021")
  },
  {
    title: 'best-breakfast',
    description: 'I just have to create my favorite breakfast list',
    open: true,
    private: false,
    created: new Date('Feb 3, 2018'),
    updated: new Date('Mar 30, 2018')
  },
  {
    title: 'french fries',
    description: 'Who does not like french fries?',
    open: true,
    private: false,
    created: new Date('May 29, 2018'),
    updated: new Date('Jul 15, 2020')
  },
  {
    title: 'best-team project',
    description: 'project for my best-team',
    open: true,
    private: false,
    created: new Date('Jan 2, 2000'),
    updated: new Date('Dec 1, 2019')
  },
  {
    title: 'my secret project',
    description: 'why did I make this a public project',
    open: true,
    private: true,
    created: new Date('Jan 14, 2021'),
    updated: new Date('Jan 15, 2021')
  },
  {
    title: 'Example1',
    description: 'THIS IS MY TRIAL TRIAL TRIAL',
    open: false,
    private: false,
    created: new Date('Dec 5, 2020'),
    updated: new Date('Jan 1, 2021')
  },
];

const packages = [
  {
    icon: "",
    name: "Docker",
    description:
      "The world's easiest way to create, manage, and deliver your teams' container applications. ",
    website: "https://hub.docker.com/",
  },

  {
    icon: "",
    name: "Apache Maven",
    description:
      "A default package manager used with Java and the Java runtime environment.",
    website: "https://maven.apache.org/",
  },

  {
    icon: "",
    name: "NuGet",
    description:
      "A package manager used with Microsoft platforms, including .NET.",
    website: "https://www.nuget.org/",
  },

  {
    icon: "",
    name: "RubyGems",
    description:
      "A standard format for distributing programs and libraries with Ruby",
    website: "https://rubygems.org/",
  },

  {
    icon: "",
    name: "npm",
    description: "A package manager for JavaScript, included with Node.js.",
    website: "https://www.npmjs.com/",
  },
];

// PRINT TO DOM
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// CARD BUILDER
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
                      <li class="list-group-item"><i class="fas fa-map-marker-alt"></i>  ${item.location}</li>
                      <li class="list-group-item"><i class="fas fa-envelope"></i>  ${item.gitHub}</li>
                      <li class="list-group-item"><i class="fas fa-link"></i>  ${item.website}</li>
                      <li class="list-group-item"><i class="fab fa-twitter"></i>  ${item.twitter}</li>
                      <li class="list-group-item"><i class="fas fa-user-friends"></i>  ${item.followers}</li>
                      <li class="list-group-item"><i class="fas fa-users"></i>  ${item.following}</li>
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
                            <li class="list-group-item"><i class="fas fa-user"></i>  ${item.username}</li>
                            <li class="list-group-item"><i class="fas fa-link"></i>  ${item.website}</li>
                            <li class="list-group-item"><i class="fab fa-twitter"></i>  ${item.twitter}</li>
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
      let num = Math.floor((Math.random() * 100) + 1);
      let num2 = Math.floor((Math.random() * 100) + 1);
      pinnedCard += `<div class="card" style="width: 25rem;">
    <div class="card-body">
    <h6 class="card-title pinned-card"><i class="far fa-bookmark" style="color: lightgray"></i>${item.name}</h6>
      <p class="card-text">${item.description}.</p>
      <span class="mx-2"><i class="fas fa-circle mx-1" style="color: yellow"></i>Javascript</span>
      <span class="mx-2"><i class="far fa-star mx-1"></i>${num}</span>
      <span class="mx-2"><i class="fas fa-code-branch mx-1"></i>${num2}</span>
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

// packages builder
const packageBuilder = (taco) => {
  let domString = "";
  taco.forEach ((item, i) => {
    domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <img src="${item.icon}" alt="Package Icon" width="100" height="80"
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.description}</p>
                      <a href="${item.website}" class="btn btn-success">Learn More</a>
                    </div>
                  </div>`;
  });
  
  const getPackages = document.querySelector('#package');
  if (getPackages) {
    printToDom("#package", domString);
  }
  
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

// Function for Projects page
const projectBuilder = (taco) => {
  let showDom = '';
  taco.forEach((item, i) => {
    showDom += `<div class="container border border-white" id=${i}>
                  <div class="row">
                    <div class="col-3 align-self-start">
                      ${item.title}
                    </div>
                    <div class="col-7 align-self-start">
                      ${item.description}
                    </div>
                    <div id="editButton" class="col-1 dropdown align-self-end">
                      <button class="btn btn-white text-white btn-sm dropdown align-self-end" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" id="editProject" href="#">Edit File</a></li>
                        <li><a class="dropdown-item" id="closeProject" href="#">Close Project</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" id="setting" href="#">Setting</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="row">
                  <div class="col-4 align-self-start">
                  <i class="far fa-clock fs-6"> Updated ${Math.floor(Math.abs(new Date() - item.updated) / 1000 / 60 / 60)} hours ago</i>
                  </div>
                  <div class="col-5 align-self-start">
                  <i class="fas fa-grimace"></i> Created ${Math.floor(Math.abs(new Date() - item.created) / 1000 / 60 / 60 / 24)} days ago</i>
                  </div>
                  </div>
                </div>`
  })
  const showProjects = document.querySelector('#showProjects');
  if (showProjects) {
    printToDom("#showProjects", showDom);
  }
}

const searchProject = (projects) => {
  const searchBar = document.querySelector('#search-input');
  if (searchBar) {
  searchBar.addEventListener('input', e => {
    const element = e.target.value.toLowerCase();
    const filteredProject = projects.filter(project =>
      project.title.toLowerCase().includes(element)
    )
    projectBuilder(filteredProject);
  });
}
}

//Function for projects page continue
const getProjectInfo = (e) => {
  e.preventDefault();
  const title = document.querySelector('#projectTitle').value;
  const description = document.querySelector('#projectDetails').value;
  const updated = new Date();
  const created = new Date();
  const obj = {
    title,
    description,
    updated,
    created,
  }
  projects.push(obj);
  projectBuilder(projects);
  document.querySelector('form').reset();
}

// Function for projects page
const buttonFunc = (e) => {
  const targetId = e.target.id;
  if (targetId === 'editProject') {
    document.querySelector('#showSecret').innerHTML = `<p>This page is under construction</p>`
  } else if (targetId === 'closeProject') {
    projects.splice(targetId, 1);
    projectBuilder(projects);
  } else if (targetId === 'setting') {
    const question = prompt('Do you want to go to setting page?')
    alert(`${question} is not the right answer to go to the setting`);
  }

  const result = document.querySelector('#projectSort').value;
  if (result === 'alphabet') {
    projects.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1));
    projectBuilder(projects);
  } else if (result === 'update') {
    projects.sort((a, b) => (a.updated > b.updated ? -1 : 1));
    projectBuilder(projects);
  } else if (result === 'create') {
    projects.sort((a, b) => (a.created > b.created ? -1 : 1));
    projectBuilder(projects);
  }
}

// BUTTON EVENTS
const handleButtonClick = () => {
  const submitPin = document.querySelector("#submit-pin");
  if (submitPin) {
    submitPin.addEventListener("click", isPinned);
  }
  const teamSubmit = document.querySelector('#team-form');
  if (teamSubmit) {
    teamSubmit.addEventListener('submit', getTeamInfo);
  }
  const projectSort = document.querySelector('#projectSort');
  if (projectSort) {
    projectSort.addEventListener('click', buttonFunc);
  }
  const showProject = document.querySelector('#showProjects');
  if (showProject) {
    showProject.addEventListener('click', buttonFunc);
  }
  const submitProject = document.querySelector('#submitProject');
  if (submitProject) {
    submitProject.addEventListener('click', getProjectInfo);
  } 
};



// INIT
const init = () => {
  userBuilder(users);
  teamBuilder(team);
  populatePinned(repositories);
  pinnedBuilder(repositories);
  repoBuilder(repositories);
  projectBuilder(projects);
  searchProject(projects);
  packageBuilder(packages);
  handleButtonClick();
};

init();
