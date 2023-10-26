AFRAME.registerComponent("skills", {
  init: function () {
    const skillsTree = document.createElement("a-entity");
    skillsTree.setAttribute("position", "0 0 -5");

    const programmingLanguages = document.createElement("a-text");
    programmingLanguages.setAttribute(
      "value",
      "Programming Languages:\nJavaScript, TypeScript, SQL"
    );
    programmingLanguages.setAttribute("align", "left");
    programmingLanguages.setAttribute("position", "0 1 0");
    programmingLanguages.setAttribute("color", "#FFF");
    skillsTree.appendChild(programmingLanguages);

    const libraries = document.createElement("a-text");
    libraries.setAttribute(
      "value",
      "Libraries/Frameworks:\nReact, Redux, Express"
    );
    libraries.setAttribute("align", "left");
    libraries.setAttribute("position", "0 0 0");
    libraries.setAttribute("color", "#FFF");
    skillsTree.appendChild(libraries);

    this.el.appendChild(skillsTree);
  },
});
