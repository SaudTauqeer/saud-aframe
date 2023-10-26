AFRAME.registerComponent("references", {
  init: function () {
    const referencesText = document.createElement("a-text");
    referencesText.setAttribute(
      "value",
      "Gavin Dove, CEO, Fluent.co\nyaniv@fluent.co"
    );
    referencesText.setAttribute("align", "center");
    referencesText.setAttribute("position", "0 -2 -3");
    referencesText.setAttribute("color", "#FFF");
    this.el.appendChild(referencesText);
  },
});
