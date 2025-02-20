const containers = document.querySelectorAll(".container");

containers.forEach((container) => {
  // listener to know when my .questions class is clicked
  container.addEventListener("click", (e) => {
    if (
      e.target.tagName === "DIV" ||
      e.target.tagName === "H4" ||
      e.target.tagName === "I"
    ) {
      let icon = container.querySelector("i");
      let p = container.querySelector("p");
      icon.classList.toggle("clicked");//Add .clicked class for <i> to change the icon
      p.classList.toggle("clicked");//Add .clicked class for <p> to change the display value
    }
  });
});
