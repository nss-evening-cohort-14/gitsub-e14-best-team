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
    language: "Javascript",
    starsNumber: 8,
    mit: 3,
    issues: " 1 issue needs help",
    updated: " Updated",
    pinned: true,
    id: 1,
  },
  {
    name: "how-many-days-until",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusamus labore earum sit est suscipit incidunt soluta corporis libero velit fugit eveniet optio quidem non officia quibusdam ab, ipsum voluptatum!",
    technologies: ["react", "countdown", "hacktoberfest"],
    language: "Javascript",
    starsNumber: 6,
    mit: 21,
    issues: 33,
    updated: " Updated 19 days ago",
    pinned: true,
    id: 2,
  },
  {
    name: "httiriri",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusamus labore earum sit est suscipit incidunt soluta corporis libero velit fugit eveniet optio quidem non officia quibusdam ab, ipsum voluptatum!",
    technologies: ["http", "status-codes", "gifs", "rihanna", "hacktoberfest"],
    language: "Typescript ",
    starsNumber: 37,
    mit: 22,
    issues: "4 issues need help ",
    updated: " Updated 27 days ago",
    pinned: false,
    id: 3,
  },
  {
    name: "ambition-fund-website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusamus labore earum sit est suscipit incidunt soluta corporis libero velit fugit eveniet optio quidem non officia quibusdam ab, ipsum voluptatum!",
    technologies: ["donation", "landing-page"],
    language: "Javascript ",
    starsNumber: 7,
    mit: 3,
    issues: 6,
    issues: "3 issues need help ",
    updated: " Updated Dec 12, 2020",
    pinned: false,
    id: 4,
  },
];

// ARRAY FOR TEAM PAGE
const team = [
  {
    name: "Kat Siren",
    username: "katsiren55",
    website: "aboutkatsiren.com",
    twitter: "Koffee&Kat",
    linkedin: "Kat Professional",
    imageUrl: "images/katy-logo.png",
  },
  {
    name: "Rob Cole",
    username: "robertncole1",
    website: "https://robcolecreative.com",
    twitter: "none",
    linkedin: "robertncole",
    imageUrl:
      "https://avatars.githubusercontent.com/u/76854545?s=460&u=f5424c7a737a6e847fb0415886a6857f56f15bc7&v=4",
  },
  {
    name: "Sara Schoonover",
    username: "username",
    website: "https://saraiscool.com",
    twitter: "saraschoon",
    linkedin: "saraschoonover",
    imageUrl:
      "https://avatars.githubusercontent.com/u/25774314?s=460&u=f02c0b3ec9ec2c2cf3ed4ecae25d6d793048f020&v=4",
  },
  {
    name: "Katy Fry",
    username: "katherinevfry",
    website: "https://katyisalsocool.com",
    twitter: "katytweets",
    linkedin: "katyfry",
    imageUrl:
      "https://avatars.githubusercontent.com/u/76188832?s=460&u=fb1aebf589c5e439050bf5fb06e3da7f5461cce9&v=4",
  },
  {
    name: "Chie Stroud",
    username: "chiestroud",
    website: "https://chieisawesome.com",
    twitter: "chietweetstoo",
    linkedin: "chiestroud",
    imageUrl:
      "https://avatars.githubusercontent.com/u/68720317?s=460&u=e4b1e68066942f150a3ebe9aa8ed3cc911923742&v=4",
  },
  {
    name: "Jim Conner",
    username: "jim-conner",
    website: "https://jimisfantastic.com",
    twitter: "jimtweets",
    linkedin: "jimconner",
    imageUrl:
      "https://avatars.githubusercontent.com/u/76793747?s=460&u=c9f5e6bf6e28cbf0994456535f2a7fa8aa6aa313&v=4",
  },
];

const projects = [
  {
    title: "French Fries",
    description: "My favorite french fries project",
    open: true,
    private: false,
    created: new Date("Aug 25, 2019"),
    updated: new Date("Feb 1, 2021"),
    id: 0,
  },
  {
    title: "Cheese Burger",
    description: "This is my Cheese Burger project",
    open: true,
    private: false,
    created: new Date("Feb 3, 2018"),
    updated: new Date("Mar 30, 2019"),
    id: 1,
  },
  {
    title: "Ice Cream",
    description: "Ice Cream project vol.3",
    open: true,
    private: false,
    created: new Date("May 29, 2018"),
    updated: new Date("Jul 15, 2020"),
    id: 2,
  },
  {
    title: "Best-team project",
    description: "This is the Best Team Project",
    open: true,
    private: false,
    created: new Date("Jan 2, 2000"),
    updated: new Date("Dec 1, 2019"),
    id: 3,
  },
  {
    title: "Secret Project",
    description: "Please don't look at this project",
    open: true,
    private: true,
    created: new Date("Jan 14, 2021"),
    updated: new Date("Jan 31, 2021"),
    id: 4,
  },
  {
    title: "Top Secret Project",
    description: "SECRET...",
    open: false,
    private: false,
    created: new Date("Dec 5, 2020"),
    updated: new Date("Jan 1, 2021"),
    id: 5,
  },
];

const packages = [
  {
    icon:
      "https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png",
    name: "Docker",
    description:
      "The world's easiest way to create, manage, and deliver your teams' container applications. ",
    website: "https://hub.docker.com/",
  },

  {
    icon: "http://maven.apache.org/images/logos/build-by-maven-black.png",
    name: "Apache Maven",
    description:
      "A default package manager used with Java and the Java runtime environment.",
    website: "https://maven.apache.org/",
  },

  {
    icon: "https://www.nuget.org/Content/gallery/img/logo-og-600x600.png",
    name: "NuGet",
    description:
      "A package manager used with Microsoft platforms, including .NET.",
    website: "https://www.nuget.org/",
  },

  {
    icon: "https://cdn.worldvectorlogo.com/logos/rubygems.svg",
    name: "RubyGems",
    description:
      "A standard format for distributing programs and libraries with Ruby",
    website: "https://rubygems.org/",
  },

  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
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

// NAV BUILDER
const navBuilder = (taco) => {
  let domString = `<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="index.html"
            >Overview</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="repo.html">Repositories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="projects.html">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="packages.html">Packages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="team.html">Team</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
  printToDom("#navbar", domString);
};

// FOOTER BUILDER
const footerBuilder = (taco) => {
  let domString = `<footer class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#"
            >© 2021 GitHub, INC.</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Privacy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Security</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Status</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Help</a>
        </li>
        <li class="nav-item">
          <img
            class="gitsubLogo"
            src="images/katy-logo.png"
            alt="GitHub altered logo"
          />
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact GitGub</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">API</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Training</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</footer>`;
  printToDom("#footer", domString);
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
                    <div class="row">
                      <div class="col-md-4" id="team-member-col" >
                        <img class="team-member" src="${item.imageUrl}" alt="kat siren logo">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${item.name}</h5>
                          <div class="row">
                            <div class="col">
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i class="fas fa-user"></i>  ${item.username}</li>
                                <li class="list-group-item"><i class="fab fa-twitter"></i>  ${item.twitter}</li>
                              </ul>
                            </div>
                            <div class="col">
                              <ul class="list-group list-group-flush">
                                <li class="list-group-item"><i class="fas fa-link"></i>  ${item.website}</li>
                                <li class="list-group-item"><i class="fab fa-linkedin-in"></i>  ${item.linkedin}</li>
                              </ul>
                            </div>
                          </div>
                          <button type="button" class="btn-close btn-close-white delete" id="${i}" aria-label="Close" title="Delete Team Member"></button>
                        </div>
                      </div>
                    </div>
                  </div>`;
  });
  printToDom("#team-members", domString);
};

// TEAM MEMBER GET FORM INFO
const getTeamInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const username = document.querySelector("#username").value;
  const website = document.querySelector("#website").value;
  const twitter = document.querySelector("#twitter").value;
  const imageUrl = document.querySelector("#imageUrl").value;
  const linkedin = document.querySelector("#linkedin").value;

  const obj = {
    name,
    username,
    website,
    twitter,
    linkedin,
    imageUrl,
  };

  team.push(obj);
  teamBuilder(team);

  document.querySelector("form").reset();
};

// TEAM MEMBER DELETE FUNCTION
const deleteTeam = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  if (targetType === "button") {
    team.splice(targetId, 1);
  }
  teamBuilder(team);
};

// FUNCTION FOR OVERVIEW PAGE
const pinnedBuilder = (taco) => {
  let pinnedCard = "";
  taco.forEach((item, i) => {
    if (item.pinned === true) {
      let num = Math.floor(Math.random() * 100 + 1);
      let num2 = Math.floor(Math.random() * 20 + 1);
      pinnedCard += `<div class="card" style="width: 22rem;">
     <span id="unpin"><button type="button" title="delete pin" class="btn-close btn-close-white" aria-label="Close" id="unpin--${item.id}">
</button></span>
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
  printToDom("#pinnedRepoHouse", pinnedCard);
};

//POPULATE OVERVIEW FORM DROPDOWN
const populatePinned = (taco) => {
  let pinnedText = "";
  taco.forEach((item, i) => {
    if (item.pinned === false) {
      pinnedText += `<option value=${item.name}>${item.name}</option>`;
    }
  });
  printToDom("#getPinned", pinnedText);
};

const repoBuilder = (taco) => {
  domString = "";
  taco.forEach((item, i) => {
    domString += `<div class="card" style="height: 10em width: 18rem; id=${i}">
    <div class="card-body">
      <h5 class="card-title" id='card-title'>${item.name}</h5>
      <p class="card-text" id="card-text">${item.description}</p>
      <br>
       <a href="#" class="card-link" id="link1">${item.technologies}</a>
      <br>
      <span class="lang"><i class="fas fa-circle mx-1" style="color: yellow"></i>${item.language}</span>
      <span class="stars"><i class="far fa-star"></i>${item.starsNumber}</span>
      <span class="mit"><i class="fas fa-code-branch mx-1"></i>${item.mit}</span>
      <span class="issues">${item.issues}</span>
      <span class="update">${item.updated}</span>
       <div id="starbtn">
       <label class="btn btn-secondary">
      <i class="bi bi-star"name="options" id="option2" autocomplete="off"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
    </svg> Star</i>
  </label>
  </div
    </div>
  </div>
    `;
  });
  printToDom("#repo", domString);
};

//functionality for search bar
const searchAble = (repositories) => {
  const searchBar = document.querySelector("#searchBar");
  if (searchBar) {
    searchBar.addEventListener("input", (e) => {
      const searchString = e.target.value.toLowerCase();
      const filteredRepo = repositories.filter((repo) =>
        repo.name.toLowerCase().includes(searchString)
      );
      repoBuilder(filteredRepo);
    });
  }
};

// Packages builder
const packageBuilder = (taco) => {
  let domString = "";
  taco.forEach((item, i) => {
    domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <img src="${item.icon}" alt="Package Icon" width="50" height="50"
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.description}</p>
                      <a href="${item.website}" class="btn btn-success">Learn More</a>
                      <button type="button" class="btn btn-danger" >Remove</button>
                    </div>
                  </div>`;
  });
  printToDom("#package", domString);
};
// Create package function
const addPackage = (e) => {
  e.preventDefault();
  const name = document.querySelector("#formGroupExampleInput").value;
  const description = document.querySelector("#exampleFormControlTextarea1")
    .value;

  const objs = {
    name,
    description,
  };

  packages.push(objs);
  packageBuilder(packages);
};

// Delete Package function
const deletePackage = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  if (targetType === "button") {
    packages.splice(targetId, 1);
  }
  packageBuilder(packages);
};

//FUNCTION FOR OVERVIEW PAGE

const isPinned = (e) => {
  e.preventDefault();
  let buttonType = e.target.id;
  const makePinned = document.querySelector("#getPinned").value;
  if (buttonType === "submit-pin") {
    repositories.forEach((item, i) => {
      if (item.name === makePinned) {
        item.pinned = true;
      }
    });
    pinnedBuilder(repositories);
    populatePinned(repositories);
  }
  if (buttonType.includes("unpin")) {
    const id = Number(buttonType.split("--")[1]);
    const findRepo = repositories.find((repo) => repo.id === id);
    findRepo.pinned = false;
    pinnedBuilder(repositories);
    populatePinned(repositories);
  }
};

// Function for Projects page
const projectBuilder = (taco) => {
  let showDom = "";
  taco.forEach((item, i) => {
    showDom += `<div class="container border border-white" id=${i}>
                  <div class="row">
                    <div class="col-4 align-self-start">
                      ${item.title}
                    </div>
                    <div class="col-6 align-self-start">
                      ${item.description}
                    </div>
                    <div id="editButton" class="col-1 dropdown align-self-end">
                      <button class="btn btn-white text-white btn-sm dropdown align-self-end" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        ...
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" id="editProject" href="#">Edit File</a></li>
                        <li><a class="dropdown-item" id="closeProject--${
                          item.id
                        }" href="#">Close Project</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" id="setting" href="#">Setting</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="row">
                  <div class="col-4 align-self-start">
                  <i class="far fa-clock fs-6"></i> Updated ${Math.floor(
                    Math.abs(new Date() - item.updated) / 1000 / 60 / 60
                  )} hours ago
                  </div>
                  <div class="col-6 align-self-start">
                  <i class="fas fa-grimace"></i> Created ${Math.floor(
                    Math.abs(new Date() - item.created) / 1000 / 60 / 60 / 24
                  )} days ago</i>
                  </div>
                  </div>
                </div>`;
  });
  printToDom("#showProjects", showDom);
};

const searchProject = (projects) => {
  const searchBar = document.querySelector("#search-input");
  searchBar.addEventListener("input", (e) => {
    const element = e.target.value.toLowerCase();
    const filteredProject = projects.filter((project) =>
      project.title.toLowerCase().includes(element)
    );
    projectBuilder(filteredProject);
  });
};

//Function for projects page continue
const getProjectInfo = (e) => {
  e.preventDefault();
  const title = document.querySelector("#projectTitle").value;
  const description = document.querySelector("#projectDetails").value;
  const updated = new Date();
  const created = new Date();
  const obj = {
    title,
    description,
    updated,
    created,
  };
  projects.push(obj);
  projectBuilder(projects);
  document.querySelector("form").reset();
};

// Function for projects page
const buttonFunc = (e) => {
  const targetId = e.target.id;
  if (targetId === "editProject") {
    document.querySelector(
      "#showSecret"
    ).innerHTML = `<p class="text-warning fw-bold">This page is under construction</p>`;
  } else if (targetId.includes("closeProject")) {
    const id = Number(targetId.split("--")[1]);
    const findProj = projects.find((projects) => projects.id === id);
    document.querySelector(
      "#showSecret"
    ).innerHTML = `<p class="text-warning fw-bold">Congratulations! You closed ${findProj.title} project</p>`;
    projects.splice(targetId, 1);
    projectBuilder(projects);
  } else if (targetId === "setting") {
    const question = prompt("Do you want to go to setting page?");
    alert(`${question} is not the right answer to go to the setting`);
  }

  const result = document.querySelector("#projectSort").value;
  if (result === "alphabet") {
    projects.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
    );
    projectBuilder(projects);
  } else if (result === "update") {
    projects.sort((a, b) => (a.updated > b.updated ? -1 : 1));
    projectBuilder(projects);
  } else if (result === "create") {
    projects.sort((a, b) => (a.created > b.created ? -1 : 1));
    projectBuilder(projects);
  }
};
//Function for repo page
const createRepoForm = (e) => {
  e.preventDefault();
  const name = document.querySelector("#repoName").value;
  const description = document.querySelector("#description").value;
  const language = "Javascript";
  const starsNumber = 8;
  const mit = 3;
  const issues = "1 issue needs help";
  const updated = "Updated";

  const obj = {
    name,
    description,
    language,
    starsNumber,
    mit,
    issues,
    updated,
  };

  repositories.push(obj);
  repoBuilder(repositories);

  document.querySelector("form").reset();
};

const getPageLocation = () => {
  const pageName = location.pathname;
  if (pageName === "/packages.html") {
    packageBuilder(packages);
    document.querySelector("#form").addEventListener("click", addPackage);
    document.querySelector("#package").addEventListener("click", deletePackage);
  } else if (pageName === "/index.html") {
    populatePinned(repositories);
    pinnedBuilder(repositories);
    document.querySelector("#submit-pin").addEventListener("click", isPinned);
    document.querySelector("#pinnedRepoHouse").addEventListener("click", isPinned);
  } else if (pageName === "/projects.html") {
    projectBuilder(projects);
    searchProject(projects);
    document.querySelector("#projectSort").addEventListener("click", buttonFunc);
    document.querySelector("#showProjects").addEventListener("click", buttonFunc);
    document.querySelector("#submitProject").addEventListener("click", getProjectInfo);
  } else if (pageName === "/team.html") {
    teamBuilder(team);
    document.querySelector("#team-form").addEventListener("submit", getTeamInfo);
    document.querySelector("#team-members").addEventListener("click", deleteTeam);
  } else if (pageName === "/repo.html") {
    repoBuilder(repositories);
    searchAble(repositories);
    document.querySelector("#create-button").addEventListener("click", createRepoForm);
  }
};

// INIT
const init = () => {
  getPageLocation();
  navBuilder();
  footerBuilder();
  userBuilder(users);
};

init();
