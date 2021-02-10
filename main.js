// console.log('hello');

// ARRAY FOR USER SECTION
const users = [
  {
    name: 'Kat Siren',
    username: 'katsiren55',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure assumenda maxime et? Facilis sapiente architecto inventore temporibus unde obcaecati veritatis. Aut assumenda, libero incidunt nihil dolore ut consequatur et?',
    followers: '200k',
    following: 5,
    location: 'Istanbul',
    gitHub: 'katsiren@kat.com',
    website: 'aboutkatsiren.com',
    twitter: 'Koffee&Kat',
    organizations: [],
    sponsors: [],
  },  
];

const repositories = [

];

const team = [

];

const projects = [

];

const packages = [

];

// PRINT TO DOM
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// CARD BUIDLER
const userBuilder = (taco) => {
  let domString = '';
  taco.forEach((item, i) => {
    domString += `<div class="card" style="width: 18rem;">
                    <img src="images/katy-logo.png" class="card-img-top" alt="katSiren">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <h6>${item.username}</h6>
                      <p class="card-text">${item.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${item.location}</li>
                      <li class="list-group-item">${item.gitHub}</li>
                      <li class="list-group-item">${item.website}</li>
                      <li class="list-group-item">${item.twitter}</li>
                      <li class="list-group-item">${item.followers}</li>
                      <li class="list-group-item">${item.following}</li>
                    </ul>
                  </div>`
  })
  printToDom('#sidebar', domString);
}
// GRAB FORM INFO

// BUTTON EVENTS

// INIT
const init = () => {
  userBuilder(users);
}

init();
