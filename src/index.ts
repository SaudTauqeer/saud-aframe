// import "aframe";

import "./components/introduction";
import "./components/experience";
import "./components/skills";
import "./components/aboutMe";
import "./components/references";

console.log("zaza");
document.addEventListener("DOMContentLoaded", () => {
  const scene = document.querySelector("a-scene");
  if (scene) {
    // Introduction
    const introduction = document.createElement("a-entity");
    introduction.setAttribute("introduction", "");
    scene.appendChild(introduction);

    // // Experience
    // const experience = document.createElement("a-entity");
    // experience.setAttribute("experience", "");
    // scene.appendChild(experience);

    // // Skills
    // const skills = document.createElement("a-entity");
    // skills.setAttribute("skills", "");
    // scene.appendChild(skills);

    // // About Me
    // const aboutMe = document.createElement("a-entity");
    // aboutMe.setAttribute("aboutme", "");
    // scene.appendChild(aboutMe);

    // // References
    // const references = document.createElement("a-entity");
    // references.setAttribute("references", "");
    // scene.appendChild(references);
  }
});
