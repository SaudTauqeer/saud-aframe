AFRAME.registerComponent("aboutme", {
  init: function () {
    const aboutMeText = document.createElement("a-text");
    aboutMeText.setAttribute("value", "I’ve been a gamer since I was a kid...");
    aboutMeText.setAttribute("align", "center");
    aboutMeText.setAttribute("position", "0 -1 -3");
    aboutMeText.setAttribute("color", "#FFF");
    this.el.appendChild(aboutMeText);
  },
});
