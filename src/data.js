import weatherApp from "../public/images/weather-app.png";
import battleship from "../public/images/battleship.png";
import todo from "../public/images/to-do-list.png";
import restaurant from "../public/images/restaurant.png";
import tic from "../public/images/tic-tac-toe.png";
import fumblr from "../public/images/fumblr.png";
import waldo from "../public/images/waldo.png";
import glass from "../public/images/glass-garden.png";
import memory from "../public/images/memory-card.png";
import cv from "../public/images/cv.png";
import calc from "../public/images/calculator.png";
import rock from "../public/images/rock-paper-scissors.png";
import etch from "../public/images/etch.png";
import form from "../public/images/form.png";
import admin from "../public/images/admin-dash.png";

let data = [];
let html = [];
let js = [];
let react = [];
let node = [];

function createItem(demo_url, github_url, title, img) {
  return {
    demo_url: demo_url,
    github_url: github_url,
    title: title,
    img: img,
  };
}

data.push(createItem("", "", ""));


// intermediate html projects
html.push(
  createItem(
    "https://mlorraine4.github.io/form-project/",
    "https://github.com/mlorraine4/form-project",
    "Form Design",
    form
  )
);
html.push(
  createItem(
    "https://mlorraine4.github.io/admin-dash-project/",
    "https://github.com/mlorraine4/admin-dash-project",
    "Admin Dashboard Design",
    admin
  )
);
// next 3 projects were an intro to JS
js.push(
  createItem(
    "https://mlorraine4.github.io/rock-paper-scissors-game/",
    "https://github.com/mlorraine4/rock-paper-scissors-game",
    "Rock Paper Scissors",
    rock
  )
);
js.push(
  createItem(
    "https://mlorraine4.github.io/etch-a-sketch/",
    "https://github.com/mlorraine4/etch-a-sketch",
    "Etch-a-Sketch",
    etch
  )
);
js.push(
  createItem(
    "https://mlorraine4.github.io/calculator/",
    "https://github.com/mlorraine4/calculator",
    "Calculator",
    calc
  )
);
// start of JS course
js.push(
  createItem(
    "https://mlorraine4.github.io/tic-tac-toe/",
    "https://github.com/mlorraine4/tic-tac-toe",
    "Tic Tac Toe",
    tic
  )
);
// intro to webpack
js.push(
  createItem(
    "https://mlorraine4.github.io/restaurant-page/",
    "https://github.com/mlorraine4/restaurant-page",
    "Restaurant Page",
    restaurant
  )
);
js.push(
  createItem(
    "https://mlorraine4.github.io/Todo-List/",
    "https://github.com/mlorraine4/Todo-List",
    "To Do App",
    todo
  )
);
// intro to promises and api's
js.push(
  createItem(
    "https://mlorraine4.github.io/weather-app/",
    "https://github.com/mlorraine4/weather-app",
    "Weather App",
    weatherApp
  )
);
// testing practice
js.push(
  createItem(
    "https://mlorraine4.github.io/battleship/",
    "https://github.com/mlorraine4/battleship",
    "Battleship Game",
    battleship
  )
);
// intro to react
react.push(
  createItem(
    "https://mlorraine4.github.io/cv-project/",
    "https://github.com/mlorraine4/cv-project",
    "CV Creator",
    cv
  )
);
react.push(
  createItem(
    "https://mlorraine4.github.io/memory-card/",
    "https://github.com/mlorraine4/memory-card",
    "Memory Card Game",
    memory
  )
);
react.push(
  createItem(
    "https://mlorraine4.github.io/shopping-cart/",
    "https://github.com/mlorraine4/shopping-cart",
    "Glass Gardens (fake shop)",
    glass
  )
);

// these are not in the react course anymore
react.push(
  createItem(
    "https://mlorraine4.github.io/fumblr/",
    "https://github.com/mlorraine4/fumblr",
    "Fumblr (a fake social media app inspired by Tumblr)",
    fumblr
  )
);
react.push(
  createItem(
    "https://mlorraine4.github.io/waldo-app/",
    "https://github.com/mlorraine4/waldo-app",
    "Photo Tagging Game (inspired by Where's Waldo?)",
    waldo
  )
);



export default data;