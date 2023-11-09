import ProjectDisplay from "./ProjectDisplay";
import weatherApp from "../images/weather-16-9.png";
import battleship from "../images/battleship-16-9.png";
import todo from "../images/to-do-16-9.png";
import restaurant from "../images/restaurant-16-9.png";
import tic from "../images/tic-16-9.png";
import fumblr from "../images/fumblr-16-9.png";
import waldo from "../images/waldo-16-9.png";
import glass from "../images/glass-16-9.png";
import memory from "../images/memory-16-9.png";
import cv from "../images/cv-16-9.png";
import calc from "../images/calc-16-9.png";
import rock from "../images/rock-16-9.png";
import etch from "../images/etch-16-9.png";
import form from "../images/form-16-9.png";
import admin from "../images/admin-16-9.png";

function Homepage() {
    
  return (
    <div id="Homepage">
      <h1>Portfolio</h1>
      <h2>Node & Express</h2>
      <h2>React</h2>
      <div className="flex">
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/fumblr/"
          title="Fumblr"
          imgSrc={fumblr}
        />
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/waldo-app/"
          title="Photo Tagging Game"
          imgSrc={waldo}
        />
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/shopping-cart/"
          title="Glass Gardens"
          imgSrc={glass}
        />
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/memory-card/"
          title="Memory Game"
          imgSrc={memory}
        />
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/cv-project/"
          title="CV Creator"
          imgSrc={cv}
        />
      </div>
      <h2>Javascript</h2>
      <h3>Testing Practice</h3>
      <div className="flex">
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/battleship/"
          title="Battleship"
          imgSrc={battleship}
        />
      </div>
      <h3>Intro to Promises & API's</h3>
      <div className="flex">
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/weather-app/"
          title="Weather App"
          imgSrc={weatherApp}
        />
      </div>
      <h3>Intro to Webpack</h3>
      <div className="flex">
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/Todo-List/"
          title="To Do List App"
          imgSrc={todo}
        />
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/restaurant-page/"
          title="Restaurant Page Design"
          imgSrc={restaurant}
        />
      </div>
      <h3>Intro to Javascript</h3>
      <div className="flex">
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/tic-tac-toe/"
          title="Tic Tac Toe Game"
          imgSrc={tic}
        />
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/calculator/"
          title="Calculator"
          imgSrc={calc}
        />
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/rock-paper-scissors-game/"
          title="Rock, Paper, Scissors Game"
          imgSrc={rock}
        />
        <ProjectDisplay
          demoUrl="https://mlorraine4.github.io/etch-a-sketch/"
          title="Etch-a-Sketch"
          imgSrc={etch}
        />
      </div>
      <h2>HTML</h2>
      <h3>Advanced</h3>

      <h3>Intermediate</h3>
      <div className="flex">
        <ProjectDisplay
          title="Form Design"
          demoUrl="https://mlorraine4.github.io/form-project/"
          imgSrc={form}
        />
        <ProjectDisplay
          title="Admin Dashboard Design"
          demoUrl="https://mlorraine4.github.io/admin-dash-project/"
          imgSrc={admin}
        />
      </div>
    </div>
  );
}

export default Homepage;
