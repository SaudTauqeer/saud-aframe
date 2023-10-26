AFRAME.registerComponent("experience", {
  init: function () {
    const timeline = document.createElement("a-entity");
    timeline.setAttribute("position", "0 1 -4");

    const fluentText = document.createElement("a-text");
    fluentText.setAttribute(
      "value",
      "Founding Engineer, Fluent\n2020 – 2023 | Remote"
    );
    fluentText.setAttribute("align", "left");
    fluentText.setAttribute("position", "0 1 0");
    fluentText.setAttribute("color", "#FFF");
    timeline.appendChild(fluentText);

    const soFriendlyText = document.createElement("a-text");
    soFriendlyText.setAttribute(
      "value",
      "Full-stack Developer, SoFriendly\n2018 – 2020 | Remote"
    );
    soFriendlyText.setAttribute("align", "left");
    soFriendlyText.setAttribute("position", "0 0 0");
    soFriendlyText.setAttribute("color", "#FFF");
    timeline.appendChild(soFriendlyText);

    this.el.appendChild(timeline);
  },
});
