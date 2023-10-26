AFRAME.registerComponent("introduction", {
  init: function () {
    const text = document.createElement("a-text");
    text.setAttribute("value", "Saud Tauqeer\nBackend & Devops");
    text.setAttribute("align", "center");
    text.setAttribute("position", "0 2 -3");
    text.setAttribute("color", "black");
    this.el.appendChild(text);
  },
});
